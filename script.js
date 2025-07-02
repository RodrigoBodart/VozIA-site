/**
 * VozIA - JavaScript Premium
 * Implementação avançada com interatividade, animações e funcionalidades dinâmicas
 */

document.addEventListener('DOMContentLoaded', function() {
    // Inicialização
    initializeApp();
    
    // Loading Screen with enhanced animation
    initializeLoadingScreen();
    
    // Navegação
    initializeNavigation();
    
    // Hero Animations
    initializeHeroAnimations();
    
    // Chatbot Demo
    initializeChatbotDemo();
    
    // Demo Controls
    initializeDemoControls();
    
    // Pricing Toggle
    initializePricingToggle();
    
    // Form Handling
    initializeFormHandling();
    
    // Scroll Animations
    initializeScrollAnimations();
    
    // Counter Animations
    initializeCounterAnimations();
    
    // Parallax Effects
    initializeParallaxEffects();
    
    // Cursor Effects
    initializeCursorEffects();
    
    // Testimonial Carousel
    initializeTestimonialCarousel();
    
    // Feature Hover Effects
    initializeFeatureHoverEffects();
    
    // Lazy Loading Images
    initializeLazyLoading();
    
    // Dark Mode Toggle
    initializeDarkMode();
    
    // Scroll to Top Button
    initializeScrollToTop();
    
    // Intersection Observer for Animations
    initializeIntersectionObserver();
});

function initializeApp() {
    console.log('🧠 VozIA 3.0 Enhanced Inicializado');
    
    // Adicionar classe de JavaScript ativo
    document.documentElement.classList.add('js-active');
    
    // Configurar viewport height para mobile
    const setVH = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', setVH);
    
    // Preload critical assets
    preloadCriticalAssets();
}

function preloadCriticalAssets() {
    // Preload important images
    const imagesToPreload = [
        'img/icon_multicanal.png',
        'img/icon_voz_clonada.png',
        'img/icon_analytics.png',
        'img/icon_integracao.png',
        'img/vozia_logo.png'
    ];
    
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

function initializeLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    const loadingText = document.querySelector('.loading-text');
    const aiBrain = document.querySelector('.ai-brain');
    
    if (loadingScreen) {
        // Animate loading progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            
            if (loadingProgress) {
                loadingProgress.style.width = `${progress}%`;
            }
            
            // Update loading text
            if (loadingText) {
                if (progress < 30) {
                    loadingText.textContent = "Inicializando VozIA...";
                } else if (progress < 60) {
                    loadingText.textContent = "Carregando IA avançada...";
                } else if (progress < 90) {
                    loadingText.textContent = "Preparando experiência interativa...";
                } else {
                    loadingText.textContent = "Pronto!";
                }
            }
            
            // When loading is complete
            if (progress === 100) {
                clearInterval(interval);
                setTimeout(() => {
                    loadingScreen.classList.add('hidden');
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                    }, 500);
                }, 500);
            }
        }, 100);
        
        // Animate brain icon
        if (aiBrain) {
            aiBrain.classList.add('animate-pulse');
        }
    }
}

function initializeNavigation() {
    const header = document.querySelector('.header');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('active') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
    
    // Active link highlighting
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu when clicking a link
            if (navToggle && navMenu) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    });
    
    // Highlight active section on scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 100;
        
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

