let prod = document.querySelectorAll('.demo');

Array.from(prod).forEach(function(item){
    item.addEventListener('mouseover' , function(){
        item.setAttribute('style' , 'box-shadow : 0px 0px 5px 5px #f1f1f1')
    })
     item.addEventListener('mouseout' , function(){
        item.setAttribute('style' , '')
    })
})



let title = document.querySelectorAll('title');

Array.from(title).forEach(function(item){
    item.textContent = 'Hadidas | Official'
})
