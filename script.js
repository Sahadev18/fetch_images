document.addEventListener("DOMContentLoaded", function() {
    fetch('images.json')
    .then(response => response.json())
    .then(data => {
        const imageContainer = document.getElementById('image-container');
        data.forEach(imageObj => {
            const imgElement = document.createElement('img');
            imgElement.src = imageObj.img;
            imgElement.alt = 'Image';
            imgElement.loading = 'lazy';
            imageContainer.appendChild(imgElement);
        });
    })
    .catch(error => console.error('Error fetching images:', error));
});
