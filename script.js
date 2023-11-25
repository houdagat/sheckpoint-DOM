let list1 = Array.from(document.getElementsByClassName('list1'));
let lists = Array.from(document.getElementsByClassName('lists'));
let mylist = Array.from(document.getElementsByClassName('mylist'));
let price = Array.from(document.getElementsByClassName('price'));
let counter = Array.from(document.getElementsByClassName('counter'));
let totalfin = document.getElementById('totalfin');


// function change color for heart 
function changeColor(col) {
  if (col.target.style.color !== 'red') {
    col.target.style.color = 'red'
    
  }
  else {
    col.target.style.color = 'black'
  }
}


// function plus
let plus = Array.from(document.getElementsByClassName('add'));
for (let i = 0; i <plus.length ; i++) {
    plus[i].addEventListener('click', function() {
  counter[i].innerHTML++
    })


  // fonction moins
  let minus = Array.from(document.getElementsByClassName('minus'));

  minus[i].addEventListener('click', function() {
    if(counter[i].innerHTML > 0) {
    counter[i].innerText--;
    }
  })
 
// we call our func here for heart change 
let heart = Array.from(document.getElementsByClassName('heart'))
heart[i].addEventListener('click', changeColor)



}
// function remove
let buttonremove = remove[i]
buttonremove.addEventListener( ' click ' , function(remove){
  let buttononclick = event.target
  buttononclick.parentElement.remove()
  price[i].innerHTML = 0 ;
})

// somme totale
let total = Array.from(document.getElementsByClassName('total'));
function calculateSum(){
  for (let i=0 ; i < mylist.length ; i ++){
    total[i].value = Number(price[i].innerText)* Number ( counter[i].innerText)
    somme += Number(price[i].innerText)* Number(counter[i].innerText)
      totalfin.value = somme ;
  }
}

// we create color up here
let heart = Array.from(document.getElementsByClassName( ' heart '));
heart[i].addEventListener( ' click ' , changeColor)

