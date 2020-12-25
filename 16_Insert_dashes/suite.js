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

        return str.replace(/\w(?=\w)/g, x => x + "-");
    },

    (input) => {
        let [str] = input;

        return str.split(" ").map( x => x.split("").join("-") ).join(" ");
    },


];