if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
document.querySelector('.index-card').addEventListener('click', function(){
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
    window.scroll(
        { top: document.querySelector('.content-start').getBoundingClientRect().y + window.scrollY, 
        left: 0, 
        behavior: 'smooth' });
});

document.querySelectorAll('.nav-button')[0].addEventListener('click', function(){
    window.scroll(
        { top: document.querySelector('.gallery-start').getBoundingClientRect().y + window.scrollY - document.querySelector('.nav-buttons-container').getBoundingClientRect().height, 
        left: 0, 
        behavior: 'smooth' });
});

document.querySelectorAll('.nav-button')[1].addEventListener('click', function(){
    window.scroll(
        { top: document.querySelector('.about-start').getBoundingClientRect().y + window.scrollY - document.querySelector('.nav-buttons-container').getBoundingClientRect().height, 
        left: 0, 
        behavior: 'smooth' });
});

let galleryItems = document.querySelectorAll('.gallery-item');

for(let i = 0; i < galleryItems.length; i++){
    galleryItems[i].addEventListener('click', function(){
        if(galleryItems[i].querySelector('.gallery-item-description').classList.contains('gallery-item-description-visible')){
            galleryItems[i].querySelector('.gallery-item-description').classList.remove('gallery-item-description-visible');
        } else {
            galleryItems[i].querySelector('.gallery-item-description').classList.add('gallery-item-description-visible');
            
        }
    });

    galleryItems[i].addEventListener('dblclick', function(){
        if(galleryItems[i].classList.contains('gallery-item-detailed')) {
            galleryItems[i].classList.remove('gallery-item-detailed');
        } else {
            galleryItems[i].classList.add('gallery-item-detailed');
        }
    });

    galleryItems[i].addEventListener('transitionend', function(e){
        if(e.propertyName == 'height' || e.propertyName == 'width'){
            window.scroll(
                { top:  galleryItems[i].getBoundingClientRect().y + window.scrollY - document.querySelector('.nav-buttons-container').getBoundingClientRect().height, 
                left: 0, 
                behavior: 'smooth' });
        }
    });
}