import express from 'express';
import {dirname,join} from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';



const app = express();
const Port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine','ejs')
app.set('views', join(__dirname, 'views'));



app.get('/',(req,res) => {
    res.send('Welcome, Go to https:localhost:3000/get-secrets to know others secrets 🔐🤫');
    //res.render('index');
})

app.get("/get-secrets", async (req, res) => {
    try {
        const response = await fetch("https://secrets-api.appbrewery.com/random");
        const data = await response.json();

        const sec = data.secret;
        const user = data.username;

        res.render('index',{sec,user});
        console.log(sec);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching data from API");
    }
});

app.listen(Port,() => {
    console.log(`Server is running in Port: ${Port}`);
})

