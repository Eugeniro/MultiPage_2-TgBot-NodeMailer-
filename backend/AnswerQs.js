import Mailer from "nodemailer"
import TelegMsgCall from "./TelegMsgCall.js"
function validation(data)
{
  if(data.QS_Political===undefined)
  {
      return "2";
  }
  if(data.QS_SRO===undefined ||data.QS_Sum===undefined || data.QS_Danger===undefined  )
  {
      return "1";
  }
  for(let key in data)
  {
      if(data.hasOwnProperty(key)){
          if (data[key]==="")
          {

              return "1"
          }
        }
  }
  return "0"
}
const AccSender = Mailer.createTransport({
    host: "smtp.mail.ru",//mail.ru
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "", ///username
      pass: "", ///passmail
    },
  });
function Sender(data)
{
  return new Promise((res,rej)=>{AccSender.sendMail({
        from: '<www@mail.ru>', 
        to: "www@yandex.ru", 
        subject: "Ответы на вопросы", 
        html: `<p style="font-size:20px;font-weight:700">Имя :<span style="font-size:16px">${data.QS_Name}</span></p>
        <p style="font-size:20px;font-weight:700">Телефон : <span style="font-size:16px">${data.QS_Phone}</span></p>
        <p style="font-size:20px;font-weight:700">Город,Регион : <span style="font-size:16px">${data.QS_City}</span></p>
        <p style="font-size:20px;font-weight:700">Какое СРО : <span style="font-size:16px">${data.QS_SRO}</span></p>
        <p style="font-size:20px;font-weight:700">Сумма : <span style="font-size:16px"> ${data.QS_Sum}</span></p>
        <p style="font-size:20px;font-weight:700">Работа на особо опасных объектах : <span style="font-size:16px">${data.QS_Danger}</span></p>
        `, 
      },(err)=>{
        err?rej("Неверные данные или ошибка в функций"):res();

      })})

}
export default  function AnswerQs(req,res)
{
  let codeFail=validation(req.body)
  if (codeFail!=="0") 
  {res.status(400).send(codeFail)
    return;
  }
    const tgmessage=`<b>Имя : </b> ${req.body.QS_Name}\n<b>Телефон : </b> ${req.body.QS_Phone}\n<b>Город,Регион : </b> ${req.body.QS_City}\n<b>Какое СРО  : </b> ${req.body.QS_SRO}\n<b>Сумма  : </b> ${req.body.QS_Sum}\n<b>Работа на особо опасных объектах  : </b> ${req.body.QS_Danger}`
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