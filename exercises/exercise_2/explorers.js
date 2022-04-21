const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
]

//1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
const name_explorer=explorers.forEach((explorers)=>console.log(explorers.name));
console.log(name_explorer);
//2. Imprime el stack de cada explorer, usa FOR EACH
const stack_explorer=explorers.forEach((explorers)=>console.log(explorers.name,explorers.stack));
console.log(stack_explorer);
//3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const list_stack_explorer=explorers.map(explorers.forEach((explorers)=>console.log(explorers.stack)));
console.log(list_stack_explorer);
//4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const stack_js=explorers.filter((explorers)=>explorers.stack.includes("js"))
console.log(stack_js)
//5.Busca el primer explorer que sea de la CDMX, usa FIND
const ft_explorer=explorers.find(explorers=>explorers.city == "CDMX")
console.log(ft_explorer);
//6.Obtén la suma de todos los exercises_completed, usa REDUCE
const sum_exercises=explorers.reduce(
  (sum, explorers)=>(sum+=explorers.exercises_completed),0
);
console.log(sum_exercises);
//7.Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en 
//frontend como true, usa SOME
const finishFront = explorers.some(
  (res) => res.missions.frontend.exercisesFinished === true
);
console.log(finishFront);
//8.Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const finishOnBoarding=explorers.every((isFinished)=>isFinished===true)
console.log(finishOnBoarding);