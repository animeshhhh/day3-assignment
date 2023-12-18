const students = []

function addDetails() {
    document.getElementById("form-details").style.display = 'block';
}

function addListDetails(event) {
    if(event.key=="Enter")
    {
        const studentName=document.getElementById("name").value;
        const studentAddress=document.getElementById("address").value;
        const studentBatch=document.getElementById("batch").value;
        let student = { name : studentName, address : studentAddress, batch : studentBatch};
        students.push(student);
        displayStudentOnList();
    }
}

function displayStudentOnList(){
    
    const studentList=document.getElementById("students-list");
    studentList.innerHTML="";
    for(let i=0;i<students.length;i++)
    {
        studentList.innerHTML+=`<li>${students[i].name}</li>`;
    }
    displayStudentCount();
    displayBatchB002();
}

function removeStudentDetails() {
    if(students.length > 0) {
        confirm('Are you sure you want to remove');
    }
    else {
        alert('No student to remove');
    }
    students.pop();
    displayStudentOnList();
    displayStudentCount() 
    displayBatchB002();
}

function displayStudentCount() {
  let count = students.length;
  document.getElementById("student-count").innerHTML=count;
}


function displayBatchB002(){
    const res = students.filter(std => std.batch.includes("B002"));
     document.getElementById("batch-count").innerHTML=res.length;
}


