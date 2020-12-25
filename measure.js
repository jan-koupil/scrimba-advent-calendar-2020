function measure(fs, input) {
    const result = [];

    for (f of fs) {
        performance.mark("start");
        const output = f(input);
        performance.mark("end");
        
        performance.measure("start to end", "start", "end");
        

        const out = {
            duration: performance.getEntriesByType("measure")[0].duration,
        };

        result.push(out);

        performance.clearMarks();
        performance.clearMeasures();
    }

    return result;
}