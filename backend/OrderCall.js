import Mailer from "nodemailer"
import TelegMsgCall from "./TelegMsgCall.js"
let FailSender=false;
function validation(data)
{
  if (data._Name==="")
  {
    return "1";
  }
  if (data._Phone==="")
  {
    return "2";
  }
  if (data._Political===undefined)
  {
    return "3"
  }
  return "0"
}
const AccSender = Mailer.createTransport({
    host: "smtp.mail.ru",//mail.ru
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "",///username 
      pass: "", ///passmail
    },
  });
function Sender(data)
{
     return new Promise((res,rej)=>{
      AccSender.sendMail({
        from: '<www@mail.ru>', 
        to: "www@yandex.ru", 
        subject: "Заказ Звонка", 
        html: `<p>Имя : ${data._Name}</p>
        <p>телефон : ${data._Phone}</p>
        `, 
      },(err)=>{
       err?rej("Неверные данные или ошибка в функций"):res();
      })
     }) 
}
export default function OrderCall(req,res)
{
  let codeFail=validation(req.body)
  if (codeFail!=="0") 
  {res.status(400).send(codeFail)
    return;
  }
  const tgmessage=`<b>Имя : </b> ${req.body._Name}\n<b>Телефон : </b> ${req.body._Phone}`;
  TelegMsgCall(tgmessage)
  .catch((err)=>{
    FailSender=true;
    console.log(err)
  })
  .finally(()=>{
    Sender(req.body)
  .then(()=>{
    res.sendStatus(200);
    return
  })
  .catch((e)=>{
    console.log(e)
    if (FailSender)
    {res.status(500).send("Произошла ошибка,пожалуста попробуйте позже или свяжитесь на прямую");
    return}else res.sendStatus(200);
  })
  })
}