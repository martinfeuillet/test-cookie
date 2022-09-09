let button = document.querySelector('.clicknow');
let button2 = document.querySelector('.clicknow2');

// check if cookie exists



button.addEventListener('click', function() {
    document.cookie='ingenius-popup = true; expires = 50';
})

button2.addEventListener('click', function() {
    if (document.cookie.indexOf('ingenius-popup') >= 0) {
        alert('cookie exists');
    }
})

// if cookie exists, hide popupgi and advance a lot on this branch
