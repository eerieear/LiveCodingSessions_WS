// e_e
//eerie_ear

// KEYBOARD
// Evaluate line SHIFT + ENTER
// Evaluate bunch of code CTRL + ENTER
//
// Browser CTRL + ENTER  (line)
// Browser CTRL + ALT + ENTER  (Contiguous lines)
// Browser CTRL + SHIFT + ENTER  (Whole page)

// CTRL + SHIFT + L SHARE CODE

//CTRL + SHIFT + H

/////////
//PART 1
// COLORS AND OUTPUTS
//SOURCES (COLOR - BASIC ROUTING)
//(30m)(40)

// SOURCES // SOLID // COLORS
// solid( r, g, b, a )

solid().out(o0)
solid().out(o1)
solid().out(o2)
solid().out(o3)

render(o0)
solid(1,0,0).out(o0)
solid(0,1,0).out(o0)
solid(0,0,1).out(o0)



// OUTPUT BUFFER MONITORING


solid(1,0,0).out(o1)
solid(0,1,0).out(o2)
solid(0,0,1).out(o3)
solid().out(o0)

render(o0)
render(o1)
render(o2)
render(o3)

render()

solid()
.add(osc(4)
    .mult(src(o1)))
.add(osc(8)
    .mult(src(o2)))
.add(osc(16)
    .mult(src(o3)))
.out()
render(o0)

// CUSTOM COLOR
solid(0.4,0.3,0.7).out(o0)

solid(0.4,0.3,0.7).out(o0) // MAKE CUSTOM COLORS USING RGB

//FROM RED TO YELLOW
render()
solid(1,0,0).out(o0)
solid(1,0.3,0).out(o1)
solid(1,0.6,0).out(o2)
solid(1,0.9,0).out(o3)

// ADD FUNCTIONS TO GENERATE MOVEMENT
render()
solid((()=>Math.sin(time)*0.45),0.1,0.1).out(o0) //MODULATE R
solid(0.01,0.01,(()=>Math.sin(time)*0.45)).out(o1)  //MODULATE B
solid(0.3,0.1,0.2).out(o2)
solid(0.7,0.1,0.5).out(o3)

// OFFSET CONTROLS INTENSITY
solid((()=>Math.sin(time)*0.25),0,0).out(o1)
solid(0,(()=>Math.sin(time)*0.5),0).out(o2)
solid(0,0,(()=>Math.sin(time)*0.75)).out(o3)



//////////
// PART 2
//SOURCES OSC
// osc( frequency, sync, offset )

// frequency :: float (default 60.0)
// sync :: float (default 0.1)
// offset :: float (default 0.0)

osc(4,0.5,0.2)// osc( frequency, sync, offset )
// osc(4,-0.5,0.2)// CHANGE SYNC SIGN TO CHANGE DIRECTION
// osc(4,0.5,[0.1, 1])// CHANGE OFFSET TO INDUCE COLOR IN THE OSC PATTERN
.out()

//ARRAY CONTROLS OSC FREQUENCY
osc( [1,10,50,100,250,500].fast(2) ).out(o0) // frequency
osc( () => Math.sin(time/80 )).out(o1) // frequency 2
osc( 10, [-10,-1,-0.1,0,0.1,1,10] ).out(o2) // sync
osc(10,0.1, () => Math.sin(time)  ).out(o3) // offset
render()

// HUSH / SPEED

hush() // SUSPENDS ALL activity

 // SPEED
//ARRAY CONTROLS OSC FREQUENCY
osc( [1,10,50,100,250,500].fast(2) ).out(o0) // frequency
osc( () => Math.sin(time/80 )).out(o1) // frequency 2
osc( 10, [-10,-1,-0.1,0,0.1,1,10] ).out(o2) // sync
osc(10,0.1, () => Math.sin(time)  ).out(o3) // offset
render()
//CHANGES IN SPEED VALUE ARE GLOBAL AND AFFECT THE WHOLE SKETCH
speed= 1
// speed= 0.5
// speed= -0.5

