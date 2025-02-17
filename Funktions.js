function displayGreeting() {
    const greetingElement = document.getElementById('greeting');
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = 'Good morning!';
    } else if (hours < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    greetingElement.textContent = greeting;
}

function searchProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const productCards = document.getElementsByClassName('product-card');

    for (let i = 0; i < productCards.length; i++) {
        const productName = productCards[i].getElementsByTagName('h2')[0].textContent.toLowerCase();
        if (productName.includes(searchInput)) {
            productCards[i].style.display = 'block';
        } else {
            productCards[i].style.display = 'none';
        }
    }
}

document.getElementById('search-button').addEventListener('click', searchProducts);

window.onload = displayGreeting;

let currentSlide = 0;