//This function is intended for sorted arrays, otherwise won't work
function isInSortedArray(array, value) {
    let lowIndex = 0;
    let highIndex = array.length - 1;
    if (value < array[lowIndex] || value > array[highIndex])
        return false;

    while (highIndex - lowIndex > 1) {
        const newIndex = Math.floor((lowIndex + highIndex) / 2);
        if (array[newIndex] == value)
            return true;
        else if (array[newIndex] < value)
            lowIndex = newIndex;
        else
            highIndex = newIndex;                
    }
    return array[highIndex] == value || array[lowIndex] == value;
}

//This function is intended for sorted arrays filled with many values
//roughly uniformly distributed
function isInUniformSortedArray(array, value) {
    let lowIndex = 0;
    let highIndex = array.length - 1;
    while (highIndex - lowIndex > 1) {
        let newIndex = Math.floor( 
            (value - array[lowIndex]) / (array[highIndex] - array[lowIndex]) * (highIndex - lowIndex) + lowIndex
        );
        if (newIndex >= highIndex)
            newIndex = highIndex - 1;
        else if (newIndex <= lowIndex)
            newIndex = lowIndex + 1;

        if (array[newIndex] == value)
            return true;
        else if (array[newIndex] < value)
            lowIndex = newIndex;
        else
            highIndex = newIndex;                
    }
    return array[highIndex] == value || array[lowIndex] == value;
}

const prepare = () => {
    const input = [];
    // input[0] = [1, 2, 3];
    // input[1] = [10, 20, 30, 40];
    // input[2] = 42;

    const arrSize = 1000000;
    const maxVal = 100 * arrSize;

    input[0] = [];
    for (let i = 0; i < arrSize; i++) {
        input[0].push(Math.floor(Math.random() * maxVal));
    }

    input[1] = [];
    for (let i = 0; i < arrSize; i++) {
        input[1].push(Math.floor(Math.random() * maxVal));
    }

    input[2] = (Math.floor(Math.random() * maxVal * 2));

    console.log(input);
    return input;
}

    
const fs = [
    (input) => {
        let [nums1, nums2, value] = input;

        return nums1.some((num1) => nums2.includes( value - num1));
    },

    (input) => {
        let [nums1, nums2, value] = input;
        
        let nums3 = [...nums2].sort()
        return nums1.some((num1) => isInSortedArray(nums3, value - num1));
    },

    (input) => {
        let [nums1, nums2, value] = input;

        let nums3 = [...nums2].sort()
        return nums1.some((num1) => isInUniformSortedArray(nums3, value - num1));
    },

];