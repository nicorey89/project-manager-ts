import 'dotenv/config'
import express, {Express, NextFunction, Request, Response} from 'express';
import connectDB from './config/db';
import router from './routes';
import createHttpError from 'http-errors';
import cors from 'cors'; 

const app: Express = express();

/* const whiteList = [process.env.URL_FRONTEND];
const corsOptions = { 
  origin : function(origin : any, callback : any){ 
    if(whiteList.includes(origin)){ 
      callback(null, true) 
    }else { 
      callback(new Error("Error de Cors")) 
    } 
  } 
}  */
/* app.use(cors(corsOptions)) */
app.use(cors());

interface ResponseError extends Error {
    status: number;
  }

connectDB();

app.use(express.json());

app.use('/api',router);

app.use(function(req: Request, res: Response, next : NextFunction){
    const err = createHttpError(404, 'Not Found');
    next(err);
  });

app.use(function(err : ResponseError, req : Request, res : Response, next : NextFunction) {
  
    return res.status(err.status || 500).json({
      ok : false,
      msg : err.message
      });
  });

app.listen(process.env.PORT, ()=> {
console.log(`Server running in https://localhost:${process.env.PORT}`);
});