const generateRandomString = function (length) {
    let result = "";
    const set = " abcdefghijklmnopqrstuvwxyz";       
    const chars = set.length;
    for (let i = 0; i < length; i++) {
      result += set[Math.floor(Math.random() * chars)];
    }
    console.log(result);
    return result;
  };

const prepare = () => {
    const input = [];
    input[0] = generateRandomString(1000000);
    return input;
}

    
const fs = [
    (input) => {
        let [str] = input;

        return str.split("").reduce((set, char) => set.add(char), new Set()).size;
    },

    (input) => {
        let [str] = input;

        return str.split("").reduce((map, char) => map.set(char, true), new Map()).size;
    },

    (input) => {
        let [str] = input;

        const unique = [];
        const chars = str.split("");
        for (let char of chars) {
            if (!unique.includes(char))
                unique.push(char);
        }
        return unique.length;    
    },

];