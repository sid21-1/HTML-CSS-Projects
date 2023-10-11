gsap.from("#img1",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:60
})

gsap.from("#img2",{
    delay:0.4,
    opacity:0,
    duration:1,
    x:60
})

gsap.from("#img3",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:-60
})

gsap.from("#main h1",{
    delay:0.4,
    opacity:0,
    duration:1
})

gsap.from("#part3 h5, #part3 h1 , #part3 #About-us",{
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#part3 h5",
        scroller:"body",
        start:"top 60%",
    }
})