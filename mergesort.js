function mergeSort(array) {
    if (array.length < 2) return array;
    var splits = split(array),
        left = splits[0],
        right = splits[1];

    return merge(mergeSort(left), mergeSort(right));
}
// var splitArr = [];
// var result = [];
// var splitDone = function(testArr) {
//     if (!Array.isArray(testArr)) {
//         return false;
//     }
//     for (var i = 0; i < testArr.length; i++) {
//         if (!Array.isArray(testArr[i])) {
//             return false;
//         }
//         if (testArr[i].length > 1) {
//             return false;
//         }
//     }
//     return true;
// }
// var NestedArrays = function(test) {
//     for (var i = 0; i < test.length; i++) {
//         if (Array.isArray(test[i])) {
//             return false;
//         }
//     }
//     return true;
// }

// //checks if the original arr still needs to be split into splitArr;
// if (!splitDone(arr)) {
//     for (var i = 0; i < arr.length; i++) {
//         splitArr = splitArr.concat(split(arr));
//         console.log(splitArr);
//     }
// }

// //if the splitting is done, begin merging/sorting into result;
// else result = result.concat(merge(splitArr[0], splitArr[1]));

// if (!NestedArrays(splitArr)) mergeSort(splitArr);

// //if merging is done, return resultl
// else return result;

//WHAT IF EXCESS ARRAY LAST VAL IS LESS THAN THE LAST VALL ON MERGED ARR?


function split(arr) {
    var result = [];
    var splitIndex = Math.floor(arr.length / 2);
    result[0] = arr.slice(0, splitIndex);
    result[1] = arr.slice(splitIndex);
    return result;
}

function merge(arr1, arr2) {
    var mergedArr = arr1.concat(arr2);
    return bubbleSort(mergedArr);
}