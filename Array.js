// First Question
// let arr = [1, 2, 3, 4]
// arr.push(2)
// console.log(arr)

//Second Question
// let arr = [1, 2, 3, 4]
// do{
//     arr.push(2,3,0)
// }while(!arr.includes(0))
// console.log(arr)

//Third Question
// let arr = [1, 2, 3, 40]
// let a=arr.filter((item)=>{
//     return item%10==0
// })
// console.log(a)

//Forth Question
// let arr = [1, 2, 3, 4]
// let a=arr.map((item)=>{
//     return item*item
// })
// console.log(a)

//Fifth Question
let arr = [1, 2, 3, 4, 5]
let a = arr.reduce((fr,sr) => {
    return fr*sr
})
console.log(a)