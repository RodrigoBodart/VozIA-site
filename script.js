// VozIA - JavaScript Premium
document.addEventListener('DOMContentLoaded', function() {
    // Inicialização
    initializeApp();
    
    // Loading Screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 3000);
    
    // Navegação
    initializeNavigation();
    
    // Hero Animations
    initializeHeroAnimations();
    
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
});

function initializeApp() {
    console.log('🧠 VozIA 2.0 Inicializado');
    
    // Adicionar classe de JavaScript ativo
    document.documentElement.classList.add('js-active');
    
    // Configurar viewport height para mobile
    const setVH = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', setVH);
}

function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const nav = document.querySelector('.nav');
    
    // Toggle mobile menu
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Animate hamburger
            const spans = navToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (navToggle.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = '';
                    span.style.opacity = '';
                }
            });
        });
    }
    
    // Close menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        });
    });
    
    // Scroll effect on navigation
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (nav) {
            if (currentScrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initializeHeroAnimations() {
    // Animate hero elements on load
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-stats, .hero-actions');
    
    heroElements.forEach((element, index) => {
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 500 + (index * 200));
        }
    });
    
    // Dashboard preview animation
    const dashboard = document.querySelector('.dashboard-preview');
    if (dashboard) {
        setTimeout(() => {
            dashboard.style.opacity = '0';
            dashboard.style.transform = 'translateY(50px) scale(0.9)';
            dashboard.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
            
            setTimeout(() => {
                dashboard.style.opacity = '1';
                dashboard.style.transform = 'translateY(0) scale(1)';
            }, 100);
        }, 1000);
    }
}

