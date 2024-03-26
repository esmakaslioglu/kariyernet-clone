let currentIndex = 1;
const maxIndex = 3; // Toplam resim sayısı

function changeImage(step) {
    currentIndex += step;
    if (currentIndex < 1) {
        currentIndex = maxIndex;
    } else if (currentIndex > maxIndex) {
        currentIndex = 1;
    }
    document.getElementById('image').src = 'images/image' + currentIndex + '.jpg';
}
function scrollCards(direction) {
    const container = document.querySelector('.cards');
    const cardWidth = document.querySelector('.firma-card').offsetWidth + 10; // Width of card plus margin
    const scrollAmount = direction * (cardWidth * 2); // Scroll two cards at a time

    container.scrollLeft += scrollAmount;
}