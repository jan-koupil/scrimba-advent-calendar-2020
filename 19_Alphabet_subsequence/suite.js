const prepare = () => {
    const input = [];
    input[0] = "acdeghiklopqtuvwxyza";
    return input;
}

const n = 1000000;
    
const fs = [
    (input) => {
        function alphabetSubsequence(str) {
            for (let i = 1; i < str.length; i++) {
                if (str.charCodeAt(i) <= str.charCodeAt(i-1))
                    return false;
            }
            return true;
        }

        let [str] = input;
        for(let i = 0; i < n; i++) {
            alphabetSubsequence(str);
        }
    },

    (input) => {
        const alphabetSubsequence = (str) => str.split("").every( (element, index, array) => index == 0 || (element.charCodeAt(0) > array[index - 1].charCodeAt(0)) );

        let [str] = input;
        for(let i = 0; i < n; i++) {
            alphabetSubsequence(str);
        }
    },

];