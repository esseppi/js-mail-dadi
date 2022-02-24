const accounts = ["Ciao@gmail.com", "william@gmail.com", "yoyo@gmail.com", "basta@gmail.com", "bella@gmail.com"]
let main = document.querySelector('main')
let div = document.createElement('div')

// const email = document.getElementById(email).toLowerCase()
const email = accounts[1]


for (let i = 0; i < accounts.length; i++) {
    const element = accounts[i].toLowerCase();
    console.log(element)

    if (email !== element) {
      main.append(div)
      div.innerHTML = "Non sei un utente registrato!"
    } else {
        main.append(div)
        div.innerHTML =  "SEI GIA' REGISTRATO!"
    }   
}