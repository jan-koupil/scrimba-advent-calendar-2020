const generateRandomString = function (length) {
    let result = "";
    //const set = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";   
    const set = "abcdefghijklmnopqrstuvwxyz";   
    const chars = set.length;
    for (let i = 0; i < length; i++) {
      result += set[Math.floor(Math.random() * chars)];
    }
    return result;
  };
  

const prepare = () => {
    const input = [];
    input[0] = generateRandomString(10000000);
    return input;
}

    
const fs = [
    (input) => {
        let [str] = input;

        const vowels = ['a', 'e', 'i', 'o', 'u'];
        const letterValue = x => vowels.includes(x) ? 1 : 2;
        const reducer = (acc, x) => acc + letterValue(x);
        return str.split("").reduce( reducer, 0 ); 
    },

    (input) => {
        let [str] = input;

        const letterValue = x => {
            if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u')
                return 1;
            else
                return 2;
        }
        
        const reducer = (acc, x) => acc + letterValue(x);
        return str.split("").reduce( reducer, 0 );
    },

    (input) => {
        let [str] = input;
        const letterValue = x => {
                switch(x) {
                case 'a':
                case 'e':
                case 'i':
                case 'o': 
                case 'u':
                    return 1;
                default:
                    return 2;
            }
        }
        
        const reducer = (acc, x) => acc + letterValue(x);
        return str.split("").reduce( reducer, 0 );

    },

    (input) => {
        let [str] = input;

        const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
        const letterValue = x => vowels.has(x) ? 1 : 2;        
        
        const reducer = (acc, x) => acc + letterValue(x);
        return str.split("").reduce( reducer, 0 );
    },

];