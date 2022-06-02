var balls = document.querySelector('.balls')
var quant = document.querySelectorAll('.slides .videos')
var atual = 0
var video = document.getElementById('atual')
var next = document.getElementById('next')
var voltar = document.getElementById('voltar')

for(let i=0; i < quant.length; i++){
    var div = document.createElement('div')
    div.id = i
    balss.appendChild(div)
}
document.getElementById('0').classList.add('videoAtual')

var pos = documente.querySelectorAll('.balls div')

for(let i=0; i< pos.length; i++){
    pos[i].addEventListener('click' , function(){
        atual = pos[i].id
        slide()
    })
}

voltar.addEventListener('click', ()=>{
    atual--
    slide()
})
next.addEventListener('click', ()=>{
    atual++
    slide()
})

function slide(){
    if(atual >= quant.length){
        atual = 0
    }
    else if(atual < 0){
        atual = quant.length-1
    }
    document.querySelector('.videoAtual').classList.remove('.videoAtual')
    imagem.style.marginLeft = -1024*atual+'px'
    document.getElementById(atual).classList.add('videoAtual')
}
slide(0)