// KALEID FUNCTION
// .kaleid( nSides )
// nSides :: float (default 4.0)

osc(4,-0.5)
// noise(4,-0.5)
// voronoi(40,-0.5)
// .kaleid(1.1)
// .kaleid(2)
.kaleid(200)
.scale(0.5)
.out()


// COMPLEX EXAMPLE
osc(10).color(([1],[0],[0]).fast(2)).out(o0)
osc( [1,10,50,100,250,500].fast(0.2) )
// .kaleid(200)
.out(o0) // frequency
osc( () => Math.sin(time/10) * 100 ).kaleid(19).out(o1) // frequency 2
osc( 10, [-10,-1,-0.1,0,0.1,1,10], 0 ).kaleid(21).out(o2) // sync
osc(10,-0.1, () => Math.sin(time/10) * 10 ) // offset
  .modulate(o1,[0.25,0.05]) // CONTRAST MODULATION VALUES
  .modulate(o2,[0.25,0.05]) // CONTRAST MODULATION VALUES
  .modulate(o3,[0.25,0.05]) // CONTRAST MODULATION VALUES
//   .kaleid(0.5)
//   .kaleid(8)
//   .add(noise(3,0.06))
//   .kaleid(200)
  .out(o3)
render(o3)
speed= 0.0125 //SPEED AFFECT GENERAL SPEED FOR THE WHOLE SKETCH


// SOURCES GRADIENT
// gradient( speed )

gradient().out(o0)

gradient([1,40]).out(o0)

gradient([1,40])
  .invert([0,1])
  .out(o0)


// ARRAYS > > SMOOTH / FAST
gradient([1,40].smooth(0.9))
  .invert([0,1].smooth(0.9))
  .out(o0)

gradient([1,40].fast(0.4).smooth(0))
  .invert([0,1].fast(0.4).smooth(0.9))
  .out(o0)


// SOURCES NOISE
// (Perlin noise)
// noise( scale, offset )
    // scale :: int (default 10.0)
    // offset :: float (default 0.1)


// NOISE BASICS
noise().out() // DEFAULT NOISE VALUE 10
noise(1).out() //MINIMUM INT
noise(0.5).out() //FLOAT (supposedly should be int but it work , so always try!)
noise(100).out()


// SECUENCING NOISE
noise([1,2,0.25].fast(0.4)).out()
noise([1,2,0.5].fast(0.25)).out()
noise([-1,0.35]).out()
noise([0.7,0.1,0.3]).out(o0)
noise(0.5,0.1,0.3).out(o0)
noise(0.5,0.1,0.3).scale(0.25).out(o0)

//NOISE ARGUMENTS ( scale (how big), offset (how fast) )
noise((4),([0.2,0.08,0].fast(0.4))).out() // ARRAY DEFINES SPEED VALUE
noise(([2,4,8].fast(0.4)),(0.2)).out() // ARRAY DEFINES SCALE VALUE

// ADDING COLOR TO NOISE
noise(50,0.2).colorama(2).out()

// DYNAMIC TEXTURES
noise(50,0.3).repeat([1,10,100]).out()
noise(300,0.3).out()
noise(1000,0.3).out()
noise(1000,1.3).out()
// COMPLEX EXAMPLE
noise(100,1.3).color(0,0.5,0.8).modulate(noise(1,0.06).rotate(()=>time/-32),0.125).blend(src(o0).scale(1.02)).out()

// COMPLEMENTARY GRADIENTS
noise(0.5).colorama(2).out()


// SOURCES VORONOI
//(RANDOM POLIGON TEXTURE)

// voronoi( scale, speed, blending )
//     scale :: float (default 5)
//     speed :: float (default 0.3)
//     blending :: float (default 0.3)

voronoi(0.4).out()

voronoi(0.4,0.05).out()

voronoi(2,0.05,1).out()

voronoi(2,0.05,0.1).out()

// LESS BLENDING (sharper edges / less light)
voronoi(1.8, [0.075,0.075], 0.1).out()

