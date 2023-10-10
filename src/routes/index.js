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


//  Name: Milton Gaire
// Student Id: 301291776
// 

//  Functionality of the site Explained in detail........



// This is the site I have made using express. I have used bootstrap as a css framwork. I have my custom designed in my site.
// I have coded my own css in style.css. 

// In navbar , I have a logo which I extracted from online using logo generator. ANd title of the site as my own name( Milton Gaire) .

// In nav , I have 5 pages i.e home, about, my project , service , contact. There is a search input. However, it is not functional as of now.

// In home page, there is a welcome message and a button named "know more". When user clicks the button, the page will redirect to the about
// page of the site.

// In about page, there is a pic of mine and about my information. Moreover, there is a butto to see my projects when clicked gets redirect
// into a my project page of the site. There is also a option to download my resume.

// In project page, there I  have included three projects with images along with their description.One of the them I am currently doing and other two of them is what I will be going to do in the future.

// In contact page, it has got some input  type where user can fill the form in order to send the message to the owner of the site.

// whenver user submits after filling the form, a message will appear which says that the message has been sent successfully and it will automatically redirect to the home page of the site.



// In all the page of the site, there is a footer. I have got terms and conditions , privacy policy and a contact form anchor links.
// The terms and conditions and privacy policies is blank at the moment however, the contact form link is working as it will automatically redirect to the contact page of the site.




