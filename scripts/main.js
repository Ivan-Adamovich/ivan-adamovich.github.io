window.addEventListener('DOMContentLoaded', () => {
   
    const openMenuBtn = document.querySelector('#open_menu');
    const closeMenuBtn = document.querySelector('#close_menu');
    const menu = document.querySelector('#drop_menu');
    const menuLinks = document.querySelectorAll('.menu_item');
    
    openMenuBtn.addEventListener('click', menuShow);
    closeMenuBtn.addEventListener('click', menuClose);
   
    menuLinks.forEach(linck => {
        linck.addEventListener('click', menuClose);
    });

    function menuShow(){
        menu.style.opacity = '1';
        menu.style.zIndex = '1000';
        menuLinks.forEach(link => {
            link.style.display = 'block'
        });
        openMenuBtn.style.display = 'none';
        closeMenuBtn.style.display = 'block';
    }

    function menuClose(){
        menu.style.opacity = '0';
        menu.style.zIndex = '-1000';
        setTimeout(() => {
            menuLinks.forEach(link => {
                link.style.display = 'none'
            });
        }, 200)
        openMenuBtn.style.display = 'block';
        closeMenuBtn.style.display = 'none';
    }

    const images = document.querySelectorAll('.my_photo');
    const sliderLine = document.querySelector('.slider_line');
    let count = 0;
    let width;

    function init() {
        width = document.querySelector('.slider').offsetWidth;
        sliderLine.style.width = width * images.length + 'px';
        images.forEach(img => {
            img.style.width = width + 'px';
            img.style.hight = 'auto';
        })
        rollSlider();
    };

    init();

    window.addEventListener('resize', init);

    document.querySelector('#prev').addEventListener('click', () => {
        count--;
        if(count < 0){
            count = images.length - 1;
        }
        rollSlider();
    });

    document.querySelector('#next').addEventListener('click', () => {
        count++;
        if(count >= images.length){
            count = 0;
        }
        rollSlider();
    });

    function rollSlider(){
        sliderLine.style.transform = 'translate(-'+count * width+'px';
    };

    const anchors = document.querySelectorAll('a[href*="#"]');
    for(let anchor of anchors){
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            const blockID = anchor.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        })
    }

    const btnUp = document.querySelector('.btn_up');

    window.onscroll = () => {
        if(window.scrollY > 400){
            btnUp.style.opacity = '1';
            btnUp.style.zIndex = '1000';
        } else {
            btnUp.style.opacity = '0';
            btnUp.style.zIndex = '-1000';
        }
    }

})
