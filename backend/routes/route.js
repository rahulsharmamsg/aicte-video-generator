import  express  from "express";
import  {ChatGbt}  from "../controller/mainController.js";
const route = express.Router();
route.get('/', function(req,res){
res.send("hello")
});
route.post('/chatgbt', ChatGbt);

export default route;