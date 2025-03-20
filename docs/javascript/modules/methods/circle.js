class Circle{
    PI = Math.PI
    constructor (radius){
        this.radius = radius;
    }

    area (){
        const val = this.PI * this.radius * this.radius;
        return `Area : ${val}`
    }

    circumference (){
        const val = 2 * this.PI * this.radius;
        return `Circumference : ${val}`
    }
}

export default Circle;