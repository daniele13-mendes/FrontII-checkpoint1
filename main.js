var containerElemento = document.querySelector('.container')
var newpostElemento = document.querySelector ('#newpost')

var  posts  =  [
    {
        url : 'https://segredosdomundo.r7.com/wp-content/uploads/2020/05/pica-pau-origem-historia-personagens-e-curiosidades-6.jpg',
        titulo : 'Pica-pau',
        descricao :'O Pica-Pau foi criado em 1940 por Walter Lantz e o desenhista de storyboard Ben Hardaway aparecendo pela primeira vez em  Knock Knock. Em seus primeiros desenhos animados, o Pica-Pau aparece como um pássaro louco, com uma aparência consideradagrotesca, que surgiu na esteira do sucesso de Pernalonga e Patolino da Warner Bros. Porém, ao longo dos anos, ele sofreu diversas mudanças no seu visual, ganhando traços mais simpáticos,uma aparência mais refinada e um temperamento mais tranquilo.' ,
        autor : 'Walter Lantz/Ben Hardaway'

    } ,

    {    url : 'http://2.bp.blogspot.com/-bHnPztjAFqg/UW3NfQpAilI/AAAAAAAB-Q8/MQY-NBPNbsQ/s1600/bob-esponja-desenho-bob-esponja+(26).jpg' ,
        titulo : 'Bob Esponja' ,
        descricao : 'Bob Esponja é um morador da Fenda do Bikini, cidade que fica no Oceano Pacífico. Ele mora dentro de um abacaxi junto com seu animal de estimação Gary, um caracol. O personagem tem como vizinho o Sr. Lula Molusco, que é um polvo mal-humorado. Seu melhor amigo é a estrela do mar Patrick, que mora em baixo de uma pedra e é muito ingênuo. Também participam das aventuras a Sandy, um esquilo feminino que consegue viver no mar devido a sua roupa exótica.' ,
        autor : 'Stephen Hillenburg'
    } ,

    {
        url : 'https://tse3.mm.bing.net/th?id=OIP.efyYSZuZzEtfbRu_k3KSPgHaEK&pid=Api&P=0&w=326&h=183',
        titulo : 'Dragon Ball Z',
        descricao :' Foi uma série de animação produzida pela Toei Animation. Baseada na série de mangá Dragon Ball escrita por Akira Toriyama, Dragon Ball Z corresponde aos volumes 17 ao 42 do mangá que foi publicado na revista, Weekly Shonen Jump, de 1988 a 1995, e estreou no Japão na Fuji TV em 26 de abril de 1989, e terminou dia 31 de janeiro de 1996 com o total de 291 episódios,antes de ser dublada em diversos territórios ao redor do globo, incluindo Estados Unidos, Austrália, Europa, Índia e América Latina. A série já foi exibida em mais de 80 países ao redor do mundo.' ,
        autor : 'Akira Toriyama'
    }    
] 

for (let post of posts)  {

    containerElemento. innerHTML +=  `
        <div class="item">
            <img src=" ${ post . url } ">
            <h2> ${ post. titulo } </h2>
            <p> ${ post . descricao } </p>
            <h3> ${ post . autor} </h3>
        </div>
    `

}
var urlInputElemento = document.querySelector('#url')
var tituloInputElemento = document.querySelector('#titulo')
var descricaoInputElemento = document.querySelector('#descricao')
var autorInputElemento = document.querySelector('#autor')
newpostElemento . addEventListener('click' ,(event) =>  {

event.preventDefault()
  var newpost ={
    url:  urlInputElemento.value ,
    titulo: tituloInputElemento.value ,
    descricao: descricaoInputElemento.value ,
    autor: autorInputElemento.value
 
    
  }
 
    containerElemento.innerHTML += `
        <div class ="item">
         <img src="${ newpost . url }">
            <h2> ${ newpost. titulo } </h2>
            <p> ${ newpost . descricao } </p>
           <h3> ${ newpost . autor } </h3>
        </div>
    `
    console.log(newpost)

} )