// MORE BLENDING (less contrast / more light)
voronoi(1.8, 0.5, 1).out()
voronoi(1.8, 0.5, 2).out()
voronoi(1.8, 0.5, 20).out()
voronoi(18, 0.5, 20).out()

voronoi(18, 0.5, 20).diff(o0).scale(1.08).out()
voronoi(18, 0.5, 20).diff(o0).scale(1.08).invert().out()
voronoi(1.8, 0.5, 20).diff(o0).scale(1.08).invert().out()

// LESS BLENDING (negative blending reverses light)
voronoi(1.8, 0.25, -2).out()

// COMPLEX EXAMPLE
voronoi(20.5)
.diff(osc([130,300,100]),0.05)
.mult(voronoi(24),0.04).contrast(24)
.thresh([0.7,0.6,0.4,0.6,0.75])
  .diff(noise([130,300,100].fast(0.05)),0.05)
  .thresh((() => Math.sin(time/20) ))
  .invert()
.out()


// GEOMETRY
//SHAPES
// shape( sides, radius, smoothing)

// SIDES
shape().out()
shape([1,2,3,4,5,6,7,40]).out()
shape([1,2,3,4,5,6,7,40].smooth()).out()
shape([1,2,3,4,5,6,7,40].smooth()).repeat().out()
shape([1,2,3,4,5,6,7,40].smooth()).repeat(12,8).out()
//COMPLEX EXAMPLE
shape([1,2,3,4,5,6,7,40].smooth()).repeat(12,8).blend(src(o0).scale(1.5)).rotate(()=>time/32).out()

shape([1,2,3,4,5,6,7,40].smooth()).repeat(12,8).blend(src(o0).scale(1.5).mult(osc())).rotate(()=>time/32).out()

// RADIUS ITERATION
shape(4,[0.1,0.5,0.8],0).out()

// SMOOTHING ITERATION
shape(4,0.5,[0.1,0.5,1]).out()




//////////
// PART 3
// OPERATORS
// OPERATORS USE SOURCES TO MODIFY THE SIGNAL  (TEXTURE + AMMOUNT)
// add / blend / diff / layer / mask / mult

// ADD / MULT / DIFF / BLEND
solid(0,0,0)
	.add(shape(40,0.6))
	.mult(osc(14))
	.diff(shape(3))
	.blend(noise(2,0.07))
	.diff(voronoi(4,0.07))
// 	.mult(osc(14))
// 	.diff(voronoi(4,0.07))
// 	.diff(voronoi(4,0.07).mult(osc(20)))
// 	.diff(voronoi(4,0.07).add(noise(20)))
	.out()


  voronoi(18, 0.5, 20).diff(o0).scale(1.08).out()
  voronoi(18, 0.5, 20).diff(o0).scale(1.08).invert().out()
  voronoi(1.8, 0.5, 20).diff(o0).scale(1.08).invert().out()


// LAYER  / LUMA
osc(6)
// 	.layer(osc(8).rotate(1.57)) // LAYER (full opacity)
	.layer(osc(8).rotate(1.57).luma()) // LAYER + LUMA (adds on black)
.out()

// MASK / LUMA
osc(20)
	.mask(osc(8).rotate(1.57)) // MASK + LUMA (adds on white)
// 	.mask(osc(8).rotate(1.57).luma([1,0.9,0.8])) // MASK + LUMA (adds on white)
// .scale(()=>Math.sin(time/8+1))
.out()

// MASK
//.mask( texture, reps, offset )
//(color/ src/ shape) + reps(default 3.0) + offset (default 0.5)

shape(4).out()

osc(40).mask(shape(4),0.4,0.2).out(o0) // SHAPE IS SOLID MASK

osc(80).mask(shape(4,0.4,0.6)).out(o0) //MASK HAS SHAPE PARAMETERS

osc(80).mask(shape(40,0.5,[0,0.2,0.4,0.6,0.8])).out(o0) //ITERATE RADI

render(o0)


