const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const twilio = require('twilio');

dotenv.config();

const app = express();
const port = process.env.NODE_PORT;
const isProd = process.env.NODE_ENV === 'production';
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const cid = process.env.TWILIO_CONTENT_SID;
const fromCid = process.env.TWILIO_FROM_SID;
const toNumber = process.env.WHATSAPP_NUMBER;
const client = twilio(accountSid, authToken);

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// this functionality has no longer needed, but we are keeping it for no any reason :)))))

// cron.schedule('0 0 * * *', async() => {
//   try {
//     await storeNewToken()
//     console.log('Token was updated successfully.')
//   } catch (err) {
//     console.error(`Cron Error: ${err.message || error}`)
//   }
// });
//
// const envFilePath = path.resolve(__dirname, '.env');
// const storeNewToken = async () => {
//   try {
//     const response = await axios.post(`https://graph.facebook.com/v19.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${process.env.WHATSAPP_CLIENT_ID}&client_secret=${process.env.WHATSAPP_CLIENT_SECRET}&fb_exchange_token=${process.env.WHATSAPP_TOKEN}`)
//
//     const envFileContent = fs.readFileSync(envFilePath, 'utf-8');
//     const updatedEnvFileContent = envFileContent.replace(/WHATSAPP_TOKEN=.*/, `WHATSAPP_TOKEN=${response.data.access_token}`);
//     fs.writeFileSync(envFilePath, updatedEnvFileContent);
//   } catch (err) {
//     console.error(err);
//   }
// }

// -------


async function sendMessage(reservationDetails) {
  try {
    return await client.messages.create({
      contentSid: cid,
      contentVariables: JSON.stringify({
        "carModel": reservationDetails.carModel,
        "serviceType": reservationDetails.serviceType,
        "pickUpDate": reservationDetails.pickUpDate,
        "pickUpLocation": reservationDetails.pickUpLocation,
        "dropOffLocation": reservationDetails.dropOffLocation,
        "passengers": reservationDetails.passengers,
        "phone": reservationDetails.phone,
        "email": reservationDetails.email,
      }),
      from: fromCid,
      to: `whatsapp:+${toNumber}`,
    });
  } catch (error) {
    console.error(error)
    throw Error({ message: `An error has occurred. Please try again, due to: ${error.message || error}` })
  }
}

app.get('/', (req, res) => {
  return res.send('Server is running!')
});

app.post('/send-message', (req, res) => {
  sendMessage(req.body)
    .then(() => res.status(200).send({ success: true }))
    .catch((error) => res.status(500).send({ error: error.message }));
});

app.listen(port, () => {
  console.log(`STS is listening at ${isProd ? process.env.API_BASE_URL_PROD : process.env.API_BASE_URL_DEV}:${port}`);
});