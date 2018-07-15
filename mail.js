const http = require('http');
var formidable = require('formidable');
const fs = require('fs');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
console.log(smtpTransport);
//console.log(nodemailer.createTransport());
//console.log(formidable);
const hostname = 'localhost';
const port = 8080;
var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    user: 'sundeepbomireddy@gmail.com',
    pass: 'SandeepBala@123'
  }
}));
var mailOptions = {
  from: 'sundeepbomireddy@gmail.com',
  to: 'sandeepbomireddy@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});