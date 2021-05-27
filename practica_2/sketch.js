const p1 = {x: 0, y: 0};
const p2 = {x: 200, y: 200};

const p3 = {x: 500, y: 0};
const p4 = {x: 700, y: 200};

const p5 = {x: 1000, y: 0};
const p6 = {x: 1200, y: 200};

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {

	stroke("RED")
	line(500,0,500,800);
	line(1000,0,1000,800);
	push();
	stroke("green");
	ecuPP(p1,p2);
	DDA(p3,p4);
	bresenham(p5,p6);
	pop();
	
}

function ecuPP(p1,p2){
	const dx = p2.x - p1.x;
	const dy = p2.y - p1.y;
	const m = dy / dx;
	const b = p1.y - (m + p1.x);

	let x = p1.x;
	let y = p1.y;

	while(x<=p2.x){
		point(x,y);
		x++;
		y = m * x + b; 
	}
}

function DDA(p1,p2){
	
	const x = p2.x - p1.x;
	const y = p2.y - p1.y;
	
	let m = p1.x;
	let n = p1.y;
	let pp = 0;


	if(x>y)
		pp=1/x;
	else pp=1/y;
	while(m<=p2.x && n<= p2.y){
		m=m+pp*x;
		n=n+pp*y;
		point((m+0.5),(n+0.5));
		x1=m;
		y1=n;
	}
}


function bresenham(p1,p2) {
   var dx = Math.abs(p2.x - p1.x);
   var dy = Math.abs(p2.y - p1.y);
   var sx = (p1.x < p2.x) ? 1 : -1;
   var sy = (p1.y < p2.y) ? 1 : -1;
   var err = dx - dy;

   let x = p1.x;
   let y = p1.y;

   while(true) {
      point(x, y);

      if (Math.abs(x - p2.x) < 0.0001 && Math.abs(y - p2.y) < 0.0001) break;
      var e2 = 2*err;
      if (e2 > -dy) { err -= dy; x  += sx; }
      if (e2 < dx) { err += dx; y  += sy; }
   }
}