document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    // Show the search results when the search box is clicked
    searchInput.addEventListener('focus', function() {
        console.log("focus");
       
    });
     
    // Hide the search results when clicking outside of the search box and results
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
            searchResults.classList.add('hidden');
            console.log("click");
        }
    });

    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
      }

    // Prevent hiding when clicking inside the search results
    searchResults.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Remove 'hidden' class when typing in the search input
    searchInput.addEventListener('input', function() {
        if (searchInput.value.trim() === '') {
            searchResults.classList.add('hidden');
        } else {
            searchResults.classList.remove('hidden');
        }
        
    });

    // Show the search bar when CTRL + K is pressed
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 'k') {
            event.preventDefault();
            searchResults.classList.remove('hidden');
            searchInput.focus();
            console.log("keydown");
        }
    });

    
});
