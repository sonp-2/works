//rellax//
var rellax=new Rellax(".rellax");
var rellax=new Rellax(".rellax-trainer",{
	speed:1.3,
	center:true,
});
var rellax=new Rellax(".rellax-last",{
	speed:1.2,
	center:true,
});


//main-photo//
const photo = document.querySelector(".main-photo");
const block = document.querySelector(".main-block");
const text = document.querySelector(".main-text");
const logo = document.querySelector(".top-logo");

const tl = gsap.timeline();




//レスポンシブの時の挙動//
if(window.matchMedia('(max-width:767px)').matches){

	tl.fromTo(photo,1,{opacity:0,width:"0%"},{opacity:1,width:"100%",ease:Power2.easeInOut},"+=3.1").
	fromTo(text,0.7,{opacity:0,x:-30},{opacity:1,x:0}).
	fromTo(block,0,{opacity:0},{opacity:0}).
	fromTo(logo,0,{opacity:0},{opcity:0});


	window.addEventListener("scroll",()=>{
		const head=document.querySelector("header");
		let scrollTop=document.scrollingElement.scrollTop;
	
		if(scrollTop > 600){
			head.classList.add("show1");
		}else{
			head.classList.remove("show1");
		}
	});

}else if(window.matchMedia('(min-width:768px)').matches){
	tl.fromTo(photo,1,{height:"0%"},{height:"100%",ease:Power2.easeInOut},"+=3.1").
	fromTo(photo,1.2,{width:"100%"},{width:"85%",ease:Power2.easeInOut}).
	fromTo(block,1.2,{y:"-100%"},{y:"0%",ease:Power2.easeInOut},"-=1.2").
	fromTo(logo,0.5,{opacity:0,x:30},{opacity:1,x:0},"-=0.5").
	fromTo(text,0.5,{opacity:0, x:-30},{opacity:1,x:0},"-=0.5")

	window.addEventListener("scroll",()=>{
		const head=document.querySelector("header");
		let scrollTop=document.scrollingElement.scrollTop;
	
		if(scrollTop > 1000){
			head.classList.add("show1");
		}else{
			head.classList.remove("show1");
		}
	});
	}else if(window.matchMedia('(min-width:1000px)').matches){

	window.addEventListener("scroll",()=>{
		const head=document.querySelector("header");
		let scrollTop=document.scrollingElement.scrollTop;
	
		if(scrollTop > 700){
			head.classList.add("show1");
		}else{
			head.classList.remove("show1");
		}
	});

	const li = document.querySelectorAll(".header-list ul li");
	li.forEach(element =>{
		element.addEventListener("mouseover",()=>{
			document.querySelector(".header-block").classList.add("full");
			document.querySelector(".header-block2").classList.add("full");
		});
		element.addEventListener("mouseleave",()=>{
			document.querySelector(".header-block").classList.remove("full");
			document.querySelector(".header-block2").classList.remove("full");
		});
	});
};





	
//slideの切り替わり//
const st = document.querySelector(".slide-top");
const s1 = document.querySelector("#slide-1");
const s2 = document.querySelector("#slide-2");

st.addEventListener("click",function(){

});




//intersectionobserverAPI//
const merits = document.querySelectorAll(".merit-wrapper");
const h1s = document.querySelectorAll("h1");

const options = {
	threshold:1,
	rootMargin:"0px 0px -70px",
};

function callback(entries){
	console.log(entries);

	entries.forEach(entry=>{
		if(!entry.isIntersecting){
			return;
		}
		entry.target.classList.add("show2");
	});
}

const observer = new IntersectionObserver(callback,options);
merits.forEach(merit=>{
	observer.observe(merit);
});
h1s.forEach(h1=>{
	observer.observe(h1);
});




//スライダー//
const mySwiper =new Swiper('.slide1',{
	loop:true,
	slidesPerView:1.4,
	spaceBetween: 40,
	effect:"slide",
	centeredSlides:true,
	fadeEffect:{
		crossFade:true
	},
	pagination:{
		el:".swiper-pagination",
	},
	navigation:{
		nextEl:".swiper-button-next",
		prevEl:".swiper-button-prev",
	},
	breakpoints:{
		768:{
			slidesPerView:1.6,
			spaceBetween:60,
		},
		1000:{
			slidesPerView:2,
			spaceBetween:80,
		},
		1200:{
			slidesPerView:2,
			spaceBetween:100,
		},
	}
});


//トレーナー紹介//
$(function(){
	$(".trainer1").on("click",function(){
		$(".trainer1").toggleClass("ura").toggleClass("omote");
	});
});
$(function(){
	$(".trainer2").on("click",function(){
		$(".trainer2").toggleClass("ura").toggleClass("omote");
	});
});
$(function(){
	$(".trainer3").on("click",function(){
		$(".trainer3").toggleClass("ura").toggleClass("omote");
	});
});





