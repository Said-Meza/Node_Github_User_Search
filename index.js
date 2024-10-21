import express  from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from "url"
import controllerForm from './controllers/UserController.js'
import controllererror from './controllers/ErrorController.js'

const app= express()
const port =3000

const __dirname = fileURLToPath(new URL(".", import.meta.url));


//set de path files
app.set('views', path.join(__dirname,"views"))
//set de type of template
app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({extended:false}));

//set listen file on folder public
app.use(express.static(path.join(__dirname,"public")))
app.use(express.static(path.join(__dirname,"js")))
app.use(express.static(path.join(__dirname,"helpers")))

app.get('/',controllerForm.getForm);
app.post('/',controllerForm.getdata);

app.use(controllererror.error404);

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
