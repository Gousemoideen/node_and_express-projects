import express from 'express'
import { dirname,join } from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'

const app = express();

const Port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('view engine','ejs')
app.set('views', join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended: true}));


app.get('/',(req,res) => {
    res.render('form');
})

app.post('/check',(req,res) => {
    const pass = req.body;
    console.log(pass);

    if(pass.password == 'abc') {
        res.send('Passoword verified');
    }
    else {
        res.render('form');
    }
    
})

app.listen(Port,() => {
    console.log(`Server is running in Port: ${Port}`);
})