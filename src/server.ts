import express from 'express';
//import { ofertasRouter } from './routes/group.route';

const port = (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test' ? 3055 : 3056);
const app = express();

console.log(`START  NODE-TELEGRAM - AMBIENTE ${process.env.NODE_ENV}   PORTA ${port}`)

app.use(express.json());
//app.use( "/postYoutube", ofertasRouter);
app.get('/', (require, response) => {
    return response.json({status: "OK"});
})

//iniTelegram();

app.listen(port);