const generateRandomString = function (length, randomString="") {
    randomString += Math.random().toString(20).substr(2, length);
    if (randomString.length > length) return randomString.slice(0, length);
    return generateRandomString(length, randomString);
  };
  
  

const prepare = () => {
    const input = [];
    input[0] = generateRandomString(15000);
    console.log(input);
    return input;
}

    
const fs = [
    (input) => {
        let [str] = input;
        return str.split("").reverse().join("");
    },

    (input) => {
        let [str] = input;

        let out = "";
        for (let i = str.length - 1; i >= 0; i--)
            out += str[i];

        return out;
    },    
];