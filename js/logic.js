const faders=document.querySelectorAll('.fade-up, .fade-left, .fade-right');

window.addEventListener('scroll',()=>{
    faders.forEach(fader=>{
        const rect=fader.getBoundingClientRect();

        if(rect.top < window.innerHeight - 100){
            fader.style.opacity='1';
            fader.style.transform='translate(0,0)';
        }
    });
});