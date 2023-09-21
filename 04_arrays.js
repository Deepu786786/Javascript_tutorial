const myArr = [1,2,3,4];
const myArr2 = new Array(1,2,3,4,5);


//Array methods

// myArr.push(5);
// myArr.push(6);

// myArr.pop();

// myArr.unshift(0); //add element in front
// myArr.unshift(-1); 

// myArr.shift(); //pop element from front

// // console.log(myArr.includes(9)); //checks if 9 present or not
// // console.log(myArr.includes(3));


// const stringArr = myArr.join() //make a string of the array

// // console.log(stringArr , '\n' , typeof stringArr);


// // console.log("A: " , myArr);
// const mynn1 = myArr.slice(1,3); //slice fetch the part from index 1 to 3(excluding 3)
// // console.log(mynn1);

// // console.log("B: ", myArr);

// const myn2 = myArr.splice(1,3); //splice modify the orginal array and removes the subarray from index 1 to 3(including 3)
// // console.log(myn2);
// // console.log("C: ", myArr);


//Spread operator


const myArr3 = [...myArr, ...myArr2]
// console.log(myArr3);

const myArr4 = [...myArr, ...myArr2, ...myArr3];
console.log(myArr4);


//nested arrays
const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]

const usable_another_array = another_array.flat(Infinity)
console.log(usable_another_array);


console.log(Array.isArray("Deepanshu"))
console.log(Array.from("Deepanshu"))
console.log(Array.from({name: "Deepanshu"}))
//It will give empty array because we have to specify
// if we want to make array from keys or keyvalues


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))