BASIC HYDRA MIX

solid()
  .add(src(o1),1) //MIX channel 1
  .add(src(o2),1) //MIX channel 1
  .add(src(o3),1) //MIX channel 1
.out(o0) //FINAL OUT MIX


osc(8).out(o1)
noise(4).out(o2)
osc(10,0.2).rotate(1.57).colorama(4).out(o3)



// MASK + NOISE

osc(100)
.mask(noise(1,0.06))
.out(o0) //noise( scale, offset)

osc(400).mask(noise(2,0.5),4,0.2).out(o0)


//low contrast
osc(10).mask(noise(20)).out(o0)

//contrast
osc(80.08)
.mask(noise(2))
.out(o0)

// CONTRAST
osc(100)
.mask(noise(3)).contrast([0.5,2]).out(o0)

//NEGATIVE CONTRAST
osc(108.08)
.mask(noise(2),40,2.6)
.contrast(-2).out(o0)


// OPERATORS / AMMOUNT

shape(40,0.8,0.5)
.mult(osc(18),[0,0.2,0.6,0.8,1])
// .add(osc(18),[0,0.2,0.6,0.8,1])
// .blend(osc(18),[0,0.2,0.6,0.8,1])
// .diff(osc(18),[0,0.2,0.6,0.8,1]) // DIFF HAS NO AMMOUNT ! !
.out()


//////////
// PART 4
// SOURCES

// SOURCES AND RENDER OUTPUTS
// ROUTING OUTPUT BUFFERS
// src( input )
// "MAIN" OUT >> out(o0)

// O1
osc(4).shift(0.5,0.2, 0.3, [0.4, 0.2]).out(o1)
// O2
osc(10).shift(0.15,0.82, 0.3, [0.5, 0.8]).rotate(-1.2).out(o2)
// O3
osc(80).shift(0.5,0.2, 0.5, [0.3, 0.6]).rotate(1.2).out(o3)

render()

render(o0)
render(o1)
render(o2)
render(o3)


// MIX
src(o1).diff(o2).out(o0)
src(o2).add(o3).out(o0)
src(o3).diff(o1).out(o0)

// SEQUENCER // based on a sketch by @flordefuego
// SEQUENCE
f1 = 2.5//speed
//
solid()
  .add(o1,[1,0,0].fast(f1)) //R
  .add(o2,[0,1,0].fast(f1))	//G
  .add(o3,[0,0,1].fast(f1))	//B
//   .add(osc(8),[0,0,1].fast(f1))	//OSC
//   .mult(solid(),0.6)
  .out()

// OUT
// O 1-2-3 RGB
solid(1).out(o1)
solid(0,1,0).out(o2)
solid(0,0,1).out(o3)

// O 1
// solid(1).diff(osc(100,2.8).thresh(0.5)).out(o1)
solid(1).diff(osc([1,2,1,0.8],2.8).thresh(0.5)).out(o1)

// O 2
solid(0,1).add(shape([1,4,2,4]),[1,-1,1,1]).modulateScale(noise([1,2,1,0.8])).out(o2)
// gradient().invert().out(o2)

// O 3
gradient().modulate(noise(4)).out(o3)

// CLIP HEXAGONO @
// https://youtu.be/F3Q0Ij7TYlE

src(o1).diff(o3).blend(o2).out(o0)//order alters result
src(o1).diff(o3).blend(o2).out(o0)//order alters result 2
src(o2).diff(o3).blend(o1).out(o0)//order alters result 3

// CLIP HEXAGONO @
// https://youtu.be/F3Q0Ij7TYlE


//////////
// PART 5
// MODULATION

shape(4)
.modulate(
osc(4,-0.5)
// noise(4,-0.5)
// voronoi(40,-0.5)
.kaleid(2)
)
.out()

s0.initScreen(2)

src(s0)
.out()

// USE KALEID TO CENTER OUR SHAPE SCALE  MODULATION
shape(4)
.modulateScale(
osc(4,-0.5)
// noise(4,-0.5)
// voronoi(40,-0.5)
.kaleid(200)
)
.out()


