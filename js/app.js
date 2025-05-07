document.addEventListener('DOMContentLoaded', () => {
    const coffeeItems = document.querySelectorAll('.coffee-item');
    const coffeeDetail = document.getElementById('coffee-detail');
    const detailName = document.getElementById('detail-name');
    const detailDescription = document.getElementById('detail-description');

    coffeeItems.forEach(item => {
        item.addEventListener('click', () => {
            const name = item.getAttribute('data-name');
            const description = item.getAttribute('data-description');

            detailName.textContent = name;
            detailDescription.textContent = description;

            coffeeDetail.classList.remove('hidden');
        });
    });
});