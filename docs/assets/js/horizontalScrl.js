document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.querySelector('.prev-slide');
    const rightArrow = document.querySelector('.next-slide');
    const blogPosts = document.querySelector('.slider');

    // Scroll by a set amount (adjust as needed)
    const scrollAmount = 420; // You can adjust this value

    // Scroll right
    rightArrow.addEventListener('click', () => {
      blogPosts.scrollBy({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
      });
    });

    // Scroll left
    leftArrow.addEventListener('click', () => {
      blogPosts.scrollBy({
        top: 0,
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });
  });