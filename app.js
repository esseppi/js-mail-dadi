const accounts = ["ciao@gmail.com", "william@gmail.com", "yoyo@gmail.com", "basta@gmail.com", "bella@gmail.com"]
let email = document.getElementById('email');
let main = document.querySelector('main');
let div = document.createElement('div');
main.append(div)
let button = document.querySelector('.mailbut');

button.addEventListener('click', function() {
    let check = false;
    let loginAcc = email.value.toLowerCase();
    for (let i = 0; i < accounts.length; i++) {
        let element = accounts[i].toLowerCase();
        if (element == loginAcc) {
            check = true;
        } 
    }
    if (check == true) {
        div.innerHTML = 'Sei registrato';  
    } else {
        div.innerHTML = 'Non sei registrato';
    }
});






let tiraDado = document.querySelector('.player1 button')
let vincitore = document.querySelector('.vincitore')
let result1 = document.querySelector('.r1')
let result2 = document.querySelector('.r2')


tiraDado.addEventListener('click', function() {
    let risultato1 = Math.round(Math.random() * 5 + 1);
   result1.innerHTML = risultato1;
   let risultato2 = Math.round(Math.random() * 5 + 1);
   result2.innerHTML = risultato2;
   if (risultato1 == risultato2) {
    vincitore.innerHTML ='I giocatori hanno pareggiato'
   } else if (risultato1 > risultato2) {
    vincitore.innerHTML ='Giocatore 1 vince';
   } else {
       vincitore.innerHTML ='Computer vince'
   }
});
