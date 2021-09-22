const transpose = function (matrix) {
    let newArr = []

    for (let i = 0; i < matrix[0].length; i++) {
        newArr.push([]);
    }
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            newArr[c][r] = matrix[r][c]
        }
    }
    return newArr
};




const findWord = (letters, word) => {
    const newWords = letters.map(ls => ls.join(''));
    for (const letters of newWords) {
        if (letters.includes(word)) return true;
    }
};

const wordSearch = (letters, word) => {
    if (findWord(letters, word)) {
        return true;
    } else if (findWord(transpose(letters), word)) {
        return true;
    }
    return false;
};

module.exports = wordSearch