
    // Menu icon functionality
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-x');
        navbar.classList.toggle('active');
    };

    // Close menu when clicking a link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.onclick = () => {
            menuIcon.classList.remove('fa-x');
            navbar.classList.remove('active');
        };
    });
