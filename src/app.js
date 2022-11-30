class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

class Triangle {

    constructor(length,height,width){
        this.length = length;
        this.height = height;
        this.width = width
    }

    getSideLength (){
        return this.length;
    }
    
    getSideHeight (){
        return this.height;
    }

    getSideWidth (){
        return this.width;
    }

    getSurfaceArea (){
        return (this.length * this.height) / 2;
    }

    getVolume () {
        return 1/2 * (this.length * this.height * this.width);
    }
}

module.exports = {
    Cube:Cube,
    Triangle:Triangle
}