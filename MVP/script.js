document.addEventListener('DOMContentLoaded', () => {
    showImages('rings'); // Default to showing rings on page load

    document.querySelectorAll('.category-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelectorAll('.category-link').forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
            showImages(event.target.id.split('-')[0]);
        });
    });

    document.getElementById('show-all-necklaces').addEventListener('click', () => {
        showAllImages('necklaces');
    });
});

function showImages(category) {
    const imageDisplay = document.getElementById('image-display');
    const showAllButton = document.getElementById('show-all-necklaces');
    imageDisplay.innerHTML = '';

    let images = [];
    let titles = [];

    switch (category) {
        case 'rings':
            images = ['img/ring/eternityring.avif', 'img/ring/fashionrings.avif', 'img/ring/ringenhancer.avif', 'img/ring/WeddingRings.avif'];
            titles = ['eternityring', 'fashionrings', 'ringenhancer', 'WeddingRings'];
            break;
        case 'earrings':
            images = ['img/earrings/earringjacket.avif', 'img/earrings/fashionearrings.avif', 'img/earrings/hoops.avif', 'img/earrings/stdEarring.webp'];
            titles = ['earringjacket', 'fashionearrings', 'hoops', 'stdEarring'];
            break;
        case 'bracelets':
            images = ['img/bracelets/bangle bracelets.avif', 'img/bracelets/fashion bracelets.webp', 'img/bracelets/new arrivals.avif', 'img/bracelets/tennisbacelets.avif'];
            titles = ['bangle bracelets', 'fashion bracelets', 'new arrivals', 'tennisbacelets'];
            break;
        case 'necklaces':
            images = ['img/necklaces/fashion necklace.avif', 'img/necklaces/fashionpendant.avif', 'img/necklaces/solitaire.avif', 'img/necklaces/tennis necklace.avif'];
            titles = ['fashion necklace', 'fashionpendant', 'solitaire', 'tennis necklace'];
            break;
        default:
            images = [];
            titles = [];
    }

    images.forEach((src, index) => {
        const container = document.createElement('div');
        container.className = 'image-container';

        const img = document.createElement('img');
        img.src = src;
        img.alt = titles[index];

        const title = document.createElement('p');
        title.textContent = titles[index];

        container.appendChild(img);
        container.appendChild(title);
        imageDisplay.appendChild(container);
    });

    // Always show the button for necklaces
    showAllButton.style.display = 'block';
}

function showAllImages(category) {
    const imageDisplay = document.getElementById('image-display');
    imageDisplay.innerHTML = '';

    let images = [];
    let titles = [];

    // You can replace this switch with specific logic for showing all images for any category if needed
    switch (category) {
        case 'necklaces':
            images = ['img/necklaces/fashion necklace.avif', 'img/necklaces/fashionpendant.avif', 'img/necklaces/solitaire.avif', 'img/necklaces/tennis necklace.avif'];
            titles = ['fashion necklace', 'fashionpendant', 'solitaire', 'tennis necklace'];
            break;
        // Add cases for other categories if needed
    }

    images.forEach((src, index) => {
        const container = document.createElement('div');
        container.className = 'image-container';

        const img = document.createElement('img');
        img.src = src;
        img.alt = titles[index];

        const title = document.createElement('p');
        title.textContent = titles[index];

        container.appendChild(img);
        container.appendChild(title);
        imageDisplay.appendChild(container);
    });
}


// 
// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 2,
//             spaceBetween: 10,
//         },
//         768: {
//             slidesPerView: 3,
//             spaceBetween: 15,
//         },
//         1024: {
//             slidesPerView: 4,
//             spaceBetween: 20,
//         },
//         1280: {
//             slidesPerView: 5,
//             spaceBetween: 25,
//         },
//     },
// });
// 
