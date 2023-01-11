document.addEventListener("DOMContentLoaded", () => { 
    document.getElementById("open-sal-body").style.display = "block";
    document.getElementById("about-me-body").style.display = "none";
    document.getElementById("contact-me-body").style.display = "none";
})

function selectSection(section){
    sections = document.getElementsByClassName("content");
    for(i = 0; i < sections.length; ++i){
        document.getElementById(sections[i].id).style.display = "none";
    }

    if(section === "about-me"){
        document.getElementById("about-me-body").style.display = "block"
        document.getElementById("about-nav").style.textDecoration = "underline"
        document.getElementById("contact-nav").style.textDecoration = "none"
    }

    if(section === "contact-me"){
        document.getElementById("contact-me-body").style.display = "block"
        document.getElementById("about-nav").style.textDecoration = "none"
        document.getElementById("contact-nav").style.textDecoration = "underline"
    }
}

/* document.addEventListener("scroll", ()=>{
    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const greetingTop = document.getElementById("open-sal-body").offsetTop;
    const aboutTop = document.getElementById("about-me-body").offsetTop;
    const contactTop = document.getElementById("contact-me-body").offsetTop;

    if(top > contactTop-(greetingTop*3)){
        document.getElementById("about-nav").style.textDecoration = "none"
        document.getElementById("contact-nav").style.textDecoration = "underline"
        document.getElementById("contact-arrow").style.display = "none"
    }
    else if(top > aboutTop-(greetingTop*2.5)){
        document.getElementById("about-nav").style.textDecoration = "underline"
        document.getElementById("contact-nav").style.textDecoration = "none"
        document.getElementById("about-arrow").style.display = "none"
        document.getElementById("contact-arrow").style.display = "block"
    }
    else if(top < aboutTop-(greetingTop*2)){
        console.log("HERE 2")
        document.getElementById("about-nav").style.textDecoration = "none"
        document.getElementById("contact-nav").style.textDecoration = "none"
        document.getElementById("about-arrow").style.display = "block"
    }
});
 */