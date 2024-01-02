function toggleMode() {
    //document é a página html inteira, representando o documento em formato de objeto javascript
    const html = document.documentElement 

    //one-liner
    html.classList.toggle('light')

    //pegar a tag img
    const img = document.querySelector('#profile img')

    //pegar tag img e substituir a imagem
    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/Avatar-light.jpg')
    } else {
        img.setAttribute('src', './assets/avatar.jpg')
    }


}