function initializeCounterAnimations() {
    const counters = document.querySelectorAll('[data-target]');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                if (counter.textContent.includes('€')) {
                    counter.textContent = `€${Math.ceil(current).toLocaleString()}`;
                } else if (counter.textContent.includes('%')) {
                    counter.textContent = `${Math.ceil(current)}%`;
                } else {
                    counter.textContent = Math.ceil(current).toLocaleString();
                }
                requestAnimationFrame(updateCounter);
            } else {
                if (counter.textContent.includes('€')) {
                    counter.textContent = `€${target.toLocaleString()}`;
                } else if (counter.textContent.includes('%')) {
                    counter.textContent = `${target}%`;
                } else {
                    counter.textContent = target.toLocaleString();
                }
            }
        };
        
        updateCounter();
    };
    
    // Intersection Observer for counters
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function initializeDemoControls() {
    const demoButtons = document.querySelectorAll('.demo-btn');
    const demoPanels = document.querySelectorAll('.demo-panel');
    
    demoButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetDemo = button.getAttribute('data-demo');
            
            // Remove active class from all buttons and panels
            demoButtons.forEach(btn => btn.classList.remove('active'));
            demoPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            button.classList.add('active');
            const targetPanel = document.getElementById(`demo-${targetDemo}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
            
            // Trigger specific animations based on demo type
            if (targetDemo === 'marketing') {
                animateMarketingCreation();
            } else if (targetDemo === 'conversation') {
                animateConversationFlow();
            }
        });
    });
}

function animateMarketingCreation() {
    const steps = document.querySelectorAll('#demo-marketing .creation-step');
    const result = document.querySelector('#demo-marketing .campaign-result');
    
    // Reset animations
    steps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateX(-20px)';
    });
    
    if (result) {
        result.style.opacity = '0';
        result.style.transform = 'translateY(20px)';
    }
    
    // Animate steps
    steps.forEach((step, index) => {
        setTimeout(() => {
            step.style.transition = 'all 0.5s ease';
            step.style.opacity = '1';
            step.style.transform = 'translateX(0)';
        }, index * 300);
    });
    
    // Animate result
    if (result) {
        setTimeout(() => {
            result.style.transition = 'all 0.8s ease';
            result.style.opacity = '1';
            result.style.transform = 'translateY(0)';
        }, steps.length * 300 + 500);
    }
}

function animateConversationFlow() {
    const flowSteps = document.querySelectorAll('#demo-conversation .flow-step');
    
    flowSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            step.style.transition = 'all 0.6s ease';
            step.style.opacity = '1';
            step.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

function initializePricingToggle() {
    const toggle = document.getElementById('pricing-toggle');
    const monthlyPrices = document.querySelectorAll('.amount.monthly');
    const yearlyPrices = document.querySelectorAll('.amount.yearly');
    
    if (toggle) {
        toggle.addEventListener('change', () => {
            if (toggle.checked) {
                // Show yearly prices
                monthlyPrices.forEach(price => price.classList.add('hidden'));
                yearlyPrices.forEach(price => price.classList.remove('hidden'));
            } else {
                // Show monthly prices
                monthlyPrices.forEach(price => price.classList.remove('hidden'));
                yearlyPrices.forEach(price => price.classList.add('hidden'));
            }
        });
    }
}

function initializeFormHandling() {
    const demoForm = document.getElementById('demoForm');
    const phoneInput = document.getElementById('telefone');
    
    // Phone mask
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
            e.target.value = value;
        });
    }
    
    // Form submission
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = demoForm.querySelector('.form-submit');
            const originalText = submitButton.innerHTML;
            
            // Show loading state
            submitButton.innerHTML = '<span class="btn-icon">⏳</span> Processando...';
            submitButton.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                // Show success message
                submitButton.innerHTML = '<span class="btn-icon">✅</span> Demo Agendada!';
                submitButton.style.background = '#00D4AA';
                
                // Create success notification
                showNotification('Demo agendada com sucesso! Entraremos em contato em breve.', 'success');
                
                // Reset form after delay
                setTimeout(() => {
                    demoForm.reset();
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                    submitButton.style.background = '';
                }, 3000);
            }, 2000);
        });
    }
    
    // Form validation
    const inputs = document.querySelectorAll('input[required], select[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearValidation);
    });
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remove existing validation
    clearValidation(e);
    
    if (!value) {
        showFieldError(field, 'Este campo é obrigatório');
        return false;
    }
    
    // Email validation
    if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Por favor, insira um e-mail válido');
            return false;
        }
    }
    
    // Phone validation
    if (field.type === 'tel') {
        const phoneRegex = /^\d{3}\s\d{3}\s\d{3}$/;
        if (!phoneRegex.test(value)) {
            showFieldError(field, 'Por favor, insira um telefone válido');
            return false;
        }
    }
    
    showFieldSuccess(field);
    return true;
}

function clearValidation(e) {
    const field = e.target;
    field.classList.remove('error', 'success');
    
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.color = '#FF6B6B';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
    
    field.parentNode.appendChild(errorElement);
}

function showFieldSuccess(field) {
    field.classList.add('success');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✅' : 'ℹ️'}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    // Styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#00D4AA' : '#0984E3',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        zIndex: '10000',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease',
        maxWidth: '400px'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

function initializeScrollAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger animation for child elements
                const children = entry.target.querySelectorAll('.feature-card, .story-card, .plan-card');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: fadeInUp 0.8s ease forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .field-error {
            animation: shake 0.5s ease;
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        .notification-icon {
            font-size: 1.2rem;
        }
    `;
    document.head.appendChild(style);
}

// Activity Feed Animation
function startActivityFeed() {
    const activities = [
        { icon: '🔗', text: 'Acessou catálogo de produtos para cliente João', time: 'agora' },
        { icon: '📧', text: 'Criou campanha de marketing para segmento premium', time: '2min' },
        { icon: '🎯', text: 'Sugeriu produto complementar - venda confirmada', time: '5min' },
        { icon: '💬', text: 'Respondeu 15 mensagens no WhatsApp', time: '8min' },
        { icon: '📊', text: 'Gerou relatório de performance semanal', time: '12min' },
        { icon: '🔄', text: 'Sincronizou dados com CRM', time: '15min' }
    ];
    
    const activityFeed = document.querySelector('.activity-feed');
    if (!activityFeed) return;
    
    let currentIndex = 0;
    
    setInterval(() => {
        const activityItems = activityFeed.querySelectorAll('.activity-item');
        
        // Fade out current items
        activityItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
        });
        
        setTimeout(() => {
            // Update content
            activityItems.forEach((item, index) => {
                const activityIndex = (currentIndex + index) % activities.length;
                const activity = activities[activityIndex];
                
                item.querySelector('.activity-icon').textContent = activity.icon;
                item.querySelector('.activity-text').textContent = activity.text;
                item.querySelector('.activity-time').textContent = activity.time;
                
                // Fade in
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 100);
            });
            
            currentIndex = (currentIndex + 1) % activities.length;
        }, 300);
    }, 5000);
}

// Start activity feed when dashboard is visible
const dashboardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startActivityFeed();
            dashboardObserver.unobserve(entry.target);
        }
    });
});

const dashboard = document.querySelector('.dashboard-preview');
if (dashboard) {
    dashboardObserver.observe(dashboard);
}

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    
    if (header && scrolled < window.innerHeight) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add CSS for form validation
const validationStyles = document.createElement('style');
validationStyles.textContent = `
    .form-group input.error,
    .form-group select.error {
        border-color: #FF6B6B !important;
        background: rgba(255, 107, 107, 0.1) !important;
    }
    
    .form-group input.success,
    .form-group select.success {
        border-color: #00D4AA !important;
        background: rgba(0, 212, 170, 0.1) !important;
    }
`;
document.head.appendChild(validationStyles);

console.log('🚀 VozIA 2.0 - Todas as funcionalidades carregadas com sucesso!');

