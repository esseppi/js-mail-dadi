const accounts = ["ciao@gmail.com", "william@gmail.com", "yoyo@gmail.com", "basta@gmail.com", "bella@gmail.com"]
let email = document.getElementById('email');
let main = document.querySelector('main');
let div = document.createElement('div');
let button = document.querySelector('button');



button.addEventListener('click', function() {
    let loginAcc = email.value;
    console.log(loginAcc)
    for (let i = 0; i < accounts.length; i++) {
        const element = accounts[i].toLowerCase();
        console.log(element)
        if (loginAcc !== element) {
          main.append(div)
          div.innerHTML = "Non sei un utente registrato!"
        } else {
            main.append(div)
            div.innerHTML =  "SEI GIA' REGISTRATO!"
        }   
    }

});
