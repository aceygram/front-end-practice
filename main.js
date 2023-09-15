var tabLinks = document.querySelectorAll('.tablinks');
tabLinks.forEach(function(tabLink) {
    tabLink.addEventListener('click', function() {
        var tabName = this.getAttribute('data-tab');

        var tabContent = document.querySelectorAll('.plans');
        tabContent.forEach(function(tab) {
            tab.style.display = 'none';
        });

        tabLinks.forEach(function(tabLink) {
            tabLink.classList.remove('active');
        });

        document.getElementById(tabName).style.display = 'flex';
        this.classList.add('active');
    })
})


// =
// N
// n
// B 
// b 
