const nodeMailer=require("nodemailer");


const sendEmail=async (options)=>{
     const transporter=nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER, // Your email
            pass: process.env.SMTP_PASS, // Your email password
        },
    });

    const mailOptions={
        from:process.env.SMTP_USER,
        to:options.email,
        subject:options.subject,
        html:options.html,
        
    };

   await transporter.sendMail(mailOptions);   
};


module.exports= sendEmail;