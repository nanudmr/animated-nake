import"https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js";import{g as n}from"./Navbar.astro_astro_type_script_index_0_lang.DsrzR_iR.js";const e=n.timeline({repeat:-1,yoyo:!0,defaults:{duration:2,ease:"none"}});e.to(".box1",{height:"10vh"},0);e.to(".box2",{height:"80vh"},0);e.to(".box3",{height:"30vh"},0);e.to(".box4",{height:"50vh"},0);e.to(".box5",{height:"20vh"},0);e.to(".box6",{height:"30vh"},0);e.to(".box7",{height:"60vh"},0);e.to(".box1",{height:"40vh"},2);e.to(".box2",{height:"20vh"},2);e.to(".box3",{height:"70vh"},2);e.to(".box4",{height:"20vh"},2);e.to(".box5",{height:"60vh"},2);e.to(".box6",{height:"70vh"},2);e.to(".box7",{height:"30vh"},2);e.to(".box1",{height:"50vh"},4);e.to(".box2",{height:"60vh"},4);e.to(".box3",{height:"20vh"},4);e.to(".box4",{height:"70vh"},4);e.to(".box5",{height:"30vh"},4);e.to(".box6",{height:"50vh"},4);e.to(".box7",{height:"90vh"},4);e.to(".box1",{height:"40vh"},6);e.to(".box2",{height:"40vh"},6);e.to(".box3",{height:"40vh"},6);e.to(".box4",{height:"40vh"},6);e.to(".box5",{height:"40vh"},6);e.to(".box6",{height:"40vh"},6);e.to(".box7",{height:"40vh"},6);var h=new Splide(".splide",{type:"loop",arrows:!1,pagination:!1,autoplay:!1,lazyload:!0,rewind:!0,interval:4e3,speed:2e3,padding:"5rem",gap:"2.4rem",focus:"center"});const a=h.root.querySelector(".my-slider-progress-bar");h.on("mounted move",function(){var o=h.Components.Controller.getEnd()+1,t=Math.min((h.index+1)/o,1);a.style.width=String(100*t)+"%"});h.mount();var r=new Splide(".splide.light-slider",{type:"loop",arrows:!1,pagination:!1,autoplay:!0,lazyload:!0,rewind:!0,interval:4e3,speed:2e3,padding:"5rem",gap:"2.4rem",focus:"center"});const l=r.root.querySelector(".my-slider-progress-bar.light-progress-bar");r.on("mounted move",function(){var o=r.Components.Controller.getEnd()+1,t=Math.min((r.index+1)/o,1);l.style.width=String(100*t)+"%"});r.mount();var i=new Splide(".splide.portfolio-slider",{type:"loop",arrows:!1,pagination:!1,autoplay:!0,lazyload:!0,rewind:!0,interval:4e3,speed:2e3,padding:"5rem",gap:"2.4rem",focus:"center"});const g=i.root.querySelector(".my-slider-progress-bar.portfolio-progress-bar");i.on("mounted move",function(){var o=i.Components.Controller.getEnd()+1,t=Math.min((i.index+1)/o,1);g.style.width=String(100*t)+"%"});i.mount();
