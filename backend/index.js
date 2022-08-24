import Express  from "express";
import path from "path"
import OrderCall  from "./OrderCall.js";
import AnswerQs  from "./AnswerQs.js";
const __dirname=path.resolve();
const app=Express();
const parse=Express.json()
const PORT=process.env.PORT || 3000;
app.use(Express.static(path.resolve(__dirname,"..")));
app.post("/OrderCall",parse,OrderCall)
app.post("/AnswerQs",parse,AnswerQs)

app.listen(PORT);