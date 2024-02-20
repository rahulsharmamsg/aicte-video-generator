import  express  from "express";
import  {ChatGbt,audioChnage}  from "../controller/mainController.js";
const route = express.Router();
route.get('/', function(req,res){
res.send("hello")
});
route.post('/chatgbt', ChatGbt);
route.post('/convertAudioTune', audioChnage);

export default route;