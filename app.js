/* Animacja czarnego ekranu poczatkowego */
    const tl = gsap.timeline({defaults: {ease: "power2.out"}});

    tl.to(".text", {y: "0%", duration: 1, stagger: 0.25});
    tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5});
    tl.to(".intro", {y: "-100%", duratrion: 1}, "-=1.4");
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });

/* Animacja card */
    
    const container = document.querySelector(".container");
    const card = document.querySelector(".container");

    // Poszczegolne elementy HTML, C, Java
    const HTML = document.querySelector("#HTML");
        const h2HTML = document.querySelector("#h2HTML");
        const h3HTML = document.querySelector("#h3HTML");
        const h4HTML = document.querySelector("#h4HTML");
        const imgHTML = document.querySelector("#imgHTML");
    const JAVA = document.querySelector("#JAVA");
        const h2Java = document.querySelector("#h2Java");
        const h3Java = document.querySelector("#h3Java");
        const imgJava = document.querySelector("#imgJava");
    const C = document.querySelector("#C");
        const h2C = document.querySelector("#h2C");
        const h3C = document.querySelector("#h3C");
        const imgC = document.querySelector("#imgC");

    // Animacja obracania calym kontenerem
   /* container.addEventListener("mousemove", (e) =>{
        let xAxis = (window.innerWidth / 2 -e.pageX) / 15;
        let yAxis = (window.innerHeight / 2 -e.pageY) / 15;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        console.log(xAxis);
    }) */ 


    // Animacja wejsciowa
    HTML.addEventListener("mouseenter", (e) =>{
        //Wysuwanie się elementów
        h2HTML.style.transform = "translateZ(180px)";
        h3HTML.style.transform = "translateZ(150px)";
        h3HTML.style.transform = "translateZ(120px)";
        h4HTML.style.transform = "translateZ(100px)";
        imgHTML.style.transform = "translateZ(200px)";
    });
   
    // Animacja wyjsciowa
    HTML.addEventListener("mouseleave", (e) => {
         //Powrót elementow
         h2HTML.style.transform = "translateZ(0px)";
         h3HTML.style.transform = "translateZ(0px)";
         h4HTML.style.transform = "translateZ(0px)";
         imgHTML.style.transform = "translateZ(0px)";
    }); 
   
    // Animacja wejsciowa
    C.addEventListener("mouseenter", (e) =>{
        //Wysuwanie się elementów
        h2C.style.transform = "translateZ(180px)";
        h3C.style.transform = "translateZ(150px)";
        imgC.style.transform = "translateZ(200px)";
    });
   
    // Animacja wyjsciowa
    C.addEventListener("mouseleave", (e) => {
         //Powrót elementow
         h2C.style.transform = "translateZ(0px)";
         h3C.style.transform = "translateZ(0px)";
         imgC.style.transform = "translateZ(0px)";
    }); 

    // Animacja wejsciowa
    JAVA.addEventListener("mouseenter", (e) =>{
        //Wysuwanie się elementów
        h2Java.style.transform = "translateZ(180px)";
        h3Java.style.transform = "translateZ(150px)";
        imgJava.style.transform = "translateZ(200px)";
    });
   
    // Animacja wyjsciowa
    JAVA.addEventListener("mouseleave", (e) => {
         //Powrót elementow
         h2Java.style.transform = "translateZ(0px)";
         h3Java.style.transform = "translateZ(0px)";
         imgJava.style.transform = "translateZ(0px)";
    }); 