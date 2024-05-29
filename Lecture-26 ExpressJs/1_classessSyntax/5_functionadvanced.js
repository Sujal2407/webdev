function vehicle(company){

}
function car(company,model){

}
car.prototype=Object.create(vehicle.prototype);
//establishes inheritance from the prototype of vehicle

car.prototype.constructor=car;
vehicle.prototype.constructor=vehicle;