function initializeHeroAnimations() {
    // Animate dashboard metrics
    const metricValues = document.querySelectorAll('.metric-value');
    
    metricValues.forEach(metric => {
        const target = parseInt(metric.getAttribute('data-target'), 10);
        const prefix = metric.textContent.startsWith('€') ? '€' : '';
        const suffix = metric.textContent.endsWith('%') ? '%' : '';
        let current = 0;
        const increment = target / 50; // Adjust for animation speed
        
        const updateCounter = () => {
            current += increment;
            if (current > target) current = target;
            
            metric.textContent = `${prefix}${Math.floor(current)}${suffix}`;
            
            if (current < target) {
                requestAnimationFrame(updateCounter);
            }
        };
        
        // Start counter animation after a delay
        setTimeout(() => {
            updateCounter();
        }, 1500);
    });
    
    // Animate activity feed
    const activityItems = document.querySelectorAll('.activity-item');
    
    activityItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 2000 + (index * 300));
    });
    
    // Add new activity items periodically
    const activityFeed = document.querySelector('.activity-feed');
    
    if (activityFeed) {
        const activities = [
            { icon: '💬', text: 'Respondeu dúvida sobre planos para cliente Maria', time: 'agora' },
            { icon: '📊', text: 'Gerou relatório de desempenho para equipe de vendas', time: 'agora' },
            { icon: '🔔', text: 'Enviou notificação de promoção para segmento premium', time: 'agora' },
            { icon: '📱', text: 'Integrou novo canal de WhatsApp para cliente Carlos', time: 'agora' },
            { icon: '💡', text: 'Sugeriu otimização de script para atendimento', time: 'agora' }
        ];
        
        let activityIndex = 0;
        
        setInterval(() => {
            // Remove oldest activity if there are more than 3
            if (activityFeed.children.length >= 3) {
                activityFeed.removeChild(activityFeed.children[activityFeed.children.length - 1]);
            }
            
            // Create new activity
            const newActivity = document.createElement('div');
            newActivity.className = 'activity-item';
            newActivity.style.opacity = '0';
            newActivity.style.transform = 'translateX(20px)';
            
            const activity = activities[activityIndex];
            newActivity.innerHTML = `
                <span class="activity-icon">${activity.icon}</span>
                <span class="activity-text">${activity.text}</span>
                <span class="activity-time">${activity.time}</span>
            `;
            
            // Insert at the beginning
            activityFeed.insertBefore(newActivity, activityFeed.firstChild);
            
            // Animate in
            setTimeout(() => {
                newActivity.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                newActivity.style.opacity = '1';
                newActivity.style.transform = 'translateX(0)';
            }, 10);
            
            // Update index for next activity
            activityIndex = (activityIndex + 1) % activities.length;
            
            // Update times for existing activities
            const times = ['agora', '1min', '2min', '3min', '4min'];
            const activityItems = activityFeed.querySelectorAll('.activity-item');
            
            activityItems.forEach((item, index) => {
                const timeElement = item.querySelector('.activity-time');
                if (timeElement) {
                    timeElement.textContent = times[index];
                }
            });
        }, 5000);
    }
}

