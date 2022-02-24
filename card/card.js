  const main= document.getElementById('main')
//  console.log(main)
const cardLoad =() =>{
     const inputField = document.getElementById('input-field')
     const error = document.getElementById('error-handle')
     const input = parseInt(inputField.value)
    //  console.log(input)

      inputField.value = ''

     if(isNaN(input) || (input=='')){
         error.innerText = 'Please give a number' 
         main.innerHTML ='' 
     }
    else if(input <=0){
      error.innerText ='give a positive number'
    }
    else{
        main.innerHTML =''
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${input}`)
        .then(res => res.json())
        .then(data => displayCard(data.cards))

         error.innerHTML =''
    }
 }

   const displayCard = (cards) =>{
    // console.log(cards)
     for(const card of cards){
         console.log(card)
         const div = document.createElement('div')
         div.classList.add('col-lg-4')
         div.classList.add('mb-3')
         div.innerHTML = `
         <div class="card" style="width: 18rem;">
         <img src="${card.image}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${card.code}</h5>
           <p class="card-text">${card.suit}</p>
           <button onclick="cardDetails('${card.code}')" class="btn btn-primary">Go somewhere</button>
         </div>
       </div>
         `
        main.appendChild(div)
     }
   }
