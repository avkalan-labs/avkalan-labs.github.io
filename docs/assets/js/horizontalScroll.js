document.addEventListener("DOMContentLoaded", function () {
  const leftArrow = document.querySelector(".blog-left-arrow");
  const rightArrow = document.querySelector(".blog-right-arrow");
  const blogPosts = document.querySelector(".blog-posts");

  // Scroll by a set amount (adjust as needed)
  const scrollAmount = 300; // You can adjust this value

  // Scroll right
  rightArrow.addEventListener("click", () => {
    blogPosts.scrollBy({
      top: 0,
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  // Scroll left
  leftArrow.addEventListener("click", () => {
    blogPosts.scrollBy({
      top: 0,
      left: -scrollAmount,
      behavior: "smooth",
    });
  });
});