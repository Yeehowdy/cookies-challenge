import express from "express";
const app = express();
const port = 3000;
import cookieParser from 'cookie-parser'

app.use(cookieParser())

app.get('/login/:name', (req, res) => {
    if(req.cookies.name){
        res.clearCookie('name', '/')
        res.send(`<p>Welcome back, ${req.cookies.name}! I deleted your cookie</p>`)
        
    }
    else{
        res.cookie('name', req.params.name, { expires: new Date(Date.now() + 900000), httpOnly: true })
        res.send(req.params.name)

    }
    
    
})

app.listen(port, () => console.log('Server running on localhost port 3000'))