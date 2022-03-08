let b1= 0;
let b2= 0;
let b3= 0;
let totalpc=0;
let totalcuenta=0;
let totalpagar=0;
let desct=0;

let boton = document.getElementById('bt1');
    boton.addEventListener('click',function(){
    b1+=1;
    document.getElementById("s1").innerHTML=b1; 
})
let boton2 = document.getElementById('bt2');
    boton2.addEventListener('click',function(){
    b2+=1;
    document.getElementById("s2").innerHTML=b2; 
})
let boton3 = document.getElementById('bt3');
    boton3.addEventListener('click',function(){
    b3+=1;
    document.getElementById("s3").innerHTML=b3;   
})
let boton4 = document.getElementById('bt4');
    boton4.addEventListener('click',function(){
    totalpc=b1+b2+b3;
    document.getElementById("totalpc").innerHTML=totalpc; 
    totalcuenta= (b1*1500000)+(b2*820000)+(b3*1100000);

    if(totalcuenta>=1640000 && totalcuenta<=3280000){
        desct=((totalcuenta*15)/100)
        let porcentaje=" su descuento es del 15% : $"
        document.getElementById("desTo").innerHTML= porcentaje+desct;
        document.getElementById("totalpagar").innerHTML=totalcuenta-desct;
    }else if(totalcuenta>3280000 && totalcuenta<=6560000){
        desct=((totalcuenta*25)/100)
        let porcentaje=" su descuento es del 25% : $ "
        document.getElementById("desTo").innerHTML= porcentaje+desct;
        document.getElementById("totalpagar").innerHTML=totalcuenta-desct;
    }else if(totalcuenta>6560000 && totalcuenta<=9840000){
        desct=((totalcuenta*35)/100)
        let porcentaje=" su descuento es del 35% : $ "
        document.getElementById("desTo").innerHTML= porcentaje+desct;
        document.getElementById("totalpagar").innerHTML=totalcuenta-desct;
    }else{
       let porcentaje=" No tiene derecho a descuento "
        document.getElementById("desTo").innerHTML= porcentaje;
        document.getElementById("totalpagar").innerHTML=totalcuenta; 
    }
    
    document.getElementById("totalcuenta").innerHTML=totalcuenta;
    
})


