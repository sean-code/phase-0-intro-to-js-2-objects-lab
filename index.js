// Write your solution in this file!
// TEST ONE
let employee = {
    name: 'SamSpeedy',
    streetAddress: 'Abuja Nigeria',
}
// TEST TWO
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
// TEST THREE
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
    
}
// TEST FOUR
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key];
    return employee;
};