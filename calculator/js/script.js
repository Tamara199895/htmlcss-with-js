$(document).ready(function(){
	$(".action").click(function(){

		let num=$(this).html()
		console.log(num)
		let r=$("#result").val()
		r=r.split("")
		if((r[r.length-1]=="*"||r[r.length-1]=="/"||r[r.length-1]=="+"||r[r.length-1]=="-")&&(num=="*"||num=="/"||num=="+"||num=="-")){
			delete (r[r.length-1])
			r=r.join("")
			$("#result").val(r+num)
		}
		else{r=r.join("")
			if (r==="0" ){
				$("#result").val(num)
			}
			else{
				$("#result").val(r+num)
			}
		}
	})


	$(".havasar").click(function(){
		let r=$("#result").val()
		$("#result").val(eval(r))

	})

	$(".delate").click(function(){

		$("#result").val(0)

	})

	$(".back").click(function(){
		let k=$("#result").val()
		k=k.split("")
		delete(k[k.length-1])
		k=k.join("")
		console.log(k)
		
		if (k==="") {
			k=0
		}
		$("#result").val(k)
	})
	$(".ket").click(function(){
		let a=$("#result").val()
		let t=a.split(/\+|\/|\*|\-/)
		if ((t[t.length-1]).includes(".")) {
			$("#result").val(a)
		}
		else{
			$("#result").val(a+".")

		}
		
	})
	$(".pow").click(function(){
		let a=$("#result").val()
		let b=a*a
		$("#result").val(b)

	})
	$(".armat").click(function(){
		let c=$("#result").val()
		let d=Math.sqrt(c)
		$("#result").val(d)
	})
})