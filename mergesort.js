function mergeSort(arr) {
    var result = [];
    var splitDone = function(arr) {
        if (!arr) {
            return false;
        }
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].length > 1) {
                return false;
            }
        }
        return true;
    }

    var noNestedArrays = function(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                return false;
            }
        }
        return true;
    }
    var splitArr = [];
    if (splitDone(arr)) {
        console.log(splitArr);
        result = result.concat(merge(splitArr[0], splitArr[1]));
    }
    else {
        for (var i = 0; i < arr.length; i++){
            splitArr.concat(split(arr[i]));
        }
    }
    if (noNestedArrays(splitArr)){
        return result;
    }
    else {
        mergeSort(splitArr);
    } 
}

function split(arr) {
    var result = [];
    var splitIndex = Math.floor(arr.length/2);
    result[0] = arr.slice(0, splitIndex);
    result[1] = arr.slice(splitIndex);
    console.log(result);
    return result;
}

function merge(arr1, arr2){
    var mergedArr = arr1.concat(arr2);
    return bubbleSort(mergedArr);
}