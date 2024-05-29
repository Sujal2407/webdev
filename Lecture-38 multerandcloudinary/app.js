const express=require('express');
const path=require('path');
const app=express();
const PORT=4444;
require('.env').config
const clouinary=require('clouinary');
const multer=require('multer');

// const upload=multer({dest:'uploads/'})
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname))
    }
})
const upload=multer({storage});

app.set('view engine','hbs');
// app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
}
);