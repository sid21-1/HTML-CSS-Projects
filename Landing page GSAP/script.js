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
