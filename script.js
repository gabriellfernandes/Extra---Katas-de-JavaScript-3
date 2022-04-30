function kata1(){
   
    let cont = []
    
    for(let i = 0;i <= 25; i++){
        cont.push(i)
    }
   
    return cont
}

function kata2(){
   
    let cont1 = []
    
    for(let i = 25;i >= 1; i--){
        cont1.push(i)
    }
    
    return cont1
}

function kata3(){
   
    let cont = []
    
    for(let i = -1;i >=  -25; i--){
        cont.push(i)
    }

    return cont
}

function kata4(){
   
    let cont = []
    
    for(let i = -25;i <=  -1; i++){
        cont.push(i)
    }
    
    return cont
}

function kata5(){
   
    let cont = []
    
    for(let i = 25;i >=  -25; i--){
        cont.push(i)
    }
    
    return cont
}

function kata6(){
   
    let cont = []
    
    for(let i = 1;i <=  100; i++){
       if(i % 3 == 0){
        cont.push(i)
       }
    }
    
    return cont
}

function kata7(){
   
    let cont = []
    
    for(let i = 1;i <=  100; i++){
       if(i % 7 == 0){
        cont.push(i)
       }
    }
    
    return cont
}

function kata8(){
   
    let cont = []
    
    for(let i = 100;i >=  1; i--){
       if(i % 3 == 0 || i % 7 == 0){
        cont.push(i)
       }
    }

    return cont
}

function kata9(){
   
    let cont = []
    
    for(let i = 1;i <=  100; i++){
       if(i % 5 == 0 && i % 2 == 1){
        cont.push(i)
       }
    }

    return cont
}

function kata10(x){
   
    let cont = []
    
    for(let i = 0;i <  20; i++){
        cont.push(x[i])
    }


    return cont
}

function kata11(x){
   
    let cont = []
    let i = 0
    for (let i = 0; i <= x.length; i++) {
        if(x[i] % 2 == 0 && cont.length < 20){
            cont.push(x[i])
        }
    }

    return cont
}

function kata12(x){
   
    let cont = []

    for (let i = 0; i <= x.length; i++) {
        if(x[i] % 2 == 1 && cont.length < 20){
            cont.push(x[i])
        }
    }
    console.log(cont)
    return cont
}

function kata13(x){
   
    let cont = []

    for (let i = 0; i <= x.length; i++) {
        if(x[i] % 8 == 0){
            cont.push(x[i])
        }
    }

    return cont
}

function kata14(x){
   
    let cont = []
    let quadrado = 0

    for (let i = 0; i <= x.length; i++) {
        quadrado = x[i] * x[i]
        cont.push(quadrado)
    }

    return cont
}

function kata15(){
   
    let cont = 0

    for (let i = 0; i <= 20; i++) {
        cont += i
    }


    return cont
}

function kata16(x){
   
    let cont = 0
    let o = 0

    for (let i = 0; i < x.length; i++) {
        o = x[i]
        cont += x[i]
    }

    return cont
}

function kata17(x){

    array = x[0]
    for (let i = 0; i < x.length; i++) {
        if(array > x[i]){
            array = x[i]
        }
    }

    console.log(array)
    return array
}

function kata18(x){

    array = x[0]
    for (let i = 0; i < x.length; i++) {
        if(array < x[i]){
            array = x[i]
        }
    }


    return array
}








