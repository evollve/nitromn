document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.card-style');

    cards.forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const fullImageSrc = this.getAttribute('href');
            const modal = createModal(fullImageSrc);
            document.body.appendChild(modal);
        });
    });

    function createModal(imageSrc) {
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <img src="${imageSrc}" alt="Full size image">
                <span class="close">&times;</span>
            </div>
        `;

        modal.querySelector('.close').addEventListener('click', function () {
            modal.remove();
        });

        return modal;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
});



