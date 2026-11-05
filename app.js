document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".hero-parallax");
    const camadas = document.querySelectorAll(".camada"); 
    const prefereReducaoMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefereReducaoMovimento || !heroSection || camadas.length === 0) return;

    let scrollAtual = 0;
    let scrollAlvo = 0;
    const fatorSuavizacao = 0.05; 

    function animarParallax() {
        scrollAlvo = window.pageYOffset || document.documentElement.scrollTop;
        scrollAtual += (scrollAlvo - scrollAtual) * fatorSuavizacao;
        
        camadas.forEach(camada => {
            const velocidade = parseFloat(camada.getAttribute('data-speed')) || 0;
            const deslocamento = scrollAtual * velocidade;
            
            camada.style.transform = `translate3d(0, ${deslocamento}px, 0)`;
        });

        requestAnimationFrame(animarParallax);
    }

    animarParallax();
});