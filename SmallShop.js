function smallShop (input) { 
let product = input.shift();
let city = input.shift();
let quantity = Number(input.shift());
let price = 0;

    switch (city) {
        case `Sofia`: {
            if (product === `coffee`) {
                price = quantity * 0.50;
            } else if (product === `water`) {
                price = quantity * 0.80;
            } else if (product === `beer`) {
                price = quantity * 1.20;
            } else if (product === `sweets`) {
                price = quantity * 1.45; 
            } else  (product === `peanuts`) 
                price = quantity * 1.60;

        }; break;
        case `Plovdiv`: {
            if (product === `coffee`) {
                price = quantity * 0.40;
            } else if (product === `water`) {
                price = quantity * 0.70
            } else if (product === `beer`) {
                price = quantity * 1.15
            } else if (product === `sweets`) {
                price = quantity * 1.30
            } else (product === `peanuts`)
                price =quantity * 1.50

        };break; 
        case `Varna`: { 
            if (product === `coffee`) {
                price = quantity * 0.45
            } else if (product === `water`) {
                price = quantity * 0.70
            } else if (product === `beer`) {
                price = quantity * 1.10
            } else if (product === `sweets`) {
                price = quantity * 1.35
            } else (product === `peanuts`)
                price = quantity * 1.55

        }; break; 
         
    } 
console.log(price)
}

smallShop([
   `water`,
   `Plovdiv`,
    `3`
    
])