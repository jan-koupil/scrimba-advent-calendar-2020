const prepare = () => {
    const input = [];
    input[0] = [...Array(6000000)].map(() => Math.floor(Math.random() * 9));
    input[1] = 2;
    console.log(input);
    return input;
}

    
const fs = [
    (input) => {
        let [values, size] = input;

        const result = [];
        for (let i = 0; i < values.length; i += size) {
            result.push(values.slice (i, i + size ));
        }

        return result;
    },

    (input) => {
        let [values, size] = input;

        const result = [];
        for (let i = 0, j = 0; i < values.length; i += size, j++) {
            result[j]= values.slice (i, i + size );
          }

        return result;        
    },    
];