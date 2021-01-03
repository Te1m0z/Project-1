window.addEventListener('load', function(){
    console.log('DOM дерево полностью построено:', new Date);
    window.scrollY = 0;//сначала стр

    preloader();
    main();
});

function main() {
    navbar();
    home();
    start();
    pick();
    third();
    footer();

    login();
};

function preloader() {

    gsap.to('#preloader-wrap', {
        duration: 0.3,
        display: 'none',
        opacity: 0,
        delay: 4.5,
    });

    setTimeout(() => {
        document.body.style.overflow = 'overlay'
    }, 500);

    var typed = new Typed('#draw-pic-span', {
        strings: [' картинки...', ' шрифты...', ' стили...'],
        typeSpeed: 50,
        backDelay: 300,
        backSpeed: 30,
        loop: true,
        showCursor: false,
      });
};

function navbar(){
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {

        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollTop > 1) {
            navbar.style.setProperty('height', '60px');
            navbar.style.backgroundColor = '#1a3644';
        } else {
            navbar.style.setProperty('height', '134px');
            navbar.style.backgroundColor = 'transparent';
        }
    });

    // gsap.fromTo('.navbar__container', {
    //     opacity: 0,
    // }, {
    //     duration: 2,
    //     opacity: 1,
    //     delay: 5.5,
    // })
};

function home() {

    gsap.fromTo([
        '.home__inner .suptitle .line',
        '.home__inner .suptitle .content',
        '#home__inner--h1',
        '.home__inner .subtitle span',
        '.home__inner .subtitle img'
    ], {
        y: -100,
        opacity: 0,
    }, {
        delay: 4.5,
        y: 0,
        opacity: 1,
        duration: 2,
        ease: 'power3',
    });
};

function start() {

    gsap.fromTo('.start__content', {
        y: 200,
        opacity: 0,
    }, {
        scrollTrigger: {
            trigger: '.start__content',
            start: '-200px 65%',
            end: '-200px 65%',
            toggleActions: 'reverse restart reverse none',
        },
        opacity: 1,
        y: 0,
    });
};

function pick() {

    gsap.fromTo('.pick__content', {
        y: 200,
        opacity: 0,
    }, {
        scrollTrigger: {
            trigger: '.pick__content',
            start: '-200px 65%',
            end: '-200px 65%',
            toggleActions: 'reverse restart reverse none',
        },
        opacity: 1,
        y: 0,
    });
};

function third() {

    gsap.fromTo('.third__content', {
        y: 200,
        opacity: 0,
    }, {
        scrollTrigger: {
            trigger: '.third__content',
            start: '-200px 65%',
            end: '-200px 65%',
            toggleActions: 'reverse restart reverse none',
        },
        opacity: 1,
        y: 0,
    });

};


function footer() {

    gsap.fromTo('.footer', {
        y: 200,
        opacity: 0,
    }, {
        scrollTrigger: {
            trigger: '.footer',
            start: '-200px 65%',
            end: '-200px 65%',
            toggleActions: 'reverse restart reverse none',
        },
        opacity: 1,
        y: 0,
    });

};


function login() {

    const loginWrap = document.getElementById('login-wrap'); //обёртка логина
    const loginButton = document.getElementById('login-div'); //кнопка login
    const loginRegisterButton = document.querySelector('.login-register'); // кнопка регистрация
    const registerWrap = document.getElementById('registry-wrap'); // регистрация попап
    const closeBtn = document.getElementById('register-close-btn'); // кнопка закрытия рег попапа

    loginButton.addEventListener('click', function(e) {
        e.stopPropagation();

        loginWrap.classList.toggle('active'); //смена класса

    });

    loginRegisterButton.addEventListener('click', function() {

        loginWrap.classList.remove('active'); // скрытие логин попапа \/

        registerWrap.style.visibility = 'visible'; //
        registerWrap.style.opacity = 1; //
        document.body.style.overflow = 'hidden'; //

        closeBtn.addEventListener('click', function() { 
            
            registerWrap.style.visibility = 'collapse'; // закрытие регистр попапа
            registerWrap.style.opacity = 0;
            document.body.style.overflow = 'overlay';
        })
    });

    document.addEventListener('click', (e) => {

        let target = e.target;
        let its_loginWrap = target == loginWrap || loginWrap.contains(target);
        let loginIsActive = loginWrap.classList.contains('active');

        if (!its_loginWrap && loginIsActive) {

            loginWrap.classList.remove('active');
        }
    })
};