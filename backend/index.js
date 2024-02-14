import express  from "express"
import route from "./routes/route.js"
import bodyParser from "body-parser"
import * as dotenv from 'dotenv';
import connectDb from "./helper/dbConnection.js";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT; 
const app = express()

app.use( cors() );
connectDb();



app.use( bodyParser.urlencoded( { extended: true, limit: '50mb' } ) );
app.use( bodyParser.json( { limit: '50mb' } ) );
app.use('/', route); 



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})