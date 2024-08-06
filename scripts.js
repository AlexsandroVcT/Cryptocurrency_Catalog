const textos = ["Saiba mais", "Ofertas", "Detalhes", "Compre agora"];

function alterarTexto() {
    const buttons = document.querySelectorAll('.custom-button');
    buttons.forEach(button => {
        const textoAtual = button.textContent.trim();
        const novoTexto = textos[(textos.indexOf(textoAtual) + 1) % textos.length];
        button.textContent = novoTexto;
    });
}

setInterval(alterarTexto, 5000);

document.querySelectorAll('.custom-button').forEach(button => {
    button.addEventListener('click', () => {
        const whatsappNumber = button.getAttribute('data-whatsapp');
        window.location.href = `https://wa.me/${whatsappNumber}`;
    });
});

document.querySelectorAll('.cart-button').forEach(button => {
    button.addEventListener('click', () => {
        alert("Produto adicionado ao carrinho!");
    });
});
