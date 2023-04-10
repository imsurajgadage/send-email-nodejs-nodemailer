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
      html: `<h3>First Name :</h3> <p style="font-size:20px"> ${data.firstName}</p>
      <h3>Last Name :</h3> <p style="font-size:20px">${data.lastName}</p>
      <h3>Email :</h3> <p style="font-size:20px"> ${data.email}</p>
      <h3>Phone Number :</h3> <p style="font-size:20px">  ${data.phoneNumber}</p>
      <h3>Date : </h3> <p style="font-size:20px"> ${data.date}</p>
      <h3>Time :</h3> <p style="font-size:20px"> ${data.time}</p>
      <h3>Location :</h3> <p style="font-size:20px"> ${data.location}</p>`,
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


