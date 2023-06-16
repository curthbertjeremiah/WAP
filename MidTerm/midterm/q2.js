let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
    
        function f(student){
            console.log(this.title + ": " + student);
        }

        // this.students.forEach( stu => f.apply(this, [stu]));   
        this.students.forEach( stu => f.call(this, stu));
    }
};

group.showList();

//apply + wrapper


//bind
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
    
//         this.students.forEach( function f(student){
//             console.log(this.title + ": " + student);
//         }.bind(this));
   
//     }
// };


//arrow function
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
        
//         this.students.forEach((student) =>{
//             console.log(this.title + ": " + student);
//         });
   
//     }
// };

//self pattern 

// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//         let self = this;
//         this.students.forEach(function (student) {
//             console.log(self.title + ": " + student);
//         });
   
//     }
// };