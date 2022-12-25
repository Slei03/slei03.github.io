document.addEventListener("scroll", ()=>{
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
