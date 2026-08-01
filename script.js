const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    toggle.textContent =
        document.body.classList.contains("light-mode")
            ? "☀️"
            : "🌙";
});

// ==========================================================
// KIMGENIUS ENGINE v1.0
// SCRIPT — NAVIGATION • THEME • INTERACTIONS
// ==========================================================



// ==========================
// MOBILE MENU
// ==========================

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".navbar ul");


if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}



// ==========================
// CLOSE MENU AFTER CLICK
// ==========================

document.querySelectorAll(".navbar a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});



// ==========================
// LIGHT / DARK THEME
// ==========================

const themeButton = document.querySelector(".theme-toggle");


if(themeButton){

    themeButton.addEventListener("click",()=>{


        document.body.classList.toggle("light-mode");


        if(document.body.classList.contains("light-mode")){

            themeButton.textContent="☀";

        }

        else{

            themeButton.textContent="☾";

        }


    });

}




// ==========================
// SCROLL REVEAL ENGINE
// ==========================


const revealElements = document.querySelectorAll(
".card, .project-card, .skill, .contact-box"
);



const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("fade-up");


}


});


},

{

threshold:.15

}

);



revealElements.forEach(element=>{

observer.observe(element);

});




// ==========================
// CURRENT YEAR AUTO UPDATE
// ==========================

const year = document.querySelector("footer p");


if(year){

year.innerHTML =

`© ${new Date().getFullYear()} KIMGENIUS. Digital Intelligence.`;

}