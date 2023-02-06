let circleY =[]

function setup() {

    let cnv = createCanvas(570, 150);
    cnv.class('small');
    for (let i = 0; i < 43; i++) {
        circleY[i] = random(height);
    }   
}

function draw() {
    background(50);
    Texto();
   
    for (let i = 0; i < circleY.length; i++) {
          let circleX = width * i / circleY.length;
          circle(circleX, circleY[i], 15);
          fill(color(206, 135, 5))
          circleY[i]++;
          
        if (circleY[i] > height) {
            circleY[i] = 0;
        }
    }
}

function Texto(){
    let texto = "DIGITAL STORE 40% descuento a nuestros clientes"
    let nota = text(texto,5,150);
    nota.textSize(23);
    nota.textAlign(LEFT);
}