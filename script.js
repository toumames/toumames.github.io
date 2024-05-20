let clickCount = 0;

document.getElementById('cookie').addEventListener('click', function() {
    clickCount++;
    const titleElement = document.getElementById('title');
    titleElement.textContent = `Clicks: ${clickCount}`;

    const smallCookie = document.createElement('img');
    smallCookie.src = 'cookie.png';
    smallCookie.className = 'small-cookie';
    smallCookie.style.top = `${Math.random() * 100}px`;
    smallCookie.style.left = `${Math.random() * 100}px`;
    document.querySelector('.cookie-container').appendChild(smallCookie);

    setTimeout(() => {
        smallCookie.remove();
    }, 1000);
});