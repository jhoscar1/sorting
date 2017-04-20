function bubbleSort(arr) {
    var wasSwapped = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i+1] && arr[i + 1] < arr[i]) {
            var replacements = swap(arr.slice(i, i+2));
            arr.splice(i,  2, replacements[0], replacements[1]);
            wasSwapped = true;
        }
    }
    if (wasSwapped) return bubbleSort(arr);
    else return arr;
}


// function swap(needsSort) {
//     console.log(needsSort);
//     var result = [];
//   //  var placeholder = needsSort[1];
//     result[1] = needsSort[0];
//     result[0] = needsSort[1];
//     console.log('result: ', result);
//     return result;
// }

// WTF is going on console.log??

function swap(needsSort) {
    //console.log(needsSort);
    var placeholder = needsSort[1];
    needsSort[1] = needsSort[0];
    needsSort[0] = placeholder;
    return needsSort;
}