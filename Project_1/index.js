import express from 'express'
import { dirname,join } from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'

const app = express();

const Port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine','ejs')
app.set('views', join(__dirname, 'views'));

app.get('/',(req,res) => {
    //res.send("Working");
    res.render('form')
})

app.post('/submit',(req,res) => {
    const {name,email} = req.body;
    res.render('output',{name,email});
})

app.listen(Port,() => {
    console.log(`Server is running on PORT : ${Port}`);
})