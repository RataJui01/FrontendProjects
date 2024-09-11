let balance = document.getElementById('balance');
let money_plus = document.getElementById('money-plus');
let money_minus = document.getElementById('money-minus');
let list = document.getElementById('list');
let form = document.getElementById('form');
let text = document.getElementById('text');
let amount = document.getElementById('amount');  

let transaction = [];

function init(){
    list.innerHTML = '';
    transaction.forEach(addDataToList);
    calculateMoney();
}

function addDataToList(transaction){
    const symbol = transaction.amount < 0 ? '-' : '+';
    const status = transaction.amount < 0 ? 'minus' : 'plus';
    const item = document.createElement('li');
    item.classList.add(status);
    item.innerHTML = `${transaction.text}<span>${symbol}${formatNumberWithCommas(Math.abs(transaction.amount))}</span><button class="delete-btn" onclick="removeData(${transaction.id})">X</button>`;
    list.appendChild(item);
}

function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

function calculateMoney(){
    const amounts = transaction.map(transaction => transaction.amount);
    const total = amounts.reduce((result, item) => (result += item),0).toFixed(2);  //Calculate Balance
    const income = amounts.filter(item => item > 0).reduce((result, item) => (result += item),0).toFixed(2);  //Calculate income by filter items in amounts
    const expense = (amounts.filter(item => item < 0).reduce((result, item) => (result += item),0)*-1).toFixed(2);  //Calculate income by filter items in amounts
    balance.innerText = `฿` + formatNumberWithCommas(total);
    money_plus.innerText = `฿`  + formatNumberWithCommas(income);
    money_minus.innerText = `฿` + formatNumberWithCommas(expense);
}

function generateID(){
    return Math.floor(Math.random() * 1000000);
}

function removeData(id){
    transaction = transaction.filter(transaction => transaction.id !== id);
    init();
}

function addTransaction(transactionInfo){
    transactionInfo.preventDefault();
    if(text.value.trim() === '' || amount.value.trim() === ''){
        alert("Please fill in complete information.");
    }else{
        const newTransaction = {
            id:generateID(),
            text:text.value,
            amount:+amount.value
        }
        transaction.push(newTransaction);
        addDataToList(newTransaction);
        calculateMoney();
        text.value = '';
        amount.value = '';
    }
}


form.addEventListener('submit',addTransaction);
init();