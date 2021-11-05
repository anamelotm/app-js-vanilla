const transactionsUl = document.querySelector('#transactions');
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount = document.querySelector('#amount');

//objeto literal ficticio
let dummyTransactions = [
    {id: 1, name: 'Bolo de brigadeiro', amount: -20},
    {id: 2, name: 'Salario', amount: 300},
    {id: 3, name: 'Torta de frango', amount: -10},
    {id: 4, name: 'Violão', amount: 150}
]

const addTransactionArray = (transactionName, transactionAmount) => {
    dummyTransactions.push({
        id: 123, 
        name: transactionName.value, 
        amount: transactionAmount.value});
}

const handleFormSubmit = event => {
    event.preventDefault();
    if(inputTransactionName.value.trim() === '' 
        || inputTransactionAmount.value.trim() === ''){
        alert('Informe o nome e o valor da transação');
            
        return;
    } 

    addTransactionArray(inputTransactionName, inputTransactionAmount);
    init();
} 

form.addEventListener("submit", handleFormSubmit);

const addTransactionsIntoDOM = (transaction) => {
    const li = document.createElement('li');
    li.innerHTML = `${transaction.name}`;
    //atribuindo um nó para o li
    transactionsUl.appendChild(li);
}

//metodo que ira separar os valores de total, receitas e despesas
const updateBalanceValues = () => {

    //pega todos os valores amount de cada linha do array
    const transactionAmounts = dummyTransactions.map(({ amount }) => amount)
    console.log(transactionAmounts);

    //totalizador
    const total = transactionAmounts.reduce((accumulator, transaction) => accumulator + transaction,0);
    console.log('Soma dos valores: ' + total);

    const income = transactionAmounts.filter(value => value > 0).reduce((accumulator, transaction) => accumulator + transaction, 0);
    console.log('Somente os valores positivos ' + income);

    const expense = transactionAmounts.filter(value => value < 0).reduce((accumulator, transaction) => accumulator + transaction,0);
    console.log('Some os valores negativos: '+ expense);
}

updateBalanceValues();
const init = () => {
    //aqui iremos fazer um tratamento a nivel de codigo para nao submeter toda a lista novamente
    transactionsUl.innerHTML = '';
    dummyTransactions.forEach(addTransactionsIntoDOM)
}

// funcao de inicializacao do js
init();