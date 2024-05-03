"use strict";
{
    let mouseMove = 0;
    document.addEventListener('mousemove', event => {
        mouseMove += Math.abs(event.movementX) + Math.abs(event.movementY);
        if (mouseMove < 200) return;
        mouseMove = 0;
        let time = 800 + Math.random() * 400;
        let cookie = document.createElement("span");
        cookie.innerText = ['🍪','🍪','🍪','🍪','🍪','🍪','🍪','🍪','🍌','🍫'][Math.floor(Math.random() * 10)];
        cookie.classList.add('cookie');
        cookie.style.position = 'absolute';
        cookie.style.userSelect = 'none';
        cookie.style.pointerEvents = 'none';
        cookie.style.left = event.pageX + "px";
        cookie.style.top = event.pageY + "px";
        cookie.style.opacity = 1;
        cookie.style.transition = `opacity ${time}ms ease, transform ${time}ms ease`;
        cookie.style.transform = "translate(0, 0)";
        document.body.appendChild(cookie);
        getComputedStyle(cookie).transform; // force reflow
        cookie.style.opacity = 0;
        cookie.style.transform = `translate(${Math.random()*40-20}px, 120px)`;
        setTimeout(() => {
            document.body.removeChild(cookie);
        }, time);
    });
}
