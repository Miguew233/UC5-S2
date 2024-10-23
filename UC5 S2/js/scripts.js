let currentIndex = 0;
const items = document.querySelectorAll('.promocoes-item');
const totalItems = items.length;

function showItem(index) {
    const container = document.querySelector('.promocoes-container');
    const offset = -index * 100;
    container.style.transform = `translateX(${offset}%)`;
}

document.querySelector('.next-button').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    console.log('Next Index:', currentIndex);
    showItem(currentIndex);
});

document.querySelector('.prev-button').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    console.log('Prev Index:', currentIndex);
    showItem(currentIndex);
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
}, 5000);