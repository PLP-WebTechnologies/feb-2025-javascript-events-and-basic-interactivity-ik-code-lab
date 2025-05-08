document.addEventListener('DOMContentLoaded', () => {
    // Button Click
    const clickMeBtn = document.getElementById('clickMeBtn');
    const clickMessage = document.getElementById('clickMessage');
    clickMeBtn.addEventListener('click', () => {
        clickMessage.textContent = 'Button Clicked! 🎉';
        setTimeout(() => {
            clickMessage.textContent = '';
        }, 2000);
    });

    // Hover Effects
    const hoverBox = document.querySelector('.hover-box');
    const hoverMessage = document.getElementById('hoverMessage');
    hoverBox.addEventListener('mouseover', () => {
        hoverMessage.textContent = 'You\'re hovering!';
    });
    hoverBox.addEventListener('mouseout', () => {
        hoverMessage.textContent = 'Hover away!';
    });

    // Keypress Detection
    const keypressInput = document.getElementById('keypressInput');
    const keypressMessage = document.getElementById('keypressMessage');
    keypressInput.addEventListener('keypress', (event) => {
        keypressMessage.textContent = `You pressed: ${event.key}`;
    });

    // Interactive Elements
    const textChanger = document.getElementById('text-changer');
    let isOriginalText = true;
    textChanger.addEventListener('click', () => {
        if (isOriginalText) {
            textChanger.textContent = 'Text Changed! ✨';
            textChanger.style.backgroundColor = '#dc3545';
            isOriginalText = false;
        } else {
            textChanger.textContent = 'Change My Text';
            textChanger.style.backgroundColor = '#28a745';
            isOriginalText = true;
        }
    });

    // Image Gallery
    const images = document.querySelectorAll('.gallery-image');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const galleryImages = document.querySelector('.gallery-images');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((image, i) => {
                image.classList.remove('active');
                image.style.transform = `translateX(${(i - index) * 100}%)`;
            });
            images[index].classList.add('active');
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        nextBtn.addEventListener('click', nextImage);
        prevBtn.addEventListener('click', prevImage);

    
    // Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = content.classList.contains('active');
            document.querySelectorAll('.accordion-content.active').forEach(c => {
                c.classList.remove('active');
            });
            if (!isActive) {
                content.classList.add('active');
            }
        });
    });

    // Form Validation
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', (event) => {
        let isValid = true;

        if (!nameInput.value.trim()) {
            nameError.textContent = 'Name is required.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        if (!emailInput.value.trim()) {
            emailError.textContent = 'Email is required.';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            emailError.textContent = 'Invalid email format.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long.';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
            formMessage.textContent = '';
        } else {
            formMessage.textContent = 'Form submitted successfully! ✅';
            formMessage.style.color = 'green';
            setTimeout(() => {
                formMessage.textContent = '';
            }, 3000);
        }
    });

    // Bonus: Double Click
    const doubleClickBtn = document.getElementById('doubleClickBtn');
    const doubleClickMessage = document.getElementById('doubleClickMessage');
    doubleClickBtn.addEventListener('dblclick', () => {
        doubleClickMessage.textContent = 'Secret action triggered by double click! 🤫';
        setTimeout(() => {
            doubleClickMessage.textContent = '';
        }, 3000);
    });

    // Bonus: Long Press
    const longPressBtn = document.getElementById('longPressBtn');
    const longPressMessage = document.getElementById('longPressMessage');
    let pressTimer;
    const longPressDuration = 1500; // milliseconds

    longPressBtn.addEventListener('mousedown', () => {
        pressTimer = setTimeout(() => {
            longPressMessage.textContent = 'Secret action triggered by long press! 🤫';
            setTimeout(() => {
                longPressMessage.textContent = '';
            }, 3000);
        }, longPressDuration);
    });

    longPressBtn.addEventListener('mouseup', () => {
        clearTimeout(pressTimer);
    });

    longPressBtn.addEventListener('mouseleave', () => {
        clearTimeout(pressTimer);
    });

    // Bonus: Real-time Feedback
    nameInput.addEventListener('input', () => {
        if (!nameInput.value.trim()) {
            nameError.textContent = 'Name is required.';
        } else {
            nameError.textContent = '';
        }
    });

    emailInput.addEventListener('input', () => {
        if (!emailInput.value.trim()) {
            emailError.textContent = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            emailError.textContent = 'Invalid email format.';
        } else {
            emailError.textContent = '';
        }
    });

    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long.';
        } else {
            passwordError.textContent = '';
        }
    });
});