function sum(arr) {
    return arr.filter(elem => elem > 20)
        .reduce((accu, elem) => accu + elem, 0);
}

console.log(sum([11, 21, 31, 41, 51]));

const getNewArray = function (arr) {
    return arr.filter(str => str.includes('a'))
        .filter(str => str.length >= 5);
}

const result = getNewArray(['Hello', 'abcdefg', 'abc']);
console.log(result);


const students = [
    { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },
    { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },
    { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] }
];

const result2 = students.filter(stu => stu.courses.includes('cs303'))
        .reduce((accu, stu) => {
            let average = stu.grades.reduce((avg, g, index, array) => avg + g/array.length, 0);
            accu[stu.name] = average;
            return accu;
        }, {});
console.log(result2);

/**
{

Quincy: 93.5,

 Sam: 86.5,

Katie: 71.5

}
 */

const obj = {};
let name = 'Quicy';
let average = 90;

// obj.name = average;
obj[name] = average;

console.log(obj);

// foo();
// function foo(){

// }

// bar();
// var bar = function(){

// }