function initializeChatbotDemo() {
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotWindow = document.querySelector('.chatbot-window');
    const chatInput = document.querySelector('.chat-input');
    const chatSend = document.querySelector('.chat-send');
    const chatBody = document.querySelector('.chatbot-body');
    const chatOptions = document.querySelector('.chat-options');
    
    if (!chatbotToggle || !chatbotWindow) return;
    
    // Toggle chatbot window
    chatbotToggle.addEventListener('click', () => {
        chatbotToggle.classList.toggle('active');
        chatbotWindow.classList.toggle('active');
        
        // If opening, focus input and add welcome message
        if (chatbotWindow.classList.contains('active') && chatBody.children.length === 0) {
            setTimeout(() => {
                addBotMessage('Olá! Sou o assistente virtual do VozIA. Como posso ajudar você hoje?');
                
                // Add quick options
                if (chatOptions) {
                    const options = [
                        'Como funciona o VozIA?',
                        'Quais são os planos?',
                        'Quero uma demonstração'
                    ];
                    
                    options.forEach(option => {
                        const optionElement = document.createElement('div');
                        optionElement.className = 'chat-option';
                        optionElement.textContent = option;
                        optionElement.addEventListener('click', () => {
                            addUserMessage(option);
                            handleUserInput(option);
                        });
                        chatOptions.appendChild(optionElement);
                    });
                }
            }, 500);
            
            if (chatInput) chatInput.focus();
        }
    });
    
    // Send message on button click
    if (chatSend && chatInput) {
        chatSend.addEventListener('click', () => {
            const message = chatInput.value.trim();
            if (message) {
                addUserMessage(message);
                handleUserInput(message);
                chatInput.value = '';
            }
        });
    }
    
    // Send message on Enter key
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const message = chatInput.value.trim();
                if (message) {
                    addUserMessage(message);
                    handleUserInput(message);
                    chatInput.value = '';
                }
            }
        });
    }
    
    // Function to add bot message
    function addBotMessage(message) {
        if (!chatBody) return;
        
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message bot';
        
        const messageText = document.createElement('p');
        messageText.textContent = '';
        
        const messageTime = document.createElement('div');
        messageTime.className = 'chat-time';
        messageTime.textContent = getCurrentTime();
        
        messageElement.appendChild(messageText);
        messageElement.appendChild(messageTime);
        chatBody.appendChild(messageElement);
        
        // Scroll to bottom
        chatBody.scrollTop = chatBody.scrollHeight;
        
        // Typing effect
        let i = 0;
        const typingSpeed = 30; // milliseconds per character
        
        function typeWriter() {
            if (i < message.length) {
                messageText.textContent += message.charAt(i);
                i++;
                chatBody.scrollTop = chatBody.scrollHeight;
                setTimeout(typeWriter, typingSpeed);
            }
        }
        
        typeWriter();
    }
    
    // Function to add user message
    function addUserMessage(message) {
        if (!chatBody) return;
        
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message user';
        
        const messageText = document.createElement('p');
        messageText.textContent = message;
        
        const messageTime = document.createElement('div');
        messageTime.className = 'chat-time';
        messageTime.textContent = getCurrentTime();
        
        messageElement.appendChild(messageText);
        messageElement.appendChild(messageTime);
        chatBody.appendChild(messageElement);
        
        // Scroll to bottom
        chatBody.scrollTop = chatBody.scrollHeight;
    }
    
    // Function to handle user input
    function handleUserInput(message) {
        // Clear options when user sends a message
        if (chatOptions) {
            chatOptions.innerHTML = '';
        }
        
        // Simple response logic
        setTimeout(() => {
            let response;
            
            if (message.toLowerCase().includes('funciona')) {
                response = 'O VozIA é uma plataforma de atendimento inteligente baseada em IA que oferece atendimento multicanal, clonagem de voz com biometria, acesso inteligente a links e marketing criado por IA. Nossa tecnologia permite automatizar até 99,9% do seu atendimento ao cliente.';
            } else if (message.toLowerCase().includes('plano')) {
                response = 'Oferecemos três planos principais: Básico (€49/mês), Profissional (€99/mês) e Empresarial (€199/mês). Cada plano inclui diferentes recursos e limites de uso. Posso te enviar mais detalhes sobre cada um deles.';
            } else if (message.toLowerCase().includes('demonstração') || message.toLowerCase().includes('demo')) {
                response = 'Ótimo! Para agendar uma demonstração personalizada, precisamos de algumas informações. Você pode preencher o formulário na seção "Demo Gratuita" do nosso site ou me informar seu nome, e-mail e empresa que entrarei em contato para agendar.';
            } else if (message.toLowerCase().includes('preço') || message.toLowerCase().includes('custo')) {
                response = 'Nossos preços começam em €49/mês para o plano Básico. Oferecemos também planos Profissional (€99/mês) e Empresarial (€199/mês). Todos os planos incluem suporte e atualizações gratuitas.';
            } else if (message.toLowerCase().includes('whatsapp') || message.toLowerCase().includes('integração')) {
                response = 'Sim, o VozIA integra-se perfeitamente com WhatsApp, e-mail, chat web, telefone e outros canais. Nossa plataforma unifica todas as conversas em uma única interface, permitindo atendimento consistente em todos os canais.';
            } else {
                response = 'Obrigado pelo seu interesse no VozIA! Posso ajudar com informações sobre nossos recursos, planos, integrações ou agendar uma demonstração personalizada para você. O que gostaria de saber?';
            }
            
            addBotMessage(response);
            
            // Add follow-up options based on the conversation
            if (chatOptions) {
                let options;
                
                if (message.toLowerCase().includes('plano') || message.toLowerCase().includes('preço')) {
                    options = [
                        'Quero uma demonstração',
                        'Quais integrações oferecem?',
                        'Como funciona a clonagem de voz?'
                    ];
                } else if (message.toLowerCase().includes('demonstração') || message.toLowerCase().includes('demo')) {
                    options = [
                        'Quais são os planos?',
                        'Como funciona a integração?',
                        'Preciso de hardware especial?'
                    ];
                } else if (message.toLowerCase().includes('funciona')) {
                    options = [
                        'Quais são os planos?',
                        'Quero uma demonstração',
                        'Como é feita a integração?'
                    ];
                } else {
                    options = [
                        'Como funciona o VozIA?',
                        'Quais são os planos?',
                        'Quero uma demonstração'
                    ];
                }
                
                setTimeout(() => {
                    options.forEach(option => {
                        const optionElement = document.createElement('div');
                        optionElement.className = 'chat-option';
                        optionElement.textContent = option;
                        optionElement.addEventListener('click', () => {
                            addUserMessage(option);
                            handleUserInput(option);
                        });
                        chatOptions.appendChild(optionElement);
                    });
                }, 500);
            }
        }, 1000);
    }
    
    // Function to get current time
    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        
        // Add leading zeros
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        
        return `${hours}:${minutes}`;
    }
}

