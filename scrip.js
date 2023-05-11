let hitung1=document.getElementById("hitung1");
let hitung2=document.getElementById("hitung2");
let hitung3=document.getElementById("hitung");
hitung3.addEventListener("click",function (){
    let nilaiA=document.getElementById("nilaiA").value;
    let nilaiB=document.getElementById("nilaiB").value;
    let nilaiC=document.getElementById("nilaiC").value;

    let pangkat = Math.pow(nilaiB,2) - 4*nilaiA*nilaiC;
    let akar = Math.sqrt(Math.abs(pangkat));
    let bagi = 2*nilaiA;

    if (pangkat > 0){
        let x1 = (-nilaiB + akar) / bagi;
        let x2 = (-nilaiB - akar) / bagi;
        hitung1.innerHTML= "Nilai x1 adalah " + x1;
        hitung2.innerHTML= "Nilai x2 adalah " + x2;
    }
    else if (pangkat === 0){
        let x1 = -nilaiB / bagi;
        hitung1.innerHTML= "Nilai x1 adalah " + x1;
        hitung2.innerHTML= "Nilai x2 adalah " + x1;
    }
    else {
        hitung1.innerHTML= "Nilai x1 dan x2 adalah imajiner";
        hitung2.innerHTML= "";
    }
})

