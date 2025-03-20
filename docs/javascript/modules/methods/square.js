class Square {
    constructor (side){
        this.side = side
    }

    area (){
        const val = this.side * this.side
        return `Area : ${val}`
    }

    perimeter (){
        const val = this.side * 4
        return `Perimeter : ${val}`
    }
}

export default Square;