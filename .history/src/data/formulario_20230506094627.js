//envia el codigo de autenticacion al mail
export async function sendCode(props){
  console.log(props);
  const mail = {
    message: `Tu codigo de ingreso es:`,
    from: process.env.SENDGRID_EMAIL,
    to: data.email,
    subject: "Your Code",
  };
  

  
}
  
