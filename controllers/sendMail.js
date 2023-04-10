const nodemailer = require("nodemailer");

const sendAcademicsInfo = async (req, res) => {
  const data = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const userMailOptions = {
      from: {
        name: "Cloud Dental Academy Dentistry Simplified",
        address: process.env.EMAIL,

      },
      name: `${data.firstName}`,
      to: `${data.email}`,
      subject: "Hey, Upgrade your Skills With Cloud Dental Academy Dentistry Simplified",
      html: `<p><b>Dear ${data.firstName},</b><br></p>
      <p>Thank you very much for your time and interest in learnign new Things. We will get back to you soon!.<p>
      <p><b>Best Regards,<br>Cloud Dental Academy Dentistry Simplified</b><p>`,
    };
    const personalMailOptions = {
      from: {
        name: "Cloud Clinic",
        address: `${data.email}`,
      },
      to: process.env.EMAIL,
      subject: "New Academics Enquiry!",
      html: `<h4>First Name : ${data.firstName}</h4>
      <h4>Last Name : ${data.lastName}</h4>
      <h4> Email : ${data.email}</h4>
      <h4>Phone Number :  ${data.phoneNumber}</h4>`,
    };
    transporter.sendMail(userMailOptions, (error, info) => {
      if (error) {
        console.log("error", error);
      } else {
        console.log("email send" + info.response);
        res.status(201).json({ status: 201, info });
      }
    });
    transporter.sendMail(personalMailOptions);
  } catch (error) {
    res.status(201).json({ status: 401, error });
  }
};


const sendAppointmentInfo = async (req, res) => {
  const data = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const userMailOptions = {
      from: {
        name: "Cloud Dental Academy Dentistry Simplified",
        address: process.env.EMAIL,

      },
      name: `${data.firstName}`,
      to: `${data.email}`,
      subject: "Appointment Booked!",
      html: `<p><b>Dear ${data.firstName},</b><br></p>
      <p style="font-size:22px">We just received your appointment request!.<p>
      <p style="font-size:22px">We will get back to you soon!.<p>
      <p><b>Best Regards,<br>Cloud Dental Academy Dentistry Simplified</b><p>`,
    };

    const personalMailOptions = {
      from: {
        name: "Cloud Clinic",
        address: `${data.email}`,
      },
      to: process.env.EMAIL,
      subject: "New Appointment!",
      html: `<h3>First Name : ${data.firstName}</h3>
      <h3>Last Name : ${data.lastName}</h3>
      <h3>Email : ${data.email}</h3>
      <h3>Phone Number :  ${data.phoneNumber}</h3>
      <h3>Date : ${data.date}</h3>
      <h3>Time : ${data.time}</h3>
      <h3>Location : ${data.location}</h3>`,
    };
    transporter.sendMail(userMailOptions, (error, info) => {
      if (error) {
        console.log("error", error);
      } else {
        console.log("email send" + info.response);
        res.status(201).json({ status: 201, info });
      }
    });
    transporter.sendMail(personalMailOptions);
  } catch (error) {
    res.status(201).json({ status: 401, error });
  }
};

module.exports = { sendAppointmentInfo, sendAcademicsInfo };


