var x1 = document.getElementById("myAudio") 

function movemytank(){x1.play()
	$(document).keydown(function(e){
		if (e.key=="ArrowRight"&& 
			$("#mytank").position().left+70<$("#game").width())
		{
			$("#mytank").css({
				left:"+=10px"
			})
		}
		if (e.key=="ArrowLeft"&&
			$("#mytank").position().left>0) {
			$("#mytank").css({
				left:"-=10px"
			})
	}
	if (e.key==" "){
		$(`<img src="nkar/bullet.png" class="snaryad"> `)
		.css({
			left:$("#mytank").position().left+15
		}).appendTo("#game")

		
	}
})

}

let miavor=0
let int1
function movesnaryad(){
	int1=setInterval(function(){
		$(".snaryad").each(function(){
			let t=$(this)


			$(".enemy").each(function(){

				let top=Math.abs($(this).position().top-t.position().top)
				let left=Math.abs($(this).position().left-t.position().left)
				let h=$(this).height()
				let w=$(this).width()
				let a=$(this).position().top
				let b=$(this).position().left

				if (top<h&&left<w-30) {
					miavor++
					t.remove()
					$(this).remove()
					
					let krak=$(`<img src="nkar/fire.gif" class="fire">`)
					$("#game").append(krak)
					krak.css({
						top:a,
						left:b
					})
					var x2 = document.getElementById("audio") 
					x2.play()
					setTimeout(function(){
						krak.remove()
					},1000)

				}
				


			})

			if (t.position().top<-70) {
				t.remove()
			}
			t.css({
				top:"-=10px"
			})
		})

	},50)



}
let int2
function enemytank(){
	int2 =setInterval(function(){
		let l=Math.floor(Math.random()*($("#game").width()-70))
		$(`<img src="nkar/t1.png" class="enemy">`)
		.css({
			left:l}).appendTo("#game")
	},1000)
}

let int3
function moveenemy(){
	int3=setInterval(function(){
		$(".enemy").each(function(){
			$(this).css({
				top:"+=10px"
			})
			if ($(this).position().top+70>$("#game").height()) {
				$(`<div class="over">
					<p class="p"> Game Over(You have ${miavor} points)</p>
					<button  id="again">Start Game</button>`)
				.appendTo("#game")
				
				$(".over").animate({
					
					height: '+=100vh',
					opacity: '0.7',
				})
				x1.pause()
				clearInterval(int1)
				clearInterval(int2)
				clearInterval(int3)
				$(".enemy").remove()
				$(".snaryad").remove()
				miavor=0


				$(document).off("keydown")
			}
			
		})

	},100)

}



$(document).on("click","#again", function(){
	$(".over").fadeOut(1000)

	movemytank()
	movesnaryad()
	enemytank()
	moveenemy()

	
})

$("#btn").click(function(){
	$("#start").fadeOut(1000)
	movemytank()
	movesnaryad()
	enemytank()
	moveenemy()

})

