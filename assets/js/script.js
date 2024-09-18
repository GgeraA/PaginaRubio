document.addEventListener('DOMContentLoaded', function() {
    // Cargar el encabezado y el pie de página
    loadComponent('assets/components/header.html', 'header-container');
    loadComponent('assets/components/footer.html', 'footer-container');
    
    // Obtener la ruta actual y determinar qué contenido cargar
    const path = window.location.pathname;
    const currentPage = path.split('/').pop().replace('.html', '') || 'index'; // Manejo de la página inicial
    
    // Determinar qué contenido cargar
    let contentPage = 'home'; // Página por defecto
    if (currentPage === 'normativas') {
        contentPage = 'normativas';
    } else if (currentPage === 'estandares') {
        contentPage = 'estandares';
    } else if (currentPage === 'aviso-privacidad') {
        contentPage = 'aviso-privacidad';
    }
    
    loadComponent(`assets/components/${contentPage}.html`, 'main-content-container');
    
    // Resaltar el enlace activo
    setActiveLink(contentPage);
    
    // Manejar clics en los enlaces de navegación
    document.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('nav-link')) {
            event.preventDefault();
            const page = event.target.getAttribute('data-page');
            loadComponent(`assets/components/${page}.html`, 'main-content-container');
            setActiveLink(page);
        }
    });

    // Función para cargar componentes HTML
    function loadComponent(url, containerId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(containerId).innerHTML = data;

                // Llamar a la función para configurar el modal del PDF después de cargar el contenido
                //setupPdfModal();

                // Inicializar el carrusel después de cargar el contenido
                //initializeCarousel();
            })
            .catch(error => console.error('Error cargando el componente:', error));
    }

    // Función para resaltar el enlace activo
    function setActiveLink(page) {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            if (link.getAttribute('data-page') === page) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
});
