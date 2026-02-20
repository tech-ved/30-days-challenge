
    // Arrays 

// let arr = [1,3,2,5,4]
// arr[3] = 12;
// // console.log(arr[3])
// // console.log(arr)

// arr.push(3000)

// console.log(arr)


// arr.pop()

// console.log(arr)

// arr.shift()

// console.log(arr)

// let arr = [1,3,2,5,4]
// let newarr = arr.slice(0,4);
// console.log(newarr)


// function sum (a,b)
// {
//     return a+b;

// }

//         let ans = sum(2,3)
//         console.log(ans)

function addUnlimited(...nums){
let sum = 0;
    nums.forEach(function(val){
        sum = sum + val;
    }) 

    console.log(sum)
}

addUnlimited(1,2,3,4,5,6)