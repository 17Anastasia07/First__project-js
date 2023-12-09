let bUTton = document.querySelector('.form__but')

bUTton.addEventListener("click", function() {

    
    let eMail = document.querySelector('.email')
    let tExt = document.querySelector('.username')
    let PAss = document.querySelector('.parol')
    let TELl = document.querySelector('.tel')
    

    let eMailVal = eMail.value;
    let tExtVal = tExt.value;
    let PAssVal = PAss.value;
    let TELlVal = TELl.value;
    
    if(tExtVal.length === 0) {
        /* alert('You wrote the wrong username. Check it please') */
        let modaL = document.querySelector('.form__modal-4')
        modaL.classList.add('o')
        setTimeout(function() {
            modaL.classList.remove('o')
        }, 5000)
        return;
    }
    else if (eMailVal.length < 5 && !eMailVal.includes("@") && !eMailVal.includes(".")) {
        /* alert('You wrote the wrong email. Check it please') */
        let mOdal = document.querySelector('.form__modal-1')
        mOdal.classList.add('oppa')
        setTimeout(function() {
            mOdal.classList.remove('oppa')
        }, 5000)
        return;
    }
    else if (PAssVal.length < 7) {
        /* alert('You wrote the wrong password. Check it please') */
        let moDal = document.querySelector('.form__modal-2')
        moDal.classList.add('opp')
        setTimeout(function() {
            moDal.classList.remove('opp')
        }, 5000)
        return;
    }
    else if(TELlVal.length !== 13 && !TELlVal.includes('+')) {
        /* alert('You wrote the wrong phone number. Check it please') */
        let modAl = document.querySelector('.form__modal-3')
        modAl.classList.add('op')
        setTimeout(function() {
            modAl.classList.remove('op')
        }, 5000)
        return;
    }
    else {
        sessionStorage.setItem('tExtVal', tExtVal)
        window.location.href = './index.html'
    }
})

