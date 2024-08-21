/* /* const SMTPServer = require("smtp-server").SMTPServer;

const server = new SMTPServer({
    allowInsecureAuth:true,
    authOptional:true,
    onConnect(session, cb) {
        console.log("onconnect", session.id);
        cb();
    },
    onMailFrom(address, session, cb) {
        console.log("onMailFrom", address.address, session.id);
        cb();
    },
    onRcptTo(address, session, cb) {
        console.log("onRcptTo", address.address, session.id);
        cb();
    },
    onData(stream, session, cb) {
        stream.on("data", (data) => console.log("ondata", data.toString(), session.id));
        stream.on("end", cb);
    },
});

server.listen(25, () => {
    console.log("server started at port 25");
});
 */
/* const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());



app.use(bodyParser.urlencoded({ extended: false }));


const route = express.Router();


const port = process.env.PORT || 5000;


app.use('/v1', route); */





/* const SMTPServer = require("smtp-server").SMTPServer;

const server = new SMTPServer({


   allowInsecureAuth:true,
   authOptional:true,


    onConnect(session,cb){
        console.log("onConect",session.id);
        cb() // conection accepted
    },
    onMailFrom(address,session,cb){
        console.log("onmailfrom",address.address,session.id);
        cb();
    },

    onRcptTo(address,session,cb){
        console.log("onrecieved",address.address,session.id);
        cb();
    },

   onData(stream,session,cb){
    stream.on("data",(data)=> console.log("onData",data.toString()));
   stream.on("end",cb());
   },

   

});

server.listen(25,()=> console.log("server started"));  */


/* onst nodemailer = require("nodemailer");

il',
    auth:{
        user:'ayumane04@gmail.com',
        pass:var transporter = nodemailer.createTransport({
    service:'gma'ayushmane@1234',


    }


});

var mailoptions = {
    from:'ayumane04@gmail.com',
    to:'ayumane63@gmail.com',
    subject:"sending mail using node js",
    text:"hey ayush this sied"
};

transporter.sendMail(mailoptions,

    function(error,info){
        if(error){
            console.log(error);

        }else{
            console.log("email sent"+info.response);
        }
    }
)



 */



const express = require("express");
const sendMail = require("./controllers/sendMail");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>I'm a server</h1>");
});

app.get("/sendmail", sendMail);

app.listen(3000, () => console.log("Server started on port 3000"));

