// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function(button){
//   console.log(button);
//   button.addEventListener('click', function(e){
//     console.log(e);
//     console.log(e.target);
//     if(e.target.id === 'grey'){
//       body.style.backgroundColor = e.target.id;
//     }
//     if(e.target.id === 'white'){
//       body.style.backgroundColor = e.target.id;
//     }
//     if(e.target.id === 'blue'){
//       body.style.backgroundColor = e.target.id;
//     }
//     if(e.target.id === 'yellow'){
//       body.style.backgroundColor = e.target.id;
//     }
//   });
// })


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(event){
    switch(event.target.id){
      case 'grey' : body.style.backgroundColor = event.target.id
      break;

      case 'purple' : body.style.backgroundColor = event.target.id
      break;

      case 'yellow' : body.style.backgroundColor = event.target.id
      break;

      case 'blue' : body.style.backgroundColor = event.target.id
      break;
    }
  })
})

const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')


  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = 'Please give a valid height';
  }
})















