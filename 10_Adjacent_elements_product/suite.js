const prepare = () => {
    const input = [];
    input[0] = [...Array(10000000)].map(() => Math.floor(Math.random() * 1000));
    console.log(input);
    return input;
}

    
const fs = [
    (input) => {
        let [nums] = input;

        return nums.reduce((accumulator, currentValue, index, array) => Math.max(accumulator, currentValue * (array[index + 1] || 0)));
    },

    (input) => {
        let [nums] = input;

        let max = -Infinity;
        for ( let i = 0; i < nums.length - 1; i++) {
            max = Math.max(max, nums[i] * nums[i+1]);
        } 
        return max;
    },


];