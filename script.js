let imagenes=[
    'https://www.php.net/images/meta-image.png',
    'https://www.freecodecamp.org/news/content/images/2021/10/golang.png',
    'https://aspnetcoremaster.com/img/csharp.webp',
    'https://miro.medium.com/v2/resize:fit:2560/1*2XrX0fP0htyTCah7AglTig.jpeg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
]

var index = 0;

function cambiar() {

    let contenido_imagen=document.getElementById('a');
    contenido_imagen.src=`${imagenes[index]}`;

    index++;

    // Volver al principio del array si se alcanza el final
    if (index >= imagenes.length) {
        index = 0;
    }

}




let btnMostrar=document.getElementById('next').addEventListener('click',()=>{
    cambiar();
})