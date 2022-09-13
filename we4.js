let arr=[2,3,4]

let x=arr.reduce(function(acc,el){
    let y=acc*el
    return y
})
console.log(x)