  const loadDog =() =>{
      fetch('https://api.thedogapi.com/v1/breeds')
      .then(res =>res.json())
      .then(data => displayDog(data))
  }

   const displayDog = (dogs) =>{
       const dogDetails = document.getElementById('dog-details')
    //  console.log(dogs)
     for(const dog of dogs){
         console.log(dog)
         const div = document.createElement('div')
         div.classList.add('col-lg-4')
         div.innerHTML =`
         <img width="400px" height="250px" src="${dog.image.url}" class="card-img-top" alt="...">
             <div class="card-body">
              <h5 class="card-title">${dog.name}</h5>
              <p> ${dog.life_span}</p>
            </div>
         `
          dogDetails.appendChild(div)
     }
   }