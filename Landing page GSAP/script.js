let t1 = gsap.timeline();

t1
    .from(".banner-text",{
        opacity: 0,
        y: 20,
    })

    .from("nav", {
        opacity: 0,
        y: 20,
    })

    .from(".header-left",{
        opacity:0,
        scale:1.3,
        duration:1
    })

    .from(".header-right",{
        opacity:0,
        scale:1.3,
        duration:1
    })

gsap.from(".features-section",{
    scrollTrigger:{
        trigger:".features-section",
        scroller:"body",
        markers:true,
        start:"top 80%",
        bottom:" bottom 10%",
        scrub:true,
    },
    opacity:0,
    scale:1.3,
    duration:1,
    delay:1
})
