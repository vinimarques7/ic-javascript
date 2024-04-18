let previousImage = "/atividades/atv1/assets/blue-planet.webp";
let currentImage = "/atividades/atv1/assets/blue-planet.webp";

function imageChange(){
    let img1 = document.getElementById("blueImg");
    let button = document.getElementById("buttonChange");

    if (currentImage === "/atividades/atv1/assets/blue-planet.webp") {
        img1.src = "colorful-beach.webp";
        previousImage = "/atividades/atv1/assets/blue-planet.webp";
        currentImage = "colorful-beach.webp";
        button.textContent = "Clique para voltar";
    } else {
        img1.src = previousImage;
        currentImage = previousImage;
        button.textContent = "Clique para mudar";
    }
}