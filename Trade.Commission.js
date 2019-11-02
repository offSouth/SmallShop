function solve(input) { 
let city = input.shift();
let sales = Number(input.shift());
let commission = -1;

    if ( city === `Sofia`) { 
        if (sales >= 0 && sales <= 500 ) {
            commission = sales * 0.05;
        } else if (sales > 500 && sales <= 1000) { 
            commission = sales * 0.07;
        } else if (sales > 1000 && sales <= 10000) {
            commission = sales * 0.08;
        } else if (sales > 10000) {
            commission = sales * 0.12;
        }
        console.log(`${commission.toFixed(2)}`)
    } else if (city ===`Varna`) { 
        if (sales >= 0 && sales <= 500 ) {
            commission = sales * 0.045;
        } else if (sales > 500 && sales <= 1000) { 
            commission = sales * 0.075;
        } else if (sales > 1000 && sales <= 10000) {
            commission = sales * 0.10;
        } else if (sales > 10000) {
            commission = sales * 0.13;
        }  
        console.log(`${commission.toFixed(2)}`)
    } else if (city ===`Plovdiv`) { 
        if (sales >= 0 && sales <= 500 ) {
            commission = sales * 0.055;
        } else if (sales > 500 && sales <= 1000) { 
            commission = sales * 0.08;
        } else if (sales > 1000 && sales <= 10000) {
            commission = sales * 0.12;
        } else if (sales > 10000) {
            commission = sales * 0.145;
        }
        console.log(`${commission.toFixed(2)}`)
    } else { 
        console.log(`error`)
    }

}

solve([`Sofia`, 1500])