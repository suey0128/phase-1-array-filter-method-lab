// Code your solution here


function findMatching(driverArray, name) {
    return driverArray.filter(function (element) {return element.toUpperCase() === name.toUpperCase()})
};
   
function fuzzyMatch (driverArray, startingLetter) {
    // console.log(driverArray, name);
    return driverArray.filter(function(element) {return element.startsWith(startingLetter)});
 }

function matchName (driverObj, driverName) {
    // console.log(driverObj, name);
    for (const element in driverObj) {
        return driverObj.filter(function(element) {return element.name === driverName});
    }
}