var one_usd=1340;
var totalusd=100;
var totalmmk=200000;


console.log("Total MMK "+ (totalusd*one_usd));
console.log("Total usd (200000 mmk) "+ Math.floor(totalmmk/one_usd));




alert("Total usd (200000 mmk) = " + Math.floor(totalmmk / one_usd)+"\n Exchange rate(USD to MMK) =" + (totalusd * one_usd));

const employee={
    name: 'Eric',
    equipmentTraining: '',
}
if(!employee.equipmentTraining){
    console.log('Not authorized to operate machinery');
}
