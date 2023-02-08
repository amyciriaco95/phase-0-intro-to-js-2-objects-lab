// Write your solution in this file!

const employee = {
    name: "Jane Doe",
    streetAddress: "46 Riverside Drive",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const updateInfo = {...employee};
    updateInfo[key] = value;
    return updateInfo;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}