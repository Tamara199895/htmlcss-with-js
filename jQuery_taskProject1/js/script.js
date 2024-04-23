$(document).scroll(function(){
	let s=$(this).scrollTop()
	console.log(s)
	if (s>500) {
		$(".txt").fadeIn(300)
	}
	else{
		$(".txt").fadeOut()

	}
	let t=$("#green_space").offset().top
	console.log(s,t)
	if (s>t-100) {
		$(".line").animate()

		$(".color1").animate({width:"90%"},2000)
		$(".color2").animate({width:"80%"},2000)
		$(".color3").animate({width:"70%"},2000)
		$(".color4").animate({width:"60%"},2000)


	}

})

$("#Experience").click(function(){
	let Experience=$("#yellow_space2").offset().top
	$("html,body").animate({
		scrollTop:Experience-$("#menu").height()
	},1000)
})
$("#Pricing").click(function(){
	let Pricing=$("#blue_section2").offset().top
	$("html,body").animate({
		scrollTop:Pricing-$("#menu").height()
	},1000)
})
$("#Testimonials").click(function(){
	let Testimonials=$("#rose_section").offset().top
	$("html,body").animate({
		scrollTop:Testimonials-$("#menu").height()
	},1000)
})
$("#Contact").click(function(){
	let Contact=$("#message").offset().top
	$("html,body").animate({
		scrollTop:Contact-$("#menu").height()
	},1000)
})



$("#Skills").click(function(){
	let Skills=$("#yellow_space3").offset().top
	$("html,body").animate({
		scrollTop:Skills-$("#menu").height()
	},1000)
})
$("#Education").click(function(){
	let Education=$("#blue_space").offset().top
	$("html,body").animate({
		scrollTop:Education-$("#menu").height()
	},1000)
})
$("#Portfolio").click(function(){
	let Portfolio=$("#blue_section1").offset().top
	$("html,body").animate({
		scrollTop:Portfolio-$("#menu").height()
	},1000)
})
$("#Services").click(function(){
	let Services=$("#green_section").offset().top
	$("html,body").animate({
		scrollTop:Services-$("#menu").height()
	},1000)
})

$("#d1").hide()
$("#d2").hide()
$("#d3").hide()
$("#d4").hide()

$("#button4").click(function() {
	let x=$("#dd1").val()
	if (x=="") {
		$("#d1").fadeIn(1000)
	}
	else{
		$("#d1").fadeOut(1000)
	}

})

$("#button4").click(function() {
	let x=$("#dd2").val()
	if (x=="") {
		$("#d2").fadeIn(1000)
	}
	else{
		$("#d2").fadeOut(1000)
	}

})

$("#button4").click(function() {
	let x=$("#dd3").val()
	if (x=="") {
		$("#d3").fadeIn(1000)
	}
	else{
		$("#d3").fadeOut(1000)
	}

})


$("#button4").click(function() {
	let x=$(".dd4").val()
	if (x=="") {
		$("#d4").fadeIn(1000)
	}
	else{
		$("#d4").fadeOut(1000)
	}

})

