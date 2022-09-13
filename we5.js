let arr=[1,2,3,4]

let x=arr.filter(function(el){
    let y=el%2==1
    return y
}).reduce(function(acc,el){
    let z=acc+el
    return z
})
console.log(x)