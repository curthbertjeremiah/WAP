let products = [];
let id=1;

module.exports = class Products {

    constructor(id, title, price, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
    }

    save() {
        this.id = id++;
        products.push(this);
        return this;
    }

    update() {
        const index = products.findIndex(p => p.id === this.id);
        if (index > -1) {
            products.splice(index, 1, this);
            return this;
        } else {
            throw new Error('Product not found');
        }
    }

    static fetchAll() {
        return products;
    }

    static findById(productId) {
        console.log('searching for product ID');
        const index = products.findIndex(p => p.id === productId);
        if (index > -1) {
            return products[index];
        } else {
            throw new Error('Product not found');
        }
    }

    static deleteById(productId){
        const index = products.findIndex(p => p.id === productId);
        if(index > -1){
            products = products.splice(index,1);
        } else{
            throw new Error('Product to delete not found');
        }
    }

}