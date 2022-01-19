const express=require("express")

const app =express()

const d=new Date();
const breaktime=(d.getHours()>17)||(d.getHours()<9)||(d.getDay()==6)||(d.getDay()==0);

const middleware=(req,res,next)=>{
    breaktime?res.send("SORRY WE'RE CLOSED"):
next();

}
app.use(middleware);





app.get("/",(req,res)=>{
   
    res.sendFile(__dirname+"/Home.html")
    
    
    });

app.get("/Ourservices",(req,res)=>{

    res.sendFile(__dirname+"/Ourservices.html")
})


app.get("/Contactus",(req,res)=>{

    res.sendFile(__dirname+"/Contactus.html")
})



const port=2020

app.listen(port,()=>console.log(`done${port}`))