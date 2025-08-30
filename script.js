
const galleryContainer = document.getElementById('galleryContainer');
function loadImages() {
    let i = 0;
    setInterval(() => {
        let img = document.createElement('img');
        img.src = `https://picsum.photos/300/200?random=${i++}`;
        galleryContainer.appendChild(img);
        galleryContainer.scrollLeft += 5;
    }, 1000);
}
loadImages();
