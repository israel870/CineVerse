document.querySelector('.fa-bars').addEventListener('click', () => {

    document.querySelector('.menu').classList.remove('close')
    document.querySelector('.menu').classList.add('open')

})

document.querySelector('.fa-xmark').addEventListener('click', () => {

    document.querySelector('.menu').classList.add('close')
    document.querySelector('.menu').classList.close('open')

})