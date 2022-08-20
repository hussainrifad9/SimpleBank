document.getElementById('deposite').addEventListener('click', function(){
    const deposite = document.getElementById('deposite-money');
    const CurrentdepositeAmount = parseInt(deposite.value); 
    
    // last deposite
    const lastDeposit = document.getElementById('last-deposite');
    const depositeTotal =(parseInt(lastDeposit.innerText)+CurrentdepositeAmount);
    lastDeposit.innerText = (depositeTotal);


    // balance
    const balance = document.getElementById('balance');
    balance.innerText = depositeTotal;

})


document.getElementById('withdraw').addEventListener('click', function(){
    const withdraw = document.getElementById('withdraw-money');
    const withdrawAmount = withdraw.value;

    // last withdraw 

    const lastWithdraw = document.getElementById('last-withdraw');
    lastWithdraw.innerText = withdrawAmount;

    const Currentbalance = document.getElementById('balance');
    Currentbalance.innerText = balance.innerText-lastWithdraw.innerText ;
})

