// Write your solution in this file!
let employee ={
    key: ' ',
    value: ' '
}; 

function updateEmployeeWithKeyAndValue(employee, key, value){
        const updateEmployee = {...employee};
            updateEmployee[key] = value;

            return updateEmployee;
 }

 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
             employee[key] = value;

         return employee
 }

 function deleteFromEmployeeByKey(employee, key){
    const deleteEmployee = {...employee}
        delete deleteEmployee.name

     return deleteEmployee
 }

  function destructivelyDeleteFromEmployeeByKey(employee, key){
      delete employee.name
    
          return employee
  }