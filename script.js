document.addEventListener("DOMContentLoaded",function(){
    const bgmComponent = document.getElementById('bgmComponent');
    const bgm = document.getElementById('BGM');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    bgm.volume = 0.5;
    let isPlaying = false;

    bgmComponent.addEventListener('click',function(){
        if (!isPlaying) {
            bgm.play();
            bgmComponent.classList.remove('nav-component-bgm');
            bgmComponent.classList.add('bgm-component-active');
        }else{
            bgm.pause();
            bgmComponent.classList.remove('bgm-component-active');
            bgmComponent.classList.add('nav-component-bgm');
        }
        isPlaying = !isPlaying
    });

    hamburger.addEventListener('click',function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    })

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');

            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            n.classList.add('active');
        }));
});