// using Self Pattern
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function() {
//         let self = this;
//         this.students.forEach(function(student) {
//             console.log(self.title + ": " + student);
//         });
//     }
// };


// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function() {
//         this.students.forEach(stu => function(student) {
//             console.log(this.title + ": " + student);
//         }.apply(this,[stu]));
//     }
// };

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        const f = function(student) {
            console.log(this.title + ": " + student);
        };
        this.students.forEach(stu => f.apply(this,[stu]));
    }
};



group.showList();