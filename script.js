const grid = document.querySelector('.grid');

for (let i = 1; i <= 70; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    const img = document.createElement('img');
    img.src = `images/${i}.webp`;
    img.alt = `Image ${i}`;
    gridItem.appendChild(img);
    grid.appendChild(gridItem);
}

imagesLoaded(grid, function() {
    new Masonry(grid, {
        itemSelector: '.grid-item'
    });
});
