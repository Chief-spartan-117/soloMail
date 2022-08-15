//-----------------------------------------------------------------------------------------------\\
const express = require("express");
const path = require("path");
const parser = require("body-parser");
const mailer = require("nodemailer");
const email = require("./ice.json");
const app = express();
const port = process.env.PORT || 3000;
const bparser = parser.urlencoded({ extended: false });

app.use(express.static(path.join(__dirname, "/")));

app.get("/", (req, res) => {
  res.redirect("/views/index.html");
});

app.listen(port, () => {
  console.log(`Server connected at port ${port}`);
});
//----------------------------------------------------------------------------------------------\\

app.post("/anon", bparser, (req, res) => {
  let service = mailer.createTransport({
    host: "smtppro.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: email.username,
      pass: email.pass,
    },
  });

  let options = {
    from: email.username,
    to: req.body.to,
    cc: req.body.cc,
    subject: req.body.sub,
    text: req.body.msg,
  };

  service.sendMail(options, (error) => {
    if (error) {
      console.log(error);
      res.redirect("/views/404.html");
    } else {
      console.log(
        `Email sent to ${options.to} and ${options.cc}..... ${1} times`
      );
      res.redirect("/views/sent.html");
    }
  });
});
//---------------------------------------------------------------------------------------------\\

app.post("/anon2", bparser, (req, res) => {
  let service = mailer.createTransport({
    host: "smtppro.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: email.username,
      pass: email.pass,
    },
  });

  let options = {
    from: email.username,
    to: req.body.to,
    cc: req.body.cc,
    subject: req.body.sub,
    text: req.body.msg,
  };

  for (i = 0; i < req.body.value; i++) {
    service.sendMail(options, (error) => {
      if (error) {
        console.log(error);
        res.redirect("/404.html");
      } else {
        console.log(
          `Email sent to ${options.to} and ${options.cc}..... ${i} times`
        );
        res.redirect("/sent.html");
      }
    });
  }
});
