const students = [
    { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },
    { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },
    { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] }
];

// const res1 = students.filter(stu => stu.courses.includes('cs303'))
//     .reduce((acc, current, index, array) => {
//         let averageGrade = current.grades.reduce((initial, curr, ind, arr) => initial + (curr / arr.length), 0);
//         acc[current.name] = averageGrade;
//         return acc;
//     }, {});
// console.log(res1);


// const res2 = students.filter(stu => stu.courses.includes('cs303'))
//     .reduce(function(acc, current, index, array) {
//         let averageGrade = current.grades.reduce(function (initial, curr, ind, arr) {return initial + (curr / arr.length)}, 0);
//         acc[current.name] = averageGrade;
//         return acc;
//     }, {});
// console.log(res2)


const averageGrade = students.filter(function (student) { return student.courses.includes('cs303'); })
    .reduce(function (obj, current) {
        let average = current.grades.reduce(function (intial, currentGrade, gradeIndex, gradeArray) { return intial + (currentGrade / gradeArray.length); }, 0);
        obj[current.name] = average;
        return obj
    }, {})

console.log(averageGrade);