// MODULATE GEOMETRY
// A SHAPE
shape(80)
.diff(shape(80,0.5))
// shape(4)
// .scale(0.9,1.4)
// MODULATED BY A SOURCE
.modulate(
// osc(4,-0.5)
// osc(4,[-0.5, -0.2])
// osc(4,[-0.5, -0.50001].smooth(0.4))// KEEP EXPLORING UNUSUAL NUMBERS AN OPTION
// osc(4,[-0.5, -0.5001].smooth(0.6))// ONE LESS DIGIT
// osc(4,[-0.5, -0.501].smooth(0.6))// // STARTS TO BREAK
// osc(4,[-0.5, -0.501])//NO SMOOTH
// noise(0.5,-0.5)
// noise(40,-0.5) //for Kaleid
// voronoi(40,-0.5)
// voronoi(12,-0.5)
)
// MODULATED
// .modulate(noise(0.5,0.02))
.modulateScale(noise(1,0.02)).scale(0.5)
// .modulateRepeat(noise(2,0.2))
// .modulatePixelate(gradient(1))
// .modulatePixelate(osc(1))
// .modulatePixelate(osc(4))// MODULTATE PIXELATE WILL ADD UP TO PREVIOUS MODULATION
// .modulatePixelate(src(o0))
// .modulateRepeat(osc(2,-0.2))
// .modulateRepeatX(noise(2,0.2))
// .modulateRepeatY(osc(2,0.2))
// .modulateScale(osc(1,0.2)).scale(0.5)
// .modulateScrollX(noise(2,0.2))
// .modulateScrollY(noise(2,0.2))
// .modulateRotate(noise(2,0.2))
.out()


gradient(4).modulate(osc()).out(o1)
//
shape(4).mult(
osc(40).colorama(2)
// .modulateHue(src(o1).rotate(1.57))
.modulateHue(noise(10,0.8,0.5).rotate(0.57))
)
.out(o0)



//eerie_eye KALEID Example
shape(80)
// shape(4)
.scale(0.9,1.4)
.modulate(
// osc(4,-0.5)
// osc(4,[-0.5, -0.2])
// noise(0.5,-0.5)
// noise(40,-0.5) //for Kaleid
// voronoi(40,-0.5)
// voronoi(12,-0.5)
voronoi(800,-0.5)
)
//KALEID
// .scale(2.6).kaleid(40) //eerie_eye
// .scale([2.2,2.4,2.6,2.8,3]).kaleid(40) //SCALE OBJECT WITH LIST
// .scale([2.2,2.4,2.6,2.8,3].smooth(0.99)).kaleid(40) //USE SMOOTYH FOR FLUID TRANSITION
// .modulate(noise(0.5,0.02))
.modulateScale(noise(1,0.02))
.modulateRotate(noise(1,0.2))
.modulateRotate(noise(1,0.2))
.modulateKaleid(noise(1,0.2))
// .modulatePixelate(noise(1,0.2))
.modulateRepeat(noise(1,0.2))
.scale(0.2)
.out()

hush()

speed = 0.5

//////////
// PART 6
// CANVAS



solid().out()

s0.initScreen(0)

src(s0)
.mult(solid(),0.6)
.out(o0)
//
render(o0)

s0.initScreen(0)

src(s0)
.blend(src(o0)
.add(voronoi(4,0.4,0.3))
// .scale(1.02).scrollY(0.1,0.04))
.scale(1.02,1.06).scrollY(-0.1,-0.03))
// .scale(1.5)
.modulateScale(src(o0))
.scale(1.5)
.modulateKaleid(src(o0),0.02)
.saturate(2.8)
// .add(voronoi(4,0.4,0.3))/
//
.mult(solid(),0.1)
.out(o0)
//

hush()

