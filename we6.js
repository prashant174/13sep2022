let arr=[1,2,3,4,5,6]

let a=arr.filter(function(el){
    return el%3==0
}).map(function(el){
    return el**3
}).reduce(function(acc,el){
    return acc+el
})
console.log(a)