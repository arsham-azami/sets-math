export default class Intersection{
    arrOne: number[]
    arrTwo: number[]
    newArr: number[]

    constructor(arrOne: number[], arrTwo: number[]){
       this.arrOne=arrOne
       this.arrTwo=arrTwo
       this.newArr=[]
    }

    private intersection(){
        for (let x = 0; x < this.arrOne.length; x++) { 
			if (this.arrTwo.includes(this.arrOne[x])) {
				this.newArr.push(this.arrOne[x]);
			}
		}
		return this.newArr;
	
    }

}