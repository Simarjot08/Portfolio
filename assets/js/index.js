var menu=document.querySelector("#nav-2 i");
var cross=document.querySelector("#menu-1 i");
var tl=gsap.timeline();

tl.pause();

tl.set("#menu-1", { opacity: 1, pointerEvents: "auto" }, "<");
tl.to("#menu-1", {
    top:5,
    duration: 0.4,
})

tl.from("#menu-1 i",{
    opacity:0,
} )
menu.addEventListener("click",()=>{
    tl.play();
})
cross.addEventListener("click",()=>{
    tl.reverse();
})



gsap.from("#nav",{
    y:-10,
    opacity:0,
    duration:0.5
})

gsap.from("#nav-item a",{
     y:-10,
    opacity:0,
    duration:0.5,
    stagger:0.3
})

gsap.from("#back-1",{
    x:70,
    opacity:0,
    duration:3,
      scrollTrigger:{
        trigger:"#card-1",
        scroller:"body",
        // markers:true,
        toggleActions: "restart none restart none"
      }
        
   
})




gsap.from("#back-2",{
    x:-150,
    opacity:0,
      duration:2,
        scrollTrigger:{
        trigger:"#card-1",
        scroller:"body",
        // markers:true,
        toggleActions: "restart none restart none"
        }
        

})




gsap.from("#cd-2",{
    y:-90,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#sec-2",
        scroller:"body",
        // markers:true,
        toggleActions: "restart none restart none"
        
    }
})

gsap.from("#head",{
    x:30,
    opacity:0,
    duration:1,
    stagger:0.3,
      scrollTrigger:{
        trigger:"#sec-3",
        scroller:"body",
        // markers:true,
        toggleActions: "restart none restart none"
    
    }
})

gsap.from("#img",{
    scale:1.5,
    opacity:0,
    duration:1,
    stagger:0.3,
      scrollTrigger:{
        trigger:"#sec-3",
        scroller:"body",
        // markers:true,
        toggleActions: "restart none none none"
    
    }
})

gsap.from("#project-head",{
    y:-70,
    opacity:0,
    duration:1,
      scrollTrigger:{
        trigger:"#sec-4",
        scroller:"body",
        // markers:true,
        toggleActions: "restart none restart none"
    
    }
})

gsap.from("#projects",{
    scale:1.2,
    y:50,
    opacity:0,
    duration:0.3,
    stagger:0.3,
      scrollTrigger:{
        trigger:"#project-head",
        scroller:"body",
       
        // markers:true,
        scrub:1,
    }
})
gsap.from("#projects2",{
    scale:1.2,
    y:50,
    opacity:0.5,
    duration:0.3,
    stagger:0.3,
    // delay:1.5,
      scrollTrigger:{
        trigger:"#project-head",
        scroller:"body",
        // markers:true,
        scrub:3,
         start:"top -2%",
      
    
    }
})

gsap.from("#sec-5 ",{
    x:-20,
    opacity:0,
    duration:1,
      scrollTrigger:{
        trigger:"#sec-5",
        scroller:"body",
    
    
    }
})

gsap.from("#head-5 ",{
    y:20,
    opacity:0,
    duration:1,
      scrollTrigger:{
        trigger:"#sec-5",
        scroller:"body",
        toggleActions: "restart none restart none"
    
    }
})
gsap.from("#footer i",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.3,
      scrollTrigger:{
        trigger:"#sec-5",
        scroller:"body",
        toggleActions: "restart none restart none"
    
    }
})






  gsap.utils.toArray(".skill-bar").forEach((bar) => {
    const width = bar.getAttribute("data-skill");

    gsap.fromTo(bar,
      { width: "0%" },
      {
        width: width + "%",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bar,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  gsap.from("#box",{
    x:-80,
    duration:1,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#skills",
        scroller:"body",
        toggleActions: "restart none restart none"
        
    }
  })
  gsap.utils.toArray(".edu-node").forEach((node, i) => {
    gsap.from(node, {
      x: -30,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: node,
        start: "top 85%",
      }
    });
  });
gsap.from("#ed-head",{
    y:-70,
    opacity:0,
    duration:1,
      scrollTrigger:{
        trigger:"#ed",
        scroller:"body",
        // markers:true,
    
    }
})

gsap.from("#skill-head",{
    y:-70,
    opacity:0,
    duration:1,
      scrollTrigger:{
        trigger:"#skill",
        scroller:"body",
        // markers:true,
        toggleActions: "restart none restart none",
    
    }
})




  gsap.from(".cert-card", {
    scrollTrigger: {
      trigger: "#certifications",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from("#cert-head",{
    y:-70,
    opacity:0,
    duration:1,
      scrollTrigger:{
        trigger:"#certifications",
        scroller:"body",
        // markers:true,
        toggleActions: "restart none restart none",
    
    }
})

gsap.from("#box-cert",{
    x:-10,
    opacity:0.7,
    duration:7,
    stagger:0.3,
      scrollTrigger:{
        trigger:"#certifications",
        scroller:"body",
        scrub:3,
        // markers:true,
        toggleActions: "restart none restart none",
    
    }
})


    function sendEmail(e) {
      e.preventDefault();
      
      emailjs.sendForm('service_tda2ofq', 'template_q0xs8wd', '#contact-form')
        .then(() => {
          alert('Message sent successfully!');
          document.getElementById('contact-form').reset();
        }, (error) => {
          alert('Failed to send message. Error: ' + error);
        });
    }

    function themeToggle() {
      const body = document.getElementById('main-body');
      const moon = document.getElementById('moon');
      const sun = document.getElementById('sun');

      if (body.classList.contains('bg-white')) {
        // Switch to dark mode
        body.classList.remove('bg-white', 'text-black');
        body.classList.add('bg-blue-950', 'text-white');
        moon.classList.add('hidden');
        sun.classList.remove('hidden');
      } else {
        // Switch to light mode
        body.classList.remove('bg-blue-950', 'text-white');
        body.classList.add('bg-white', 'text-black');
        sun.classList.add('hidden');
        moon.classList.remove('hidden');
      }
    }

    

