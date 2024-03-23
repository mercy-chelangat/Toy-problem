let basicSalary = 52000;
let benefits=5000;
let grossSalary = Math.floor (basicSalary + benefits);

let payee = 0;
let nhif = 0;
let nssf = Math.floor (grossSalary * 0.05);
let netSalary = 0;

console.log ("grossSalary:" + grossSalary);
console.log ("nssf:" + nssf);

function calc(){
    if (basicSalary < 24000){
        payee = basicSalary * 0.01;
    } else if (basicSalary < 32333){
        payee = basicSalary * 0.25;
    } else {
        payee = basicSalary * 0.3;
    }
    console.log ("payee:" + payee);

}

function nhifDeductions(){
    if (grossSalary <= 5999){
        nhif = 150;
    } else if (grossSalary >= 5999 && grossSalary <= 7999){
        nhif =300;
    } else if (grossSalary >= 7999 && grossSalary <= 11999){
        nhif = 400;

    }else if (grossSalary >= 11999 && grossSalary <= 14999){
        nhif = 500;
    }else if (grossSalary >= 14999 && grossSalary <= 19999){
        nhif = 600;
    }else if (grossSalary >= 19999 && grossSalary <= 24999){
        nhif = 750;
    }else if (grossSalary >= 24999 && grossSalary <= 29999){
        nhif = 850;
    } else if (grossSalary >= 29999 && grossSalary <= 34999){
        nhif = 900;
    } else if (grossSalary >= 34999 && grossSalary <= 39999){
        nhif = 950;
    }else if (grossSalary >= 39999  && grossSalary <= 44999){
        nhif = 1000;
    }else if (grossSalary >= 44999 && grossSalary <= 49999){
        nhif =1100;
    }else if (grossSalary >= 49999 && grossSalary <= 59999){
        nhif = 1200;
    }else if (grossSalary >= 59999 && grossSalary <=69999){
        nhif = 1300;
    }else if (grossSalary >= 69999 && grossSalary <=79999){
        nhif = 1400;
    } else if (grossSalary >= 79999 && grossSalary <=89999){
        nhif = 1500;
    }else if (grossSalary >= 89999 && grossSalary <= 99999){
        nhif = 1600;
    }else if (grossSalary >= 99999 ){
        nhif = 1700;
    }


    console.log ("nhif:" + nhif);


}


function calcNetSalary(){
    netSalary = Math.floor(grossSalary - (payee + nhif + nssf));


    console.log ("netSalary:" + netSalary);
}

calc();

nhifDeductions();

calcNetSalary();