function initializeDemoControls() {
    const demoForm = document.querySelector('.demo-form');
    
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            // Validate form
            let isValid = true;
            const requiredFields = ['name', 'email', 'company'];
            
            requiredFields.forEach(field => {
                const input = this.querySelector(`[name="${field}"]`);
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            // Email validation
            const emailInput = this.querySelector('[name="email"]');
            if (emailInput && !validateEmail(emailInput.value)) {
                isValid = false;
                emailInput.classList.add('error');
            }
            
            if (isValid) {
                // Show success message
                const formContainer = this.parentElement;
                this.style.display = 'none';
                
                const successMessage = document.createElement('div');
                successMessage.className = 'demo-success';
                successMessage.innerHTML = `
                    <div class="success-icon">✅</div>
                    <h3>Solicitação Enviada com Sucesso!</h3>
                    <p>Obrigado, ${formValues.name}! Recebemos sua solicitação de demonstração. Nossa equipe entrará em contato em até 24 horas para agendar sua sessão personalizada.</p>
                `;
                
                formContainer.appendChild(successMessage);
                
                // Reset form
                this.reset();
            }
        });
        
        // Real-time validation
        const inputs = demoForm.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.required && !this.value.trim()) {
                    this.classList.add('error');
                } else if (this.type === 'email' && !validateEmail(this.value)) {
                    this.classList.add('error');
                } else {
                    this.classList.remove('error');
                }
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    if ((this.required && this.value.trim()) || 
                        (this.type === 'email' && validateEmail(this.value))) {
                        this.classList.remove('error');
                    }
                }
            });
        });
    }
    
    // Email validation function
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}

function initializePricingToggle() {
    const pricingToggle = document.querySelector('.toggle-switch');
    const monthlyPrices = document.querySelectorAll('.price-monthly');
    const annualPrices = document.querySelectorAll('.price-annual');
    
    if (pricingToggle) {
        pricingToggle.addEventListener('click', function() {
            this.classList.toggle('annual');
            
            if (this.classList.contains('annual')) {
                // Show annual prices
                monthlyPrices.forEach(price => price.style.display = 'none');
                annualPrices.forEach(price => price.style.display = 'block');
            } else {
                // Show monthly prices
                monthlyPrices.forEach(price => price.style.display = 'block');
                annualPrices.forEach(price => price.style.display = 'none');
            }
        });
    }
}

function initializeFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // Add required attribute to required fields
        const requiredInputs = form.querySelectorAll('[data-required="true"]');
        requiredInputs.forEach(input => {
            input.required = true;
        });
        
        // Add input validation
        const inputs = form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            // Add focus and blur effects
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
                
                // Validate on blur
                if (this.required && !this.value.trim()) {
                    this.parentElement.classList.add('error');
                } else if (this.type === 'email' && !validateEmail(this.value)) {
                    this.parentElement.classList.add('error');
                } else {
                    this.parentElement.classList.remove('error');
                }
            });
            
            // Validate on input
            input.addEventListener('input', function() {
                if (this.parentElement.classList.contains('error')) {
                    if ((this.required && this.value.trim()) || 
                        (this.type === 'email' && validateEmail(this.value))) {
                        this.parentElement.classList.remove('error');
                    }
                }
            });
        });
        
        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate all fields
            let isValid = true;
            
            inputs.forEach(input => {
                if (input.required && !input.value.trim()) {
                    input.parentElement.classList.add('error');
                    isValid = false;
                } else if (input.type === 'email' && !validateEmail(input.value)) {
                    input.parentElement.classList.add('error');
                    isValid = false;
                }
            });
            
            if (isValid) {
                // Show success message or submit form
                const formContainer = this.parentElement;
                this.style.display = 'none';
                
                const successMessage = document.createElement('div');
                successMessage.className = 'form-success';
                successMessage.innerHTML = `
                    <div class="success-icon">✅</div>
                    <h3>Formulário Enviado com Sucesso!</h3>
                    <p>Obrigado pelo seu interesse! Recebemos suas informações e entraremos em contato em breve.</p>
                `;
                
                formContainer.appendChild(successMessage);
                
                // Reset form
                this.reset();
            }
        });
    });
    
    // Email validation function
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}

function initializeScrollAnimations() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initializeCounterAnimations() {
    // Animate numbers when they come into view
    const counters = document.querySelectorAll('.counter');
    
    if (counters.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'), 10);
                const duration = parseInt(counter.getAttribute('data-duration') || '2000', 10);
                const prefix = counter.getAttribute('data-prefix') || '';
                const suffix = counter.getAttribute('data-suffix') || '';
                
                let startTime;
                let currentValue = 0;
                
                function updateCounter(timestamp) {
                    if (!startTime) startTime = timestamp;
                    
                    const progress = Math.min((timestamp - startTime) / duration, 1);
                    currentValue = Math.floor(progress * target);
                    counter.textContent = `${prefix}${currentValue}${suffix}`;
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = `${prefix}${target}${suffix}`;
                    }
                }
                
                requestAnimationFrame(updateCounter);
                
                // Unobserve after animation
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.1 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function initializeParallaxEffects() {
    // Parallax scrolling effect
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length === 0) return;
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.1;
            const offset = scrollY * speed;
            
            element.style.transform = `translateY(${offset}px)`;
        });
    });
    
    // Mouse move parallax effect
    const mouseParallaxElements = document.querySelectorAll('.mouse-parallax');
    
    if (mouseParallaxElements.length > 0) {
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            mouseParallaxElements.forEach(element => {
                const speed = element.getAttribute('data-speed') || 0.05;
                const x = (window.innerWidth / 2 - mouseX) * speed;
                const y = (window.innerHeight / 2 - mouseY) * speed;
                
                element.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }
}

function initializeCursorEffects() {
    // Custom cursor effect
    const body = document.body;
    
    // Check if custom cursor is enabled
    if (body.classList.contains('custom-cursor-enabled')) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        
        const cursorDot = document.createElement('div');
        cursorDot.className = 'cursor-dot';
        
        body.appendChild(cursor);
        body.appendChild(cursorDot);
        
        // Hide default cursor
        body.style.cursor = 'none';
        
        // Update cursor position
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
            
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
        });
        
        // Cursor effects on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .interactive');
        
        interactiveElements.forEach(element => {
            element.style.cursor = 'none';
            
            element.addEventListener('mouseenter', () => {
                cursor.style.width = '50px';
                cursor.style.height = '50px';
                cursor.style.opacity = '0.2';
                
                cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.style.width = '20px';
                cursor.style.height = '20px';
                cursor.style.opacity = '0.5';
                
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
        
        // Hide cursor when leaving window
        document.addEventListener('mouseout', (e) => {
            if (e.relatedTarget === null) {
                cursor.style.opacity = '0';
                cursorDot.style.opacity = '0';
            }
        });
        
        document.addEventListener('mouseover', () => {
            cursor.style.opacity = '0.5';
            cursorDot.style.opacity = '1';
        });
        
        // Click effect
        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.9)';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
        });
        
        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    }
}

