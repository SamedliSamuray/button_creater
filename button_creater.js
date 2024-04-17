let btn=document.querySelector('#btn');

btn.addEventListener('click',()=>{
    let fly_btn = document.createElement('button');
    fly_btn.textContent = 'I am flying...!'
    document.body.append(fly_btn);
    fly_btn.classList.add('fly_btn');
    let r = Math.round(Math.random()*256);
    let g = Math.round(Math.random()*256);
    let b = Math.round(Math.random()*256);
    fly_btn.style.color = `rgb(${r},${g},${b})`;
    setInterval(function(){fly_btn.style.opacity = 0;}, 200);
    setInterval(function(){ fly_btn.style.bottom = '900px'}, 0);
    setTimeout(function(){fly_btn.remove()}, 3000)
})

