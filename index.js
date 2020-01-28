const getMostFrequentCharacter = (string) => {
    if (!string) {
        return "";
    }

    const map = new Map();
    const revisedString = string.toLowerCase();

    for (let char of revisedString) {
        const count = map.has(char) ? map.get(char) + 1 : 1;
        map.set(char, count);
    }

    const maxCount = (Math.max.apply(null, [...map.values()]));

    for (let [key, value] of map) {
        if (value === maxCount) {
            return key;
        }
    }
};