function initializeTestimonialCarousel() {
    const testimonialTrack = document.querySelector('.testimonial-track');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    const prevArrow = document.querySelector('.testimonial-arrow.prev');
    const nextArrow = document.querySelector('.testimonial-arrow.next');
    
    if (!testimonialTrack || testimonialCards.length === 0) return;
    
    let currentIndex = 0;
    const cardWidth = testimonialCards[0].offsetWidth;
    
    // Set initial position
    updateCarousel();
    
    // Update carousel position
    function updateCarousel() {
        testimonialTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        testimonialDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % testimonialCards.length;
        updateCarousel();
    }
    
    // Previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
        updateCarousel();
    }
    
    // Click events for arrows
    if (nextArrow) {
        nextArrow.addEventListener('click', nextSlide);
    }
    
    if (prevArrow) {
        prevArrow.addEventListener('click', prevSlide);
    }
    
    // Click events for dots
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // Auto-advance slides
    let autoplayInterval = setInterval(nextSlide, 5000);
    
    // Pause autoplay on hover
    testimonialTrack.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    testimonialTrack.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 5000);
    });
    
    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    testimonialTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    testimonialTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left
            nextSlide();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right
            prevSlide();
        }
    }
}

function initializeFeatureHoverEffects() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add hover class
            this.classList.add('hover');
            
            // Animate icon
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            // Remove hover class
            this.classList.remove('hover');
            
            // Reset icon animation
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0)';
            }
        });
    });
}

function initializeLazyLoading() {
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if (lazyImages.length === 0) return;
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                
                if (src) {
                    img.src = src;
                    img.removeAttribute('data-src');
                    
                    // Add fade-in effect
                    img.style.opacity = '0';
                    setTimeout(() => {
                        img.style.transition = 'opacity 0.5s ease';
                        img.style.opacity = '1';
                    }, 100);
                }
                
                imageObserver.unobserve(img);
            }
        });
    }, { threshold: 0.1, rootMargin: '100px' });
    
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
    
    // Lazy load background images
    const lazyBackgrounds = document.querySelectorAll('[data-background]');
    
    if (lazyBackgrounds.length === 0) return;
    
    const backgroundObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const background = element.getAttribute('data-background');
                
                if (background) {
                    element.style.backgroundImage = `url(${background})`;
                    element.removeAttribute('data-background');
                }
                
                backgroundObserver.unobserve(element);
            }
        });
    }, { threshold: 0.1, rootMargin: '100px' });
    
    lazyBackgrounds.forEach(element => {
        backgroundObserver.observe(element);
    });
}

function initializeDarkMode() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
    }
    
    if (darkModeToggle) {
        // Update toggle state
        updateToggleState();
        
        // Toggle dark mode on click
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            // Save preference
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
            
            // Update toggle state
            updateToggleState();
        });
    }
    
    // Update toggle state based on current theme
    function updateToggleState() {
        if (!darkModeToggle) return;
        
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.setAttribute('aria-label', 'Mudar para modo claro');
            darkModeToggle.innerHTML = `
                <svg class="sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                <svg class="moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            `;
        } else {
            darkModeToggle.setAttribute('aria-label', 'Mudar para modo escuro');
            darkModeToggle.innerHTML = `
                <svg class="sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                <svg class="moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            `;
        }
    }
    
    // Listen for system preference changes
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
            
            // Update toggle state
            updateToggleState();
        }
    });
}

function initializeScrollToTop() {
    const scrollTopButton = document.querySelector('.scroll-top');
    
    if (!scrollTopButton) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initializeIntersectionObserver() {
    // Animate elements when they come into view
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

