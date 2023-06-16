const students = [
    { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },
    { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },
    { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] }
];

let studentGrades = students.filter(function (student) {return student.grades.includes('cs303') })
    .reduce(function(obj,currentStudent){
        let averageGrade = currentStudent.grades.reduce(function(initialGrade,currentGrade,gradeIndex,gradeArray){return initialGrade+(currentGrade/gradeArray.length);},0)
        obj[currentStudent.name]=averageGrade;
        return obj;},{});

        console.log(studentGrades);