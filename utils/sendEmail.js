import nodemailer from "nodemailer";

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS,
      },
    });

    transporter.verify((error, success)=>{
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take messages",success);
      }
    })
    
    return transporter;
