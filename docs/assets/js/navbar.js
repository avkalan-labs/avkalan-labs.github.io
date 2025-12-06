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
    if (!event.target.closest('.application-btn, .resource-btn, .dropdown-icon')) {
        document.querySelectorAll('.dropdown-content-application.show, .dropdown-content-resource.show').forEach(content => {
            content.classList.remove('show');
        });
        // Remove the rotation from all dropdown icons
        document.querySelectorAll('.dropdown-icon.rotate').forEach(icon => {
            icon.classList.remove('rotate');
        });
    }
});

function toggleMenu() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const bars = hamburgerMenu.querySelector('.bars');
    const cross = hamburgerMenu.querySelector('.cross');
    const navContainer = document.querySelector('.nav-container-open');
    const mobileContent = document.querySelector('.mobile-content')
    navContainer.classList.toggle('open');
    mobileContent.classList.toggle('open');
    // Toggle active class for transition
    bars.classList.toggle('hide');
    cross.classList.toggle('hide');
}

// Initially hide the cross icon
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.cross').classList.add('hide');
});
