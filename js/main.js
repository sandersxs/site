function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Случайные параметры для частиц
                const size = Math.random() * 100 + 20;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const delay = Math.random() * 15;
                const duration = Math.random() * 10 + 15;
                
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.animationDelay = `${delay}s`;
                particle.style.animationDuration = `${duration}s`;
                
                particlesContainer.appendChild(particle);
            }
        }

        // Переключение мобильного меню
        document.getElementById('menuToggle').addEventListener('click', function() {
            document.getElementById('headerNav').classList.toggle('header__nav--active');
            this.innerHTML = this.innerHTML.includes('fa-bars') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Изменение header при прокрутке
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
        });

        // Анимация элементов при прокрутке
        function animateOnScroll() {
            const elements = document.querySelectorAll('.about__title, .about__subtitle, .about__image, .about__text, .services__title, .services__subtitle, .service-card, .portfolio__title, .portfolio__subtitle, .portfolio-item, .team__title, .team__subtitle, .team-member, .contact__title, .contact__subtitle, .contact__info, .contact__form');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('animate');
                }
            });
        }

        // Плавная прокрутка к якорям
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Закрываем мобильное меню, если оно открыто
                    document.getElementById('headerNav').classList.remove('header__nav--active');
                    document.getElementById('menuToggle').innerHTML = '<i class="fas fa-bars"></i>';
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Обработка формы
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // В реальном приложении здесь был бы код для отправки данных на сервер
            alert('Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.');
            this.reset();
        });

        // Инициализация
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll(); // Запускаем сразу для элементов в видимой области
        });