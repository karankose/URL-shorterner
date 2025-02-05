import express from 'express';
import { router } from  './route/ulr.route.js';
import { connectMongo } from './db/dbconnect.js'
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended : true}));
app.use(express.json());


app.use('/url', router);

connectMongo("mongodb://127.0.0.1:27017/short-url")
.then(()=> { console.log( "short url " );
})
.catch((err)=>{ console.log( err)})
app.listen(PORT,()=>{
    console.log("server started .............");
    console.log("http://localhost:8000");
})