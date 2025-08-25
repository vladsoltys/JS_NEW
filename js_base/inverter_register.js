const invertCase = (str) => {
    let result = '';
    let i = 0;
    while (i < str.length) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
        i++;
    }
    return result;
}

console.log(invertCase("Hello World!"));