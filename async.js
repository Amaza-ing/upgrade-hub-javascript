console.log("Async js");

// setTimeout(() => {
//   console.log("Console log dentro de setTimeout()");
// }, 2000);

// console.log("Console log fuera");

// Promesas

const condition = true;

// const myPromise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve();
//   } else {
//     reject();
//   }
// })

// myPromise
//   .then(() => console.log("La promesa se ha resuelto"))
//   .catch(() => console.log("Ha habido un error"))

const recipe = [
  "Cortar las verduras",
  "Meterlas al horno",
  "Limpiar la carne",
  "Cocinar la carne en la sartén",
  "Mezclar la verdua y la carne"
]

function getRecipeStep(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      console.log(recipe[step]);

      if (recipe[step]) {
        resolve();
      } else {
        reject("Ha habido un error");
      }

    }, 1000)
  });
}

// sintaxis .then

// getRecipeStep(0)
//   .then(() => getRecipeStep(1))
//   .then(() => getRecipeStep(2))
//   .then(() => getRecipeStep(3))
//   .then(() => getRecipeStep(4))
//   .then(() => console.log("Buen provecho!"))
//   .catch((errorMsg) => console.log(errorMsg));


// sintaxis async/await

async function getCompleteRecipe() {
  try {
    await getRecipeStep(0);
    await getRecipeStep(1);
    await getRecipeStep(2);
    await getRecipeStep(3);
    await getRecipeStep(4);
    console.log("Buen provecho!");
  } catch(errorMsg) {
    console.log(errorMsg)
  }
}

// getCompleteRecipe();


// fetch()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch(() => console.log("Error"))

