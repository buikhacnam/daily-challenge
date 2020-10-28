/*
A child is playing with a ball on the nth floor of a tall building. 
The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), 
to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window 
(including when it's falling and bouncing?)

*/


function bouncingBall(h,  bounce,  winndow) {
  if (h <= winndow || bounce >= 1 || bounce <= 0 || h <= 0 || winndow <= 0) {
  	return -1;
  } 

  let bounceHeight = h * bounce;
  let seen = 0;
  while (bounceHeight > winndow) {
  		seen = seen + 2;
  		bounceHeight = bounceHeight * bounce;
  }
  return seen + 1;
}

console.log((bouncingBall(3.0, 0.66, 1.5))); //3