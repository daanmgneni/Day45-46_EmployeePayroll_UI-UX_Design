// UC4---RG
let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});
const getEmployeePayrollDataFromStorage = ()=>{
    return localStorage.getItem('EmployeePayrollList') ? 
    JSON.parse(localStorage.getItem('EmployeePayrollList')) : [] ;
}

//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
        if(empPayrollList.length ==0) return;
         // let employeePayrollData = createEmployeePayrollJSON()[0];
    const innerHtml = `${headerHtml}`;
        for (const empPayrollData of empPayrollList){
           innerHtml = `${innerHtml}
        
    
    <tr>
                    <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
                    <td>${empPayrollData._name}</td>
                    <td>${empPayrollData._gender}</td>
                    <td><div class="dept-label">${empPayrollData._department[0]}</div>
                         <div class="dept-label">${empPayrollData._department[1]}</div></td>
                         <td>${empPayrollData._salary}</td>
                         <td>${empPayrollData._startDate}</td>
                         <td>
                             <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="delete.png">
                             <img id="${empPayrollData._id}" onclick="update(this)" alt="edit" src="edit.png">
                         </td>
                </tr>`;
        }

    document.querySelector('#table-display').innerHTML = innerHtml;
}

// UC5
const getDeptHtml = (deptList) =>{
    let deptHtml = '';
    for (const dept of deptList){
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

// Remove Employee for emp Payroll
const remove = (node) => {
    let empPayrollData = empPayrollList.find(empData => empData._id == node.id);
    if(!empPayrollData) return;
    const index = empPayrollList
                  .map(empData => empData._id)
                  .indexOf(empPayrollData._id);
    empPayrollList.splice(index, 1);
    localStorage.setItem("EmployeePayrollList",JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
}// UC4
let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});
const getEmployeePayrollDataFromStorage = ()=>{
    return localStorage.getItem('EmployeePayrollList') ? 
    JSON.parse(localStorage.getItem('EmployeePayrollList')) : [] ;
}

//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
        if(empPayrollList.length ==0) return;
         // let employeePayrollData = createEmployeePayrollJSON()[0];
    const innerHtml = `${headerHtml}`;
        for (const empPayrollData of empPayrollList){
           innerHtml = `${innerHtml}
        
    
    <tr>
                    <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
                    <td>${empPayrollData._name}</td>
                    <td>${empPayrollData._gender}</td>
                    <td><div class="dept-label">${empPayrollData._department[0]}</div>
                         <div class="dept-label">${empPayrollData._department[1]}</div></td>
                         <td>${empPayrollData._salary}</td>
                         <td>${empPayrollData._startDate}</td>
                         <td>
                             <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="delete.png">
                             <img id="${empPayrollData._id}" onclick="update(this)" alt="edit" src="edit.png">
                         </td>
                </tr>`;
        }

    document.querySelector('#table-display').innerHTML = innerHtml;
}

// UC5
const getDeptHtml = (deptList) =>{
    let deptHtml = '';
    for (const dept of deptList){
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

// Remove Employee for emp Payroll
const remove = (node) => {
    let empPayrollData = empPayrollList.find(empData => empData._id == node.id);
    if(!empPayrollData) return;
    const index = empPayrollList
                  .map(empData => empData._id)
                  .indexOf(empPayrollData._id);
    empPayrollList.splice(index, 1);
    localStorage.setItem("EmployeePayrollList",JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
}
