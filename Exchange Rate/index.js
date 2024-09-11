const currency_one = document.getElementById("currency-one");
const currency_two = document.getElementById("currency-two");

const amount_one = document.getElementById("amount-one");
const amount_two = document.getElementById("amount-two");

const swap = document.getElementById("btn");
const rateText = document.getElementById("rate");

currency_one.addEventListener('change', calculateMoney);
currency_two.addEventListener('change', calculateMoney);
amount_one.addEventListener('input', calculateMoney);
amount_two.addEventListener('input', calculateMoney);

function calculateMoney(){
    const one = currency_one.value;
    const two = currency_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/5d822825c01658a16e5eaacc/latest/${one}`)
    .then(res=>res.json()).then(data=>{
        const rate = data.conversion_rates[two];
        rateText.innerText = `1 ${one} = ${rate} ${two}`;

        amount_two.value = (amount_one.value * rate).toFixed(2);
    })
}

swap.addEventListener('click', function(){
    const temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;

    calculateMoney();
});

calculateMoney();