let currentIndex = 0;

function slide(direction) {
    const slider = document.querySelector('.slider');
    const cards = document.querySelectorAll('.slider-card');
    const totalCards = cards.length;
    console.log( totalCards );

    
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    } else if (currentIndex >= totalCards - 2) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 20; // Calculate offset in percentage
    slider.style.transform = `translateX(${offset}%)`;
}


function toggleDropdown(event) {
    // Prevents the default action of the button (if any)
    event.preventDefault();

    // Finds the next sibling element (the dropdown content) of the clicked button
    const dropdownContent = event.currentTarget.nextElementSibling;
    const dropArrow = event.currentTarget.querySelector('.dropdown-icon');

    // Checks if the element exists and has a dropdown class
    if (dropdownContent && (dropdownContent.classList.contains('dropdown-content-application') || 
                            dropdownContent.classList.contains('dropdown-content-resource'))) {
        // Toggles the visibility of the dropdown menu
        dropdownContent.classList.toggle('show');
        dropArrow.classList.toggle('rotate');

        // Optionally, hide other dropdowns and reset their arrow icon rotation
        document.querySelectorAll('.dropdown-content-application.show, .dropdown-content-resource.show').forEach(content => {
            if (content !== dropdownContent) {
                content.classList.remove('show');
            }
        });

        // Reset all other arrow icons' rotation except the current one
        document.querySelectorAll('.dropdown-icon.rotate').forEach(icon => {
            if (icon !== dropArrow) {
                icon.classList.remove('rotate');
                
            }
        });
    }
}


// Optionally, close dropdown when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.application-btn, .resource-btn,.dropdown-icon')) {
        document.querySelectorAll('.dropdown-content-application.show, .dropdown-content-resource.show').forEach(content => {
            content.classList.remove('show');
            icon.classList.remove('rotate');
        });
    }
});


function toggleMenu() {
    const menuIcon = document.getElementById('menuIcon');
    const navContainer = document.querySelector('.nav-container');

    // Toggle the menu open/close
    navContainer.classList.toggle('open');

    // Toggle the icon between bars and cross
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times'); // Change to cross icon
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars'); // Change back to bars icon
    }
}

        