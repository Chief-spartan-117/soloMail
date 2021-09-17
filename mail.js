module.exports = function (To,Cc,Subject,Msg,value){
	
	const mailer = require('nodemailer');
	const email = require('./ice.json');

	let service = mailer.createTransport({
		host: 'smtppro.zoho.com',
   		port: 465,
   		secure: true,
  		auth: {
    		user: email.username,
    		pass: email.pass,
  		}
	});

	let options = {
		from: email.username,
		to: To,
		cc: Cc,
		subject: Subject,
		text: Msg
	};

  for(i=0; i<value; i++){
	service.sendMail(options, (error,res) =>{
		if (error){
			console.log(error);
		}
		else{
			console.log(`Email sent to ${options.to} and ${options.cc}..... ${i} times`);
		}
	});
  }
};
