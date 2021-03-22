
const array = [2,3,6,9,8,1,5,10,11,7,4,12];
let counter = 0;

// O(n) line search
const lineAlgorithm = (array, elem)=>{
    for(let i=0;i<array.length;i++){
        counter++;
        if(array[i]===elem) return i;
    }
    return null;
}
console.log(lineAlgorithm(array, 8),  counter);