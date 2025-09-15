document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".progress-circle");
  circles.forEach(circle => {
    const rate = circle.dataset.rate;
    const deg = rate * 3.6; // 1% = 3.6 degrees
    const fill = circle.querySelector(".fill");
    fill.style.transform = `rotate(${deg}deg)`;
  });
});
