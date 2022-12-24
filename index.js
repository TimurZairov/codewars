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
