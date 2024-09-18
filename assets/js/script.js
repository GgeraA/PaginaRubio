fetch('assets/components/header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header-container').innerHTML = data;
});

fetch('assets/components/home.html')
.then(response => response.text())
.then(data => {
    document.getElementById('home-container').innerHTML = data;
});