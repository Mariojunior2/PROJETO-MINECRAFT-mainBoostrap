// Initialize Bootstrap Carousel using JavaScript



let isDragging = false;
let startX;
let startScrollLeft;

// Detect start of dragging
carouselElement.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    startScrollLeft = carouselElement.scrollLeft;
    e.preventDefault(); // Prevent text selection
});

// Handle dragging
carouselElement.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX - startX;
    carouselElement.scrollLeft = startScrollLeft - x;
    e.preventDefault();
});

// Stop dragging
carouselElement.addEventListener('mouseup', () => {
    isDragging = false;
});

carouselElement.addEventListener('mouseleave', () => {
    isDragging = false;
});

// Optional: Disable autoplay when hovering over the carousel
carouselElement.addEventListener('mouseenter', () => {
    bootstrapCarousel.pause();
});

carouselElement.addEventListener('mouseleave', () => {
    bootstrapCarousel.cycle();
});
