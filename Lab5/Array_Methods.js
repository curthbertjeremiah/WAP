const a = [10, 20, 30, 40, 20, 50, 10];

function sum(arr = []) {
    return arr.filter(n => n > 20).reduce((acc, current, index, array) => acc + current);
};

console.log(sum(a));

const getNewArray = function (str = []) {
    return str.filter(item => item.length >= 5).filter(item => item.includes('a'))
};

const b = ["Sunshine", "Elephant", "Guitar", "Pizza", "Ocean", "Whisper", "Mountain", "Star", "Chocolate", "Adventure", "Butterfly", "Thunder", "Rainbow", "Serenade", "Moonlight", "Laughter", "Firefly", "Enigma", "Harmony", "Velvet"];
console.log(getNewArray(b));


const getNewArray2 = (str = []) => str.filter(item => item.length >= 5).filter(item => item.includes('a'));

console.log("getNewArray2 = ", getNewArray(b));