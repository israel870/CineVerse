document.querySelector('.fa-bars').addEventListener('click', () => {

    document.querySelector('.menu').classList.remove('close')
    document.querySelector('.menu').classList.add('open')

})

document.querySelector('.fa-xmark').addEventListener('click', () => {

    document.querySelector('.menu').classList.add('close')
    document.querySelector('.menu').classList.close('open')

})

// Search Pop-up

document.querySelector('.open-popup').addEventListener('click', () => {

    document.querySelector('.search-popup').classList.add('open')
    document.querySelector('.search-popup').classList.remove('close')

})

document.querySelector('.close-popup').addEventListener('click', () => {

    document.querySelector('.search-popup').classList.remove('open')
    document.querySelector('.search-popup').classList.add('close')

})
