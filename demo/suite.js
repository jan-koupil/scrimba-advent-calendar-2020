const prepare = () => null;

const fs = [
    () => {
        let memStart, memEnd;
        if (performance.memory) {
            memStart = performance.memory.usedJSHeapSize;
            console.log(performance.memory.usedJSHeapSize);
        }

        const arr = [];
        let j = 0;
        for (let i = 0; i < 10000000; i++){
            j++;
            // if (j >= 100)
                j %= 100;
                arr.push(j);
        }

        if (performance.memory) {
            memEnd = performance.memory.usedJSHeapSize;
            console.log(performance.memory.usedJSHeapSize);
            return {memory: memEnd - memStart};
        } else {
            return {memory: null};
        }        
    },

    () => {
        let memStart, memEnd;
        if (performance.memory)
            memStart = performance.memory.usedJSHeapSize;

        let j = 0;
        for (let i = 0; i < 10000000; i++){
            j++;
            if (j >= 100)
                j = 0;

        }

        if (performance.memory) {
            memEnd = performance.memory.usedJSHeapSize;
            return {memory: memEnd - memStart};
        } else {
            return {memory: null};
        }

    },    
];