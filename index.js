// const people = [
//     {name: "Vlad", age: 25, budget: 1000000000},
//     {name: "Julia", age: 20, budget: 10000},
//     {name: "Anastasia", age: 15, budget: 0},
//     {name: "Oleksandr", age: 45, budget: 100000},
//     {name: "Ira", age: 40, budget: 100},
//     {name: "Kiril", age: 18, budget: 1000},
// ]

// for (let i = 0; i < people.length; i++){
//     console.log(people[i])
// }


// for (let person of people) {
//     console.log(person)
// }


// ForEach   (person, index, pArr)    // робить ітерацію для кожного елементу

// people.forEach(function(person, index, pArr){           // person = ключове слово для кожної ітерації; index = індекс ітерації в початковому ерреї (у нас це people), яку на даний момент проходить код  ; pArr = ключове слово еррея, який ми парсимо (у нас це people)
//     console.log(person);        //{name: 'Vlad', age: 25, budget: 1000000000}
//     console.log(index);         // 0   // використовується рідко
//     console.log(pArr)           // people(6)[{},{},{},{},{},{}]      // використовується рідко
// })

// people.forEach(person => console.log(person))

// Map      (person, index, pArr)         //  створюємо новий масив, який відразу можемо внести у нову змінну. Важливо хоча б щось повернути, return.


// const newPeople = people.map(person => {
//     return `${person.name} (${person.age})`
// })
// console.log(newPeople)

// Filter        (person, index, pArr)                // фільтруємо за потрібною нам умовою array. Застосовується до кожної ітерації

// const olds = people.filter(person => person.age > 20);
// console.log(olds) 
// let v = []
// for (let i = 0; i < people.length; i++){
//     if (people[i].age > 20){
//         v.push(people[i])
//     }
// }
// console.log(v)

// Reduce                              // використовується, якщо нам потрібно порахувати суму певного показника в кожній ітерації array    
// let acc = 0
// for (let i = 0; i < people.length; i++){
//    acc += people[i].budget
// }

// const amount = people.reduce( (total, person) =>{                       // person = ключ для кожної ітерації в елементі; total = ключ для змінної, яка буде в собі акумулювати потрібну нам суму
//         return total + person.budget
// }, 0)                                                       // 0 = початкове значення для total
// console.log(amount)

// const amount = people.reduce( (total, person) => total + person.budget, 0)


// Find                         //   шукаємо потрібний нам елемент за певною умовою
// const juli = people.find( person => person.name === "Julia")
// console.log(juli)


// FindIndex                   // шукаємо індекс елементу, який відповідає потрібному для нас критерію
// const juliIndex = people.findIndex( person => person.name === "Julia")
// console.log(juliIndex)





// const task = people
//                     .filter(person => person.budget > 1000)
//                     .map(person => {
//                         return {
//                             info: `${person.name} (${person.age})`,
//                             budget: Math.sqrt(person.budget)
//                         }
//                     })
//                     .reduce((total, person) => total + person.budget, 0)
// console.log(task)
