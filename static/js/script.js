console.log('This is my client side JavaScript');


window.onload = function () {
    console.log('loaded typed.js');
    let typed = new Typed('#typed', {
        strings: ['Welcome to codewitharka', 'Learn Web Development', 'Android Development', 'Learn Java', 'Data Science', 'And do many awesome projects with me !!!'], 
        backSpeed: 15,
        smartBackspace: true,
        backDelay: 1200,
        startDelay: 1000,
        typeSpeed: 25,
        loop: true
    })
}