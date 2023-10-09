const express=require("express");
const app=express();



app.get("/",(req,res)=>{
    res.render("partials/home");
});

app.get("/homeejs",(req,res)=>{
    res.render("partials/home");
})

app.get("/aboutejs",(req,res)=>{
    res.render("partials/about");
});

app.get("/serviceejs",(req,res)=>{
    res.render("partials/service");
});

app.get("/projectejs",(req,res)=>{
    res.render("partials/project");
});

app.get("/contactejs",(req,res)=>{
    res.render("partials/contact");
});

module.exports=app;




