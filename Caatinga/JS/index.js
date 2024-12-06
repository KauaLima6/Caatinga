
const Button = document.querySelector('button');
const modal = document.querySelector('dialog.principal');
const closeModal = document.querySelector('dialog.principal span');
const modalLogin = document.querySelector('dialog.opa');
const closeModalLogin = document.querySelector('#xiss');
const cadastrarLink = document.querySelector('#cadastrar');

let botao = document.querySelector('#botao');

Button.onclick = function () {
    modalLogin.showModal();
};

closeModal.onclick = function () {
    modal.close();
};

closeModalLogin.onclick = function () {
    modalLogin.close();
};

// Evento para abrir o modal de login e fechar o modal de cadastro
cadastrarLink.onclick = function (event) {
    modalLogin.close();  // Fecha o modal de cadastro
    modal.showModal();   // Abre o modal de login
};

// Função para alternar o estado do menu (abrir ou fechar)
function toggleMenu() {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('open');  // Adiciona ou remove a classe 'open' para abrir/fechar o menu
}

// Função para fechar o menu, removendo a classe 'open'
function closeMenu() {
    const menu = document.querySelector('#menu');
    menu.classList.remove('open');
}

// Evento para autenticação de login quando o botão de login é clicado
botao.addEventListener('click', async () => {

    let usuario = document.querySelector('#usuario1').value;
    let senha = document.querySelector('#senha1').value;

    if (usuario != "" && senha != "") {
        let resposta = await fetch(`http://192.168.1.92:3000/login/${usuario}/${senha}`);
        if (resposta.status == 200) {
            window.location.replace('../html/cadastro.html')
            alert('Bem vindo!');
        } else {
            alert('Usuario ou senha incorreta!');
        }
    } else {
        alert('Preencha todos os campos');
    }
});

document.querySelector('#entrarcad').addEventListener('click', async (event) => {
    event.preventDefault(); 
    const usuario = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;
    const conf_senha = document.querySelector('#conf_senha').value

    if (senha != conf_senha ) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
        return; 
    }

    if (!usuario || !email || !senha) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;  
    }

    const respost = await fetch(`http://192.168.1.92:3000/cadUser/novo`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usuario: usuario,
            email: email,
            senha: senha
        })
    });

    window.location.replace('../html/cadastro.html')
});
