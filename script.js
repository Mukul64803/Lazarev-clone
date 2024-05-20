function navanimation(){
    var nav = document.querySelector("#nav");

nav.addEventListener("mouseenter",function(){
    let tl = gsap.timeline()

     tl.to("#nav-bottom",{
        height:"25vh"
    })

    tl.to(".nav-elem h5",{
        display:"block"
    })

    tl.to(".nav-elem h5 span",{
        y:0,
        // duration:0.4,
        stagger:{
            amount:0.2
        }
    })
})
nav.addEventListener("mouseleave",function(){
    let tl = gsap.timeline()
     tl.to(".nav-elem h5 span",{
        y:25,
        stagger:{
            amount:0.2
        }
    })
    tl.to(".nav-elem h5",{
        display:"none",
        duration:0.1
    })

    tl.to("#nav-bottom",{
        height:0,
        duration:0.1
    })
})
}
function page2(){
    var rightelem = document.querySelectorAll(".right-elems")

rightelem.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        // console.log(elem.childNodes[4])
        gsap.to(elem.childNodes[1],{
            opacity:1,
            scale:1,
            duration:0.5,
            
        })
        gsap.to(this, { borderTop: "2px solid white"});
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[1],{
            opacity:0,
            scale:0,
            duration:0.5
        })
        gsap.to(this, { borderTop: "2px solid #272727" });
    })
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[1],{
            x:dets.x - elem.getBoundingClientRect().x - 50,
            y:dets.y - elem.getBoundingClientRect().y - 90
        })
    })
})
}
function page3(){
    var page3_center = document.querySelector("#page3-center");
var video = document.querySelector("#Page3Video")

page3_center.addEventListener('click',function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0,
        // duration:0.5
    })
})
video.addEventListener('click',function(){
    video.pause()
    gsap.to(video,{
        transform:"scaleX(0) scaleY(0)",
        opacity:0,
        borderRadius:0,
        // duration:0.5
    })
})
}

// navanimation();
// page2();
// page3();

var page6vid = document.querySelector("#page6vid");
var right6 = document.querySelector("#right6")

right6.addEventListener("mouseenter",function(){
    page6vid.play()
})
page6vid.addEventListener("mouseleave",function(){
    page6vid.load()
    gsap.to(video,{
        transform:"scaleX(0) scaleY(0)"
    })
})