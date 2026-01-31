// Load shared header and footer
document.addEventListener('DOMContentLoaded', function() {
    // Determine the path to assets based on current location
    const pathSegments = window.location.pathname.split('/');
    const isDetailPage = pathSegments.includes('detailpage');
    const basePath = isDetailPage ? '../' : './';

    // Load header
    fetch(basePath + 'header.html')
        .then(response => response.text())
        .then(html => {
            const headerContainer = document.getElementById('shared-header') ||
                document.body.insertAdjacentElement('afterbegin', document.createElement('div'));
            if (!document.getElementById('shared-header')) {
                headerContainer.id = 'shared-header';
            }
            headerContainer.innerHTML = html;

            // Apply navbar styling
            const style = document.createElement('style');
            style.textContent = `
                .nav-link-underline::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #667eea, #f5576c);
                    transition: all 0.3s;
                    transform: translateX(-50%);
                }
                
                .nav-link-underline:hover::after {
                    width: 80%;
                }
            `;
            document.head.appendChild(style);

            // Add navbar scroll effects
            const navbar = headerContainer.querySelector('nav');
            if (navbar) {
                window.addEventListener('scroll', function() {
                    if (window.scrollY > 100) {
                        navbar.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.1)';
                    } else {
                        navbar.style.boxShadow = 'none';
                    }
                });
            }

            // Add mobile menu toggle functionality
            const mobileMenuBtn = headerContainer.querySelector('#mobileMenuBtn');
            const mobileMenu = headerContainer.querySelector('#mobileMenu');

            if (mobileMenuBtn && mobileMenu) {
                mobileMenuBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    mobileMenu.classList.toggle('hidden');

                    // Change icon on toggle
                    const icon = mobileMenuBtn.querySelector('i');
                    if (icon) {
                        icon.classList.toggle('fa-bars');
                        icon.classList.toggle('fa-times');
                    }
                });

                // Close menu when a link is clicked
                const mobileMenuLinks = mobileMenu.querySelectorAll('a');
                mobileMenuLinks.forEach(link => {
                    link.addEventListener('click', function() {
                        mobileMenu.classList.add('hidden');
                        const icon = mobileMenuBtn.querySelector('i');
                        if (icon) {
                            icon.classList.add('fa-bars');
                            icon.classList.remove('fa-times');
                        }
                    });
                });
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch(basePath + 'footer.html')
        .then(response => response.text())
        .then(html => {
            const footerContainer = document.getElementById('shared-footer') ||
                document.body.appendChild(document.createElement('div'));
            if (!document.getElementById('shared-footer')) {
                footerContainer.id = 'shared-footer';
            }
            footerContainer.innerHTML = html;
        })
        .catch(error => console.error('Error loading footer:', error));
});