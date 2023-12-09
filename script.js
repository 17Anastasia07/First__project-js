let modal = document.querySelector('.modalka')
let buttonForm = document.querySelector('.save__button')

buttonForm.addEventListener('click', function(){
    if(modal.className === 'modalka'){
        modal.classList.add('active')
    }
    else{
        modal.classList.remove('active')
    }
})

let buttonForma = document.querySelector('.btn-close')

buttonForma.addEventListener('click', function(){
    if(modal.className === 'modalka'){
        modal.classList.add('active')
    }
    else{
        modal.classList.remove('active')
    }
})

let tExtVal = sessionStorage.getItem('tExtVal')
document.querySelector('.header__name').innerHTML = tExtVal

let myName = document.querySelector('.myname__card')
let myNameinput = document.querySelector('.my__name')
myNameinput.addEventListener('input', function() {
    let myNamevalue = myNameinput.value
    myName.innerHTML = myNamevalue
})

let mysurName = document.querySelector('.mysurname__card')
let mysurNameinput = document.querySelector('.my__surname')
mysurNameinput.addEventListener('input', function() {
    let mysurNamevalue = mysurNameinput.value
    mysurName.innerHTML = mysurNamevalue
})

let dAte = document.querySelector('.data')
let dAteinput = document.querySelector('.my__data')
dAteinput.addEventListener('input', function() {
    let dAtevalue = dAteinput.value
    dAte.innerHTML = dAtevalue
})

let myCVV = document.querySelector('.CVV')
let myCVVinput = document.querySelector('.CVV__r')
myCVVinput.addEventListener('click', function() {
    myCVVrandom = Math.floor(Math.random() * (899 - 100))+ 100
    myCVV.innerHTML = myCVVrandom 
})

let nUm1 = document.querySelector('.numb_1')
let nUm1input = document.querySelector('.number__kn')
nUm1input.addEventListener('click', function() {
    nUm1random = Math.floor(Math.random() * (8999 - 1000))+ 1000
    nUm1.innerHTML = nUm1random
})

let nUm2 = document.querySelector('.numb_2')
let nUm2input = document.querySelector('.number__kn')
nUm2input.addEventListener('click', function() {
    nUm2random = Math.floor(Math.random() * (8999 - 1000))+ 1000
    nUm2.innerHTML = nUm2random
})

let nUm3 = document.querySelector('.numb_3')
let nUm3input = document.querySelector('.number__kn')
nUm3input.addEventListener('click', function() {
    nUm3random = Math.floor(Math.random() * (8999 - 1000))+ 1000
    nUm3.innerHTML = nUm3random
})

let nUm4 = document.querySelector('.numb_4')
let nUm4input = document.querySelector('.number__kn')
nUm4input.addEventListener('click', function() {
    nUm4random = Math.floor(Math.random() * (8999 - 1000))+ 1000
    nUm4.innerHTML = nUm4random
})

let bUTton = document.querySelector('.header__but')
bUTton.addEventListener('click', function() {
    window.location.href = './index-login.html'
})


window.addEventListener('scroll', function(){
    let hIde = document.querySelector('.hide')
    if(scrollY > 50) {
        hIde.classList.add('block')
    }
    else {
        hIde.classList.remove('block')
    }
})



