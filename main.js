// 1-masala

// function myrace(promises) {
//   return new Promise((resolve, reject) => {
//     for (const p of promises) {
//       Promise.resolve(p).then(resolve).catch(reject);
//     }
//   });
// }
// const p1 = new Promise((resolve) =>
//   setTimeout(() => resolve("birinchi promise resolve boldi"), 3000)
// );
// const p2 = new Promise((resolve) =>
//   setTimeout(() => resolve("ikkinchi promise resolve bo'ldi"), 2000)
// );
// const p3 = new Promise((resolve) =>
//   setTimeout(() => resolve("uchinchi promise  resolve boldi"), 1999)
// );

// myrace([p1, p2, p3])
//   .then((result) => console.log(result))
//   .catch((error) => console.log("xato", error));



// 2-masala

// class animal {
//     constructor (name) {

//         if (new.target === animal) {
//             throw new Error ("error")
//         }
//         this.name = name
//     }

//     sound () {
//         throw new Error ("error")
//     }
// }

// class dog extends animal {
//     sound () {
//      return `${this.name} says: woof`
//     }
// }

// class cat extends animal {
//     sound () {
//         return `${this.name} says: meow`
//     }
// }

// class parrot extends animal {
//     sound () {
//         return `${this.name} says: I'm parrot but i can speak like people`
//     }
// }

// const dogs = new dog ("rex")
// const cats = new cat ("kichkintoy")
// const parrots = new parrot ("kokosh")

// console.log(dogs.sound());
// console.log(cats.sound());
// console.log(parrots.sound());



// 3-masala

// class methods {
//   static square(num) {
//     return num * num;
//   }

//   static average(arr) {
//     let res = 0;

//     for (let i = 0; i < arr.length; i++) {
//       res += arr[i];
//     }
//     (res / arr.length).toFixed(2);
//     return res;
//   }

//   static diffOfBiggestAndsmallest(arr2) {
//     let biggest = -Infinity;
//     let smallest = Infinity;
//     for (let i = 0; i < arr2.length; i++) {
//       if (biggest < arr2[i]) {
//         biggest = arr2[i];
//       }
//       if (smallest > arr2[i]) {
//         smallest = arr2[i];
//       }
//     }
//     return biggest - smallest;
//   }
// }

// console.log(methods.square(12));
// console.log(methods.average([1, 5, 3, 7, 8, 12, 34, 43]));
// console.log(methods.diffOfBiggestAndsmallest([12, 5, 2, 8, 777, 196, 43]));



// 4-masala

// class person {
//   #name;
//   #surname;
//   #age;
//   constructor(name, surname, age) {
//     this.#name = name;
//     this.#surname = surname;
//     this.#age = age;
//   }

//   get name() {
//     return this.#name;
//   }
//   get surname() {
//     return this.#surname;
//   }
//   get age() {
//     return this.#age;
//   }

//   set name(newName) {
//     if (typeof newName !== "string") {
//       throw new Error("ism string typeda bolishi kerak");
//     }
//     this.#name = newName;
//   }

//   set surname(newSurname) {
//     if (typeof newSurname !== "string") {
//       throw new Error("familya string taypda bolishi kerak");
//     }
//     this.#surname = newSurname;
//   }

//   set age(newAge) {
//     if (typeof newAge !== "number" || newAge < 0) {
//       throw new Error("raqam xato kiritilgan");
//     }
//     this.#age = newAge;
//   }
// }

// const p1 = new person("Behzod", "Abdullayev", 18);
// console.log(p1.name);
// console.log(p1.surname);
// console.log(p1.age);

// p1.name = "sardor";
// p1.surname = "xudoyberganov";
// p1.age = 114;
// console.log(p1.name);
// console.log(p1.surname);
// console.log(p1.age);
