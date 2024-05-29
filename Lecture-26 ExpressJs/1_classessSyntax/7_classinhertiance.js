//syntactical sugar syntax
class vehicle{
    constructor(company){
        this.company=company;
    }
}

//car tab tak create nahi ho skti jab tak na create ho jate 
//ho jaaye
class car extends vehicle{
    constructor(company,name,price){
        super(company);
        this.name=name;
        this.price=price;
    }
}

class suv extends car{
    constructor(company,name,price,type){
        super(company,name,price);
        this.type=type;
    }
}

let maruti=new car("maruti","lord alto",100);
console.log(maruti);

let creta=new suv("hyundai","creta",50,"suv ");
console.log(creta);

