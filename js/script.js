const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', function() {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('burger-active')
    document.body.classList.toggle('stop__scroll')
});

// Modal window
const callFormBtn = document.getElementById('call-form');
const modalCallForm = document.getElementById('modal-call-form');

//Open the moadal window 
callFormBtn.addEventListener('click', function() {
    modalCallForm.classList.add('modal-parent--open')
})

// Close the modal window
modalCallForm.querySelector('.modal').addEventListener('click', function(event) {
    event._isClick = true
})
modalCallForm.addEventListener('click', function(event) {
    if (event._isClick === true) return
    modalCallForm.classList.remove('modal-parent--open')
})

//Close when pressing Esc
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        modalCallForm.classList.remove('modal-parent--open')
    }
})



