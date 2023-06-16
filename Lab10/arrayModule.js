Array.prototype.even = function(){
    return console.log(this.filter(evenNum => (evenNum % 2) === 0));
};

Array.prototype.odd = function() {
    return console.log(this.filter(oddNum => (oddNum%2) !== 0));
};

module.exports = {
    even : Array.prototype.even,
    odd : Array.prototype.odd
}