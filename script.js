document.addEventListener("DOMContentLoaded", function () {
    // Animación del título principal
    const tituloPrincipal = document.getElementById('titulo-principal1');
    tituloPrincipal.style.opacity = 0;
    tituloPrincipal.style.transform = 'translateY(-20px)';
    setTimeout(function () {
        tituloPrincipal.style.transition = 'all 1s ease-in-out';
        tituloPrincipal.style.opacity = 1;
        tituloPrincipal.style.transform = 'translateY(0)';
    }, 500);

    // Animación de la sección de presentación
    const presentacionSection = document.getElementById('presentacion-section');
    presentacionSection.style.opacity = 0;
    presentacionSection.style.transform = 'scale(0.8)';
    setTimeout(function () {
        presentacionSection.style.transition = 'all 1s ease-in-out';
        presentacionSection.style.opacity = 1;
        presentacionSection.style.transform = 'scale(1)';
    }, 1000);

    // Animación de los enlaces del menú
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transform = 'translateX(-20px)';
        setTimeout(function () {
            item.style.transition = 'all 0.5s ease-in-out';
            item.style.opacity = 1;
            item.style.transform = 'translateX(0)';
        }, 100 * index);
    });
});

const coloresWeb = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque",
    "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue",
    "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan",
    "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki",
    "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon",
    "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet",
    "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick", "FloralWhite",
    "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray",
    "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki",
    "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral",
    "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGreen", "LightPink",
    "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue",
    "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine",
    "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue",
    "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue",
    "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive",
    "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen",
    "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum",
    "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon",
    "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue",
    "SlateGray", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato",
    "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
];

const letras = document.querySelectorAll(".letra-animada");

function cambiarColor() {
    letras.forEach(letra => {
        const randomColor = coloresWeb[Math.floor(Math.random() * coloresWeb.length)];
        letra.style.color = randomColor;
    });
}


// Cambiar color cada 1 segundo
setInterval(cambiarColor, 1000);

const enlace = document.getElementById('carrera-futuro');
const audio = document.getElementById('audio-clip');

enlace.addEventListener('click', (e) => {
    e.preventDefault();
    audio.currentTime = 0; // reinicia el audio cada vez
    audio.play();
});