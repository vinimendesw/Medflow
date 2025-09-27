document.addEventListener('DOMContentLoaded', () => {

    // Seleciona os elementos principais da página
    const pages = {
        login: document.getElementById('login-page'),
        register: document.getElementById('register-page'),
        menu: document.getElementById('menu-page')
    };

    const buttons = {
        goToRegister: document.getElementById('go-to-register'),
        goToLogin: document.getElementById('go-to-login'),
        loginBtn: document.getElementById('login-btn'),
        registerBtn: document.getElementById('register-btn'),
        navMenu: document.getElementById('nav-menu'),
    };

    // Função para mostrar uma página e esconder as outras
    const showPage = (pageName) => {
        // Esconde todas as páginas
        Object.values(pages).forEach(page => {
            page.classList.remove('active');
        });
        // Mostra a página desejada
        if (pages[pageName]) {
            pages[pageName].classList.add('active');
        }
    };

    // ---- Event Listeners para Navegação ----

    // Ir para a tela de Cadastro ao clicar em "Não possuo cadastro"
    if (buttons.goToRegister) {
        buttons.goToRegister.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o comportamento padrão do link
            showPage('register');
        });
    }

    // Voltar para a tela de Login ao clicar em "Já possuo cadastro"
    if(buttons.goToLogin) {
        buttons.goToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('login');
        });
    }
    
    // Simula o login e vai para o Menu ao clicar em "Entrar"
    if (buttons.loginBtn) {
        buttons.loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Aqui você adicionaria a lógica de validação de login
            console.log('Tentativa de login...');
            showPage('menu');
        });
    }

    // Simula o cadastro e vai para o Menu ao clicar em "Cadastrar-se"
    if (buttons.registerBtn) {
        buttons.registerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Aqui você adicionaria a lógica de validação e criação de usuário
            console.log('Tentativa de cadastro...');
            showPage('menu');
        });
    }

    // Navegar para o menu ao clicar no item de navegação "Menu"
    if (buttons.navMenu) {
        buttons.navMenu.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('menu');
        });
    }

    // ---- Lógica Adicional (Ex: Toggle Paciente/Médico) ----
    const toggles = document.querySelectorAll('.user-type-toggle');
    toggles.forEach(toggle => {
        const buttons = toggle.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove a classe 'active' de todos os botões no toggle
                buttons.forEach(btn => btn.classList.remove('active'));
                // Adiciona a classe 'active' apenas no botão clicado
                button.classList.add('active');
            });
        });
    });

    // Inicia a aplicação mostrando a página de login
    showPage('login');
});

