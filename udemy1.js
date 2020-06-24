var pics = [
"puppy.jpg",
"cute.jpg",
"puppy2.jpg",
"puppy3.jpg",
"sleeping.jpg",
"puppy5.jpg",
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click",function(){
	if(counter === 6){
		counter = 0;
	}
	img.src = pics[counter]
	counter = counter + 1;
});

