// Sparkle effect.
// Creates 40 sparkle divs with random positions, sizes, and animation durations.
// I essentially just moved the sparkle effect code here for better organization.

for (let i=0; i<40; i++)
{
    let sparkle=document.createElement('div');
    sparkle.className='sparkle';
    sparkle.style.left=Math.random()*100+'%';
    sparkle.style.top=Math.random()*100+'%';
    sparkle.style.width=Math.random()*4+2+'px';
    sparkle.style.height=Math.random()*4+2+'px';
    sparkle.style.animationDuration=(2+Math.random()*3)+'s';
    document.body.appendChild(sparkle);
}