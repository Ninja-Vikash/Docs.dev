class Triangle {
    constructor (b, h){
        this.b = b;
        this.h = h;
    }

    area (){
        const val = 0.5 * this.b * this.h;
        return `Area : ${val}`;
    }
}

export default Triangle