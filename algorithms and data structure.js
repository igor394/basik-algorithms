
const arr1 = [2,3,6,9,8,1,5,10,11,7,4,12];
let counter1 = 0;

// O(n) line search
const lineAlgorithm = (array, elem)=>{
    for(let i=0;i<array.length;i++){
        counter1++;
        if(array[i]===elem) return i;
    }
    return null;
}
console.log(lineAlgorithm(arr1, 4),  counter1);

//O(log2n) binary search
const  arr2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let counter2 = 0;

const binaryAlgorithm = (array, elem)=>{
    let first = 0;
    let last = array.length;
    let  middle;
    let check = false;
    let positionElem = -1;
    while (check===false && first<=last){
        counter2++;
        middle = Math.floor((first+last)/2);
        if(array[middle]===elem){
            check = true;
            positionElem = middle;
            return positionElem;
        } else if ( elem < array[middle]){
            last = middle - 1;

        } else {
            first = middle + 1;
        }
    }
    return positionElem;
}
console.log(binaryAlgorithm(arr2, 8),  counter2);

// O(1/2n**)-->O(n**) selection search
let counter3 = 0;
const arr3 = [2,3,6,9,8,3,2,1,5,10,11,7,4,12,-5,-8,-9,16,99,-2,1,5,-7,6,7,9,11,2];

const selectSortSearch= array =>{
    for(let i=0;i<array.length;i++){
        let minIndx = i;
        for (let j=i+1;j<array.length;j++){
            if(array[j]<array[minIndx]){
                minIndx = j;
            }
            counter3++;
        }
        let acc = array[i];
        array[i] = array[minIndx];
        array[minIndx] = acc;
    }
    return array;
}
console.log(selectSortSearch(arr3),  counter3);

// O(n**) bubble sort search (less effective than 'selection', not have 1/2)
let counter4 = 0;

const bubbleSortSearch= array =>{
    for(let i=0;i<array.length;i++){
        for (let j=0;j<array.length;j++){
            if(array[j+1]<array[j]){
                let acc = array[i];
                array[j] = array[j+1];
                array[j+1] = acc;
            }
            counter4++;
        }
    }
    return array;
}
console.log(bubbleSortSearch(arr3),  counter4, arr3.length);