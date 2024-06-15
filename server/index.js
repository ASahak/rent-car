const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

dotenv.config();

const app = express();
const port = process.env.NODE_PORT;
const isProd = process.env.NODE_ENV === 'production';

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

cron.schedule('* * * * *', async() => {
  try {
    await storeNewToken()
    console.log('Token was updated successfully.')
  } catch (err) {
    console.error(`Cron Error: ${err.message || error}`)
  }
});

const envFilePath = path.resolve(__dirname, '.env');
const storeNewToken = async () => {
  try {
    const response = await axios.post(`https://graph.facebook.com/v19.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${process.env.WHATSAPP_CLIENT_ID}&client_secret=${process.env.WHATSAPP_CLIENT_SECRET}&fb_exchange_token=${process.env.WHATSAPP_TOKEN}`)

    const envFileContent = fs.readFileSync(envFilePath, 'utf-8');
    const updatedEnvFileContent = envFileContent.replace(/WHATSAPP_TOKEN=.*/, `WHATSAPP_TOKEN=${response.data.access_token}`);
    fs.writeFileSync(envFilePath, updatedEnvFileContent);
  } catch (err) {
    console.error(err);
  }
}

async function sendMessage(reservationDetails) {
  try {
    return await axios.post(`https://graph.facebook.com/v19.0/${process.env.WHATSAPP_BUSINESS_ACCOUNT_ID}/messages`, {
      messaging_product: 'whatsapp',
      to: process.env.WHATSAPP_NUMBER,
      type: 'text',
      text: {
        body:
          `
Customer reservation

Car Model: ${reservationDetails.carModel}
Service Type: ${reservationDetails.serviceType}
Pickup Date: ${reservationDetails.pickUpDate}
Pick Up Location: ${reservationDetails.pickUpLocation}
Drop off location: ${reservationDetails.dropOffLocation}
Passengers: ${reservationDetails.passengers}
Phone: ${reservationDetails.phone}
Email: ${reservationDetails.email}
`
      },
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
  } catch (error) {
    throw Error({ message: `An error has occurred. Please try again, due to: ${error.message || error}` })
  }
}

app.get('/', (req, res) => {
  return res.send('Server is running!')
});

app.post('/send-message', (req, res) => {
  sendMessage(req.body)
    .then(() => res.status(200).send({ success: true }))
    .catch((error) => res.status(500).send({ error: error.message || error }));
});

app.listen(port, () => {
  console.log(`STS is listening at ${isProd ? process.env.API_BASE_URL_PROD : process.env.API_BASE_URL_DEV}:${port}`);
});
