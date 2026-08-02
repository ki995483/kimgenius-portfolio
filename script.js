/* ======================================================
   KIMGENIUS ENGINE v1.0
   Premium JavaScript
====================================================== */

const body = document.body;
const navbar = document.querySelector(".navbar");
const themeToggle = document.getElementById("themeToggle");

/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        navbar.style.background = "rgba(8,17,31,.82)";
        navbar.style.backdropFilter = "blur(28px)";
        navbar.style.boxShadow = "0 20px 50px rgba(0,0,0,.35)";

    }else{

        navbar.style.background = "rgba(255,255,255,.08)";
        navbar.style.boxShadow = "0 18px 45px rgba(0,0,0,.28)";

    }

});

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 180;

        if(window.scrollY >= top){
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/* ==========================================
   THEME SWITCH
========================================== */

themeToggle.addEventListener("click", () => {

    body.classList.toggle("light-mode");

    if(body.classList.contains("light-mode")){

        themeToggle.textContent = "☀️";

    }else{

        themeToggle.textContent = "🌙";

    }

});

/* ==========================================
   REVEAL ON SCROLL
========================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

/* ==========================================
   SMOOTH BUTTON SCALE
========================================== */

document.querySelectorAll(".btn,.skill-btn,.card").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.transition=".35s";

    });

});

/* ==========================================
   PAGE LOADER
========================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});