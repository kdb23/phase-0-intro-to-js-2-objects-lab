const employee = {
    name:"Max",
    address: "123 Maple Ln",
};

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newObj={...employee};
    newObj [key]= value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value){
    const newObj={...employee};
    newObj[key]= value;
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}