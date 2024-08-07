// Mudanca de cor e feita por aqui!

// Classe Home

document.getElementById('home').addEventListener('click', function () {
    if (!document.body.classList.contains('home')) {
        document.body.classList.add('home');
        document.body.classList.remove('woman');
        document.body.classList.remove('kid');
        document.body.classList.remove('man');
    }
});

// Classe man

document.getElementById('man').addEventListener('click', function () {
    if (!document.body.classList.contains('man')) {
        document.body.classList.add('man');
        document.body.classList.remove('woman');
        document.body.classList.remove('kid');
        document.body.classList.remove('home');
    }
});

// Classe woman

document.getElementById('woman').addEventListener('click', function () {
    if (!document.body.classList.contains('woman')) {
        document.body.classList.add('woman');
        document.body.classList.remove('man');
        document.body.classList.remove('kid');
        document.body.classList.remove('home');
    }
});

// Classe kid

document.getElementById('kid').addEventListener('click', function () {
    if (!document.body.classList.contains('kid')) {
        document.body.classList.add('kid');
        document.body.classList.remove('man');
        document.body.classList.remove('woman');
        document.body.classList.remove('home');
    }
});

// Aqui e feito a troca de imagens!

var imgNike = "assets/img/Nike.jpeg";
var imgAdidas = "assets/img/Adidas.jpeg";
var imgPuma = "assets/img/Puma.jpg";

var imgNikeM = "assets/img/NikeM.png";
var imgAdidasM = "assets/img/AdidasM.jpeg";
var imgPumaM = "assets/img/PumaM.png";

var imgNikeF = "assets/img/NikeF.jpg";
var imgAdidasF = "assets/img/AdidasF.png";
var imgPumaF = "assets/img/PumaF.png";

var imgNikeK = "assets/img/NikeK.png";
var imgAdidasK = "assets/img/AdidasK.png";
var imgPumaK = "assets/img/PumaK.jpeg";

function trocar() {
    document.getElementById("Nike").src = imgNike;
    document.getElementById("Adidas").src = imgAdidas;
    document.getElementById("Puma").src = imgPuma;
}

function trocarM() {
    document.getElementById("Nike").src = imgNikeM;
    document.getElementById("Adidas").src = imgAdidasM;
    document.getElementById("Puma").src = imgPumaM;
}

function trocarF() {
    document.getElementById("Nike").src = imgNikeF;
    document.getElementById("Adidas").src = imgAdidasF;
    document.getElementById("Puma").src = imgPumaF;
}

function trocarK() {
    document.getElementById("Nike").src = imgNikeK;
    document.getElementById("Adidas").src = imgAdidasK;
    document.getElementById("Puma").src = imgPumaK;
}