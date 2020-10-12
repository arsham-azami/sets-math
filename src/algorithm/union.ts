export default class Union{
    arrOne: number[]
    arrTwo: number[]
    newArr: number[]

    constructor(arrOne: number[], arrTwo: number[]){
       this.arrOne=arrOne
       this.arrTwo=arrTwo
       this.newArr=[]
    }

    private union(): number[]{
        this.arrOne.forEach(num =>  this.newArr.push(num))
        for(let x = 0; x < this.arrOne.length; x++){
            if(this.arrTwo.includes(this.arrOne[x])){
               this.arrTwo.splice(x, 1)
            }else{
                this.newArr.push(this.arrTwo[x])
            }
        }
        return this.newArr
    }
}

// const setOne = new Union([23, 54, 65], [63, 88, 12])