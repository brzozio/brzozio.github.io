/* Animacja czarnego ekranu poczatkowego */
const tl = gsap.timeline({defaults: {ease: "power2.out"}});

tl.to(".text", {y: "0%", duration: 1, stagger: 0.25});
tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5});
tl.to(".intro", {y: "-100%", duratrion: 1}, "-=1.4");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });



/* ---------------------- Zmiana koloru nagłówka ------------------------------------------------ */
const section_1 = document.querySelector(".section_1");
const section_2 = document.querySelector(".setion_2");
const section_3 = document.querySelector(".section_3");
const sections = document.querySelectorAll("section");
const sectionContainer = document.querySelector(".section-container");

const idSection1 = document.querySelector("#section1");
const idSection2 = document.querySelector("#section_2");
const idSection3 = document.querySelector("#section_3");

const buttonSection1 = document.querySelector("#button-section-1");
const buttonSection2 = document.querySelector("#button-section-2");
const buttonSection3 = document.querySelector("#button-section-3");

const headerClassNames = [
  "section_1",
  "section_2",
  "section_3"
]

const gradients = [
  "hsl(323 21% 16%)",
  "rgb(255, 0, 179,0.8)",
  "rgb(155, 4, 155,0.8)"
]
const whiteColor = "white";


const options = {
  threshold : 0.7
}
let observer = new IntersectionObserver(navCheck, options); // observer dla sekcji na stronie

function navCheck(entries){
  entries.forEach(entry => {
    const className = entry.target.className;
    //console.log(`Klasa: ${className}`);
    //console.log(className);
    // Sprawdzanie className oraz section.className
    if(entry.isIntersecting){
      if(className == headerClassNames[0]){
        buttonSection1.style.setProperty("background-color", gradients[0]);
          buttonSection1.style.setProperty("color", whiteColor);
        buttonSection2.style.setProperty("background-color", whiteColor);
          buttonSection2.style.setProperty("color", "black");
        buttonSection3.style.setProperty("background-color", whiteColor);
          buttonSection3.style.setProperty("color", "black");
      }
      if(className == headerClassNames[1]){
        buttonSection2.style.setProperty("background-color", gradients[1]);
          buttonSection2.style.setProperty("color", whiteColor);
        buttonSection1.style.setProperty("background-color", whiteColor);
          buttonSection1.style.setProperty("color", "black");
        buttonSection3.style.setProperty("background-color", whiteColor);
          buttonSection3.style.setProperty("color", "black");
      }
      if(className == headerClassNames[2]){
        buttonSection3.style.setProperty("background-color", gradients[2]);
          buttonSection3.style.setProperty("color", whiteColor);  
        buttonSection2.style.setProperty("background-color", whiteColor);
          buttonSection2.style.setProperty("color", "black");
        buttonSection1.style.setProperty("background-color", whiteColor);
          buttonSection1.style.setProperty("color", "black");
      }
    }
      
      
  });
}
sections.forEach(section => {
  observer.observe(section);
})


buttonSection1.addEventListener("click", (e) => {
  
});

