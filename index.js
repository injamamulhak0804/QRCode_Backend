const express = require("express")
const app = express()
const path = require("path")
const qrcode = require('qrcode')

app.set("view engine","ejs")
app.set('views',path.join(__dirname,"views"))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))


app.get("/", (req, res)=>{
    res.render('index')
    // res.sendFile(path.join(__dirname, "src/index.html"))
})

app.post('/qrcodedata',(req,res)=>{
    console.log(req.body.inputtag);
    let mydata = req.body.inputtag;
    qrcode.toDataURL(mydata,(err,value)=>{
        console.log(value);        
        res.render('qrcode',{"converturl":value})
    })    
})

app.listen("10000", ()=>{
    console.log("App is listen in PORT: 10000");
})
