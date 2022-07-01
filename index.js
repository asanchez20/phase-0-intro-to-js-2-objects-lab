const employee = {
    name: "Alvin",
    streetAddress: "123 lone ln"
    }


function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
     
    delete employee.key;

    newEmployee[key] = employee.key;

    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
   delete employee.key
   employee[key] = employee.kay;
   return employee;
}