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

function evenOrOdd(number) {
    let num
    if(number > 0) {
        num = number%2
    }else {
        num = number* -1 %2
    }
    if(num === 0) {
        console.log('ok')
        return "Even"
    }else if(num === 1){
        console.log('not ok')
        return "Odd"
    }
}

evenOrOdd(-6)
