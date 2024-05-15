const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const app = express();
const port = process.env.VITE_NODE_PORT;
const isProd = process.env.NODE_ENV === 'production';

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
const myEmail = process.env.VITE_SENDER_EMAIL;
const myPassword = process.env.VITE_NODEMAILER_PASS;

function sendEmail(reservationDetails) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: myEmail,
        pass: myPassword,
      },
    });
    const mail_configs = {
      from: reservationDetails.email,
      to: myEmail,
      subject: 'STS Reservation',
      html:
`<table>
      <tr>
        <td>
          <p>Customer reservation</p>
          <table>
            <tr>
              <td><strong>Car Model:</strong></td>
              <td style="padding-left: 10px">${reservationDetails.carModel}</td>
            </tr>
            <tr>
              <td><strong>Service Type:</strong></td>
              <td style="padding-left: 10px">${reservationDetails.serviceType}</td>
            </tr>
            <tr>
              <td><strong>Pickup Date:</strong></td>
              <td style="padding-left: 10px">${reservationDetails.pickUpDate}</td>
            </tr>
            <tr>
              <td><strong>Pick Up Location:</strong></td>
              <td style="padding-left: 10px">${reservationDetails.pickUpLocation}</td>
            </tr>
            <tr>
              <td><strong>Drop off location:</strong></td>
              <td style="padding-left: 10px">${reservationDetails.dropOffLocation}</td>
            </tr>
            <tr>
              <td><strong>Passengers:</strong></td>
              <td style="padding-left: 10px">${reservationDetails.passengers}</td>
            </tr>
            <tr>
              <td><strong>Email:</strong></td>
              <td style="padding-left: 10px">${reservationDetails.email}</td>
            </tr>
            <tr>
              <td><strong>Phone:</strong></td>
              <td style="padding-left: 10px">${reservationDetails.phone}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
<!-- partial -->
  
</body>
</html>`,
    };
    transporter.sendMail(mail_configs, function (error) {
      console.log(error);
      if (error) {
        return reject({ message: `An error has occurred. Please try again!` });
      }
      return resolve({ message: 'Email sent successfully.' });
    });
  });
}

app.post('/send-email', (req, res) => {
  sendEmail(req.body)
    .then(() => res.status(200).send({ success: true }))
    .catch((error) => res.status(500).send({ error: error.message }));
});

app.listen(port, () => {
  console.log(`STS is listening at ${isProd ? process.env.VITE_API_BASE_URL_PROD : process.env.VITE_API_BASE_URL_DEV}:${port}`);
});