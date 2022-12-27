// function countBy(x, n) {
//     let z = [];
//     for(let i=1; i<=n; i++){
//         let num = x*i
//         z.push(num)
//     }
//     console.log(z)
//     return z;
// }
//
// countBy(1,10)


// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
// }
//
// XO("xo")
// XO("ooxx")
// XO("xxOo")
// XO("xxxm")
// XO("xooxx")
// XO("ooxXm")
// XO("asdasdadp")
// XO("zzoo")

// function findShort(s){
//     const arr = []
//     s.split(' ').forEach(item => {
//         arr.push(item.length)
//     })
//     return Math.min.apply(null, arr)
// }
//
// findShort('kdjfdskf jkdsjfklds fdfskfd')

// function litres(time) {
//     return Math.floor(time/0.5)
//     return 0;
// }
//
// litres(1787)


// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     // TODO
//     const km = mpg*fuelLeft
//     if(distanceToPump <= km){
//         return true
//     }else {
//         return false
//     }
// };
//
// zeroFuel(100, 50, 1)

// function numberToString(num) {
//     // Return a string of the number here!
//     console.log(num.toString())
// }
// numberToString(555)


// function lovefunc(flower1, flower2){
//     // moment of truth
//     if((flower1+flower2)%2 === 1){
//         return true
//     }else {
//         return false
//     }
// }
//
// lovefunc(10, 15)

// function invert(array) {
//     const invertArr = array.map((item) => {
//         if(item >= 0){
//             return +(`-${item}`)
//         }else if(item < 0) {
//             return item*-1
//         }
//     })
//     return invertArr
// }
//
// invert([1,2,3,4,-5])

// function evenOrOdd(number) {
//     let num
//     if(number > 0) {
//         num = number%2
//     }else {
//         num = number* -1 %2
//     }
//     if(num === 0) {
//         console.log('ok')
//         return "Even"
//     }else if(num === 1){
//         console.log('not ok')
//         return "Odd"
//     }
// }
//
// evenOrOdd(-6)

// function evenOrOdd(number) {
//     if(number%2 === 0){
//         console.log('ok')
//     }else {
//         console.log('not ok')
//     }
// }
//
// evenOrOdd(-7)

// function removeChar(str){
//     return  str.slice(0, -1).slice(1)
// };
//
// removeChar('person')

// let countSheep = function (num){
//     //your code here
//     let str = ''
//     for (let i = 1; i<=num; i++){
//         str +=`${i} sheep...`
//     }
//     console.log(str)
// }
// countSheep(0)

// function descendingOrder(n){
//     //...
//     const reverse = +n.toString().split('').reverse().sort((a, b) => b - a).join('')
//     console.log(reverse)
// }
// descendingOrder(123456789)

// let isSquare = function(n){
//     const sqrt = Math.sqrt(n)
//     if(Number.isInteger(sqrt)){
//         return true
//     }else {
//         return false
//     }
// }
//
// isSquare(25)

// function countSheeps(arrayOfSheep) {
//     // TODO May the force be with you
//     let count = 0
//     arrayOfSheep.map(item => {
//         if(item === true){
//             count++
//         }
//     })
//     console.log(count)
//     const str = `There are ${count} sheeps in total`
//     console.log(str)
//    return str
// }
// countSheeps([true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true ])


// function stringToArray(string){
//
//     // code code code
//     return string.split(' ')
//
// }

// function hero(bullets, dragons){
// //Get Coding!
//     const num = bullets/dragons
//     console.log(num)
//     if(num < 2){
//         console.log(false)
//     }else {
//         console.log(true)
//     }
// }
//
// hero(10, 5)

// function makeNegative(num) {
//     // Code?
//     return (num < 0) ? num : num* -1;
// }
//
// makeNegative(42)

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     // your code here
//     return Math.abs(dadYearsOld-sonYearsOld * 2)
//
// }
// twiceAsOld(55, 30)

// function positiveSum(arr) {
//     let sum = 0
//     for (let i =0; i < arr.length; i++){
//         if(arr[i] < 0) {
//             continue
//         }
//         sum = sum + arr[i]
//     }
//     return sum
// }
//
// positiveSum([1,-2,3,4,5])


function switchItUp(number){
//Write your own Code!
    switch (number){
        case 0: return "Zero";
        case 1: return 'One';
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five"
        case 6: return "Six"
        case 7: return "Seven"
        case 8: return "Eight"
        case 9: return "Nine"
        default: return 0
    }
}

switchItUp(5)