/////////////////
//SCREEN
//
// s0.initScreen(2)
src(s0)
.blend(solid(),0.57) // Solid works as an opacity or color filter
// .add(shape(4,0.8))
// .add(shape(4,0.8).mult(noise(4).colorama()))
// .blend(solid(0.4),0.3)
// .mult(osc(([100,20].fast(0.15)),0.04))
// .mult(osc(([4,3,21,1,2,3].fast(0.25)),0.04,0.05).rotate())
// .thresh(([0.027,0.04,0.09,0.2].fast(1.75)))
// .modulate(s0,0.15)
// .modulate(s3,0.05) // Modulate another
.modulate(noise(0.48,0.1),0.5)
.diff(s0)
// .blend(solid(),0.3) // Solid here is MASTER opacity or color filter
.saturate(3)
.modulate(src(o0),0.3)
.out(o0)

s0.clear()


// SOURCES
// SCREEN Pt 2


// s0.initScreen(2)
src(s0)
.saturate(1.1) // COLOR FROM FEEDBACK USING SATURATION
// .saturate([1,2,3,4,8,12,24].fast(0.25)) // COLOR FROM FEEDBACK USING SATURATION
.saturate([100,20,30,40,80,12,24].fast(0.5)) // COLOR FROM FEEDBACK USING SATURATION
// .scale([1.01,0.8,0.5])
// .scale([1.03])
.contrast(1.05)
.scrollX([0.01,0.02,0.05, 0.08, 0.1]*(-1))
.scrollY([0.01,0.02,0.05, 0.08, 0.07])
// .modulate(s0)
.diff(s0)
  // .modulateKaleid(osc(1,0.05,3),1)
// .modulateRotate(o0,[0.4,0.6,0.7,0.8]) //FEEDBACK MODULATES ROTATION
.thresh([0.6,0.5,0.4,0.3])
// .mult((osc(200)))
.blend(solid(),0.25) // Solid here is MASTER opacity or color filter
.out(o3)
render(o3)
//
//
//

// SOURCES video//
// ATOM

vid = document.createElement('video')
vid.autoplay = true
vid.loop = true
//

vid.src = '/Volumes/DATA/e_e/IMAGEN/webm/webm ee/5.webm'
//

// s1.init({src: vid});
src(s1)
.out()


.rotate(()=> time/1)


s1.initCam()
src(s1)
.out()

s1.init({src: vid});
src(s1)
.out()

solid().out(o3)

render()

//////////

////////////////
// SOURCES video WEB

vid = document.createElement('video');
vid.crossOrigin = 'anonymous';
vid.autoplay = true;
vid.loop = true;
//e_e
vid.src ='https://media1.giphy.com/media/Job7T5RGlR5JcpZPUu/giphy.mp4'
//_ojack
// vid.src = 'https://media.giphy.com/media/Wq9ZmvjFkdRiFnGasb/giphy.mp4'

// s1.clear()

s1.init({src: vid});
src(s1)

//EXAMPLE
s1.init({src: vid})
src(s1)
// .diff(
  // shape(
    // (4),4.2).scale(0.18)
    // .diff((osc(9)))
    // .diff(shape(
      // (4),4.2).scale([0.1,0.13,0.5]))
  // )
// .add(gradient(2))
// .modulate(o1)
// .mult(o1)
// .diff(o1)
.out(o0)



////////////////
// SOURCES CAM

s1.initCam()
src(s1)
.blend(src(s1).scale(1.2).scrollY(0.1,0.04))
.blend(src(o0).scale(1.5).scrollY(-0.1,0.04).modulateScale(noise(1)))
// .thresh()
// .pixelate(64,64)
.posterize(12,2)
.out(o0)


////////////////
// SOURCES P5

p1 = new P5() // {width: window.innerWidth, height:window.innerHeight, mode: 'P2D'}

p1.noStroke()
p1.fill(255, 0, 100)
p1.draw = () => {
  p1.stroke(255);
  p1.clear();
  p1.rect(p1.mouseX, p1.mouseY, 300, 300);
}

p1.hide()


// s0.init({src: p1.canvas});
src(s0)
.modulate(noise(4))
.out(o0)
//
