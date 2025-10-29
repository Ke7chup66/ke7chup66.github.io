document.addEventListener('DOMContentLoaded',function(){
    const bannerSubtitle = document.querySelector('#banner-subtitle');

    const texts = [
        "MAY THE PEACE BE WITH US",
        "任尔逆流万千苦,坚持无悔意无休",
        "专注自己,世界便鸦雀无声",
        "一群打算上太空的疯子,我觉得还挺酷的"
    ];

    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typeSpeed = 50;
    let deleteSpeed = 35;

    function typeWrite () {

        const currentText = texts[currentTextIndex];

        if (!isDeleting) {
            bannerSubtitle.innerHTML ='"' + currentText.substring(0, currentCharIndex) + '"';
            currentCharIndex++;
            if (currentCharIndex > currentText.length) {
                isDeleting = true;
                setTimeout(typeWrite, 1500);
                return;
            }
        }else {
            bannerSubtitle.innerHTML ='"' + currentText.substring(0, currentCharIndex) + '"';
            currentCharIndex--;

            if (currentCharIndex < 0) {
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                isDeleting = false;
            }
        }
        let delay = isDeleting ? deleteSpeed : typeSpeed;
        setTimeout(typeWrite, delay);
    }

    setTimeout(typeWrite, 1500);

})