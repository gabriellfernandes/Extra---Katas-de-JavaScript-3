const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1(){
   
    let cont1 = []
    
    for(let i = 0;i <= 25; i++){
        cont1.push(i)
    }
   
    return cont1
}

function kata2(){
   
    let cont2 = []
    
    for(let i = 25;i >= 1; i--){
        cont2.push(i)
    }
    
    return cont2
}

function kata3(){
   
    let cont3 = []
    
    for(let i = -1;i >=  -25; i--){
        cont3.push(i)
    }

    return cont3
}

function kata4(){
   
    let cont4 = []
    
    for(let i = -25;i <=  -1; i++){
        cont4.push(i)
    }
    
    return cont4
}

function kata5(){
   
    let cont5 = []
    
    for(let i = 25;i >=  -25; i--){
        cont5.push(i)
    }
    
    return cont5
}

function kata6(){
   
    let cont6 = []
    
    for(let i = 1;i <=  100; i++){
       if(i % 3 == 0){
        cont6.push(i)
       }
    }
    
    return cont6
}

function kata7(){
   
    let cont7 = []
    
    for(let i = 1;i <=  100; i++){
       if(i % 7 == 0){
        cont7.push(i)
       }
    }
    
    return cont7
}

function kata8(){
   
    let cont8 = []
    
    for(let i = 100;i >=  1; i--){
       if(i % 3 == 0 || i % 7 == 0){
        cont8.push(i)
       }
    }

    return cont8
}

function kata9(){
   
    let cont9 = []
    
    for(let i = 1;i <=  100; i++){
       if(i % 5 == 0 && i % 2 == 1){
        cont9.push(i)
       }
    }

    return cont9
}

function kata10(x){
   
    let cont10 = []
    
    for(let i = 0;i <  20; i++){
        cont10.push(x[i])
    }

    return cont10
}

function kata11(x){
   
    let cont11 = []
    for (let i = 0; i <= x.length; i++) {
        if(x[i] % 2 == 0 && cont11.length < 20){
            cont11.push(x[i])
        }
    }
 
    return cont11
}

function kata12(x){
   
    let cont12 = []

    for (let i = 0; i <= x.length; i++) {
        if(x[i] % 2 == 1 && cont12.length < 20){
            cont12.push(x[i])
        }
    }

    return cont12
}

function kata13(x){
   
    let cont13 = []

    for (let i = 0; i <= x.length; i++) {
        if(x[i] % 8 == 0){
            cont13.push(x[i])
        }
    }

    return cont13
}

function kata14(x){
   
    let cont14 = []
    let quadrado = 0

    for (let i = 0; i <= x.length; i++) {
        quadrado = x[i] * x[i]
        cont14.push(quadrado)
    }

    return cont14
}

function kata15(){
   
    let cont15 = 0

    for (let i = 0; i <= 20; i++) {
        cont15 += i
    }


    return cont15
}

function kata16(x){
   
    let cont16 = 0

    for (let i = 0; i < x.length; i++) {
        cont16 += x[i]
    }

    return cont16
}

function kata17(x){

    array17 = x[0]
    for (let i = 0; i < x.length; i++) {
        if(array17 > x[i]){
            array17 = x[i]
        }
    }

    return array17
}

function kata18(x){

    array18 = x[0]
    for (let i = 0; i < x.length; i++) {
        if(array18 < x[i]){
            array18 = x[i]
        }
    }


    return array18
}

kata1()
kata2()
kata3()
kata4()
kata5()
kata6()
kata7()
kata8()
kata9()
kata10(sampleArray)
kata11(sampleArray)
kata12(sampleArray)
kata13(sampleArray)
kata14(sampleArray)
kata15()
kata16(sampleArray)
kata17(sampleArray)
kata18(sampleArray)




