const express  = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');


router.post('/', (req, res, next) => {
    const {fullname, email, message} = req.body;
    const contentHTML = `
    <h1>Formulario de nodemailer</h1>
    <ul>
      <li>name: ${fullname}</li>
      <li>email: ${email}</li>
    </ul>
    <p>${message}</p>
    `;

    const CLIENTD_ID="67101201099-e24gt7bsr8ormhrd8kf17avkpfnb8dkg.apps.googleusercontent.com";
    const CLIENTD_SECRET="ZuHbSToBos7GHZeNZyFamDOz";
    const REDIRECT_URI="https://developers.google.com/oauthplayground";
    const REFRESH_TOKEN="1//0449phjYnA_3RCgYIARAAGAQSNwF-L9Ir1S6WEsvhUaSyqD11JQfLivh9g_TVJOv9pnwlmUus4i13WZgZOAYPuvvnrFEfnoJ54Ho";
    const oAuth2Client = new google.auth.OAuth2(
	CLIENTD_ID,
	CLIENTD_SECRET,
	REDIRECT_URI
    );

    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN});

    async function sendMail() {
	try {
	    const accessToken = await oAuth2Client.getAccessToken();
	    const transporter = nodemailer.createTransport({
		service:"gmail",
		auth:{
		    type:"OAuth2",
		    user:"booksfooryou@gmail.com",
		    clientId:CLIENTD_ID,
		    clientSecret:CLIENTD_SECRET,
		    refreshToken:REFRESH_TOKEN,
		    accessToken:accessToken,
		},
	    });

	    const mailOptions = {
		from:"Pagina web Books4U <booksfooryou@gmail.com>",
		to: "sixtandv@gmail.com",
		subject: "Books4U prueba",
		html: contentHTML,
	    };

	    const result = await transporter.sendMail(mailOptions);
	    return result;
	} catch (error) {
	    console.log(error);
	}
    }
    sendMail()
	.then((result) => res.status(200).redirect('http://localhost:3000/contact'))
	.catch((error) => console.log(error.message)); 
});


module.exports = router;
