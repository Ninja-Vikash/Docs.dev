class Rectangle {
    constructor (height, breadth){
        this.height = height,
        this.breadth = breadth
    }

    area (){
        const val = this.height * this.breadth;
        return `Area : ${val}`
    }

    perimeter (){
        const val = 2 * (this.height + this.breadth);
        return `Perimeter : ${val}`
    }
}

export default Rectangle;