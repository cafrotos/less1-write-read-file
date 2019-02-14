let studentNo = 1;
let fs = require('fs')

// tạo lớp sinh viên
class Student {
  constructor(name, studentId) {
    this.name = name;
    this.studentId = studentId
  }
}

//tạo lớp quản lí sinh viên với phương thức tạo sinh viên để quản lý, ghi ra file, đọc từ file
class StudentManager {
  constructor() {
    this.listStudent = []
  }
  createStudent(name) {
    this.listStudent.push(new Student(name, studentNo++));
  }

  writeToFile() {
    fs.writeFileSync('./data/listStudent.json', JSON.stringify(this)) //hàm lạ lạ này là biến 1 object thành 1 chuỗi string
  }

  readFile(path) {
    let data = fs.readFileSync(path, {encoding: 'utf8'});
    let listStudent = JSON.parse(data); // hàm này là để biến 1 chuỗi dạng string thành json (tức là kiểu object)
    Object.assign(this.listStudent, listStudent) // hàm này có sẵn của javascript với mục đích copy giá trị của object này vào object kia: Object.assign(<object đích>, <object nguồn>)
  }
}

let StudentManagerWrite = new StudentManager();

StudentManagerWrite.createStudent('Phuong')
StudentManagerWrite.createStudent('Hanh')
StudentManagerWrite.createStudent('Cafrotos')
StudentManagerWrite.createStudent('Thocon')
StudentManagerWrite.createStudent('Miuu')

StudentManagerWrite.writeToFile();

let StudentManagerRead = new StudentManager();

StudentManagerRead.readFile('./data/listStudent.json');
console.log("======> Object sau khi read từ file được ghi bên trên: ", StudentManagerRead)
console.log()
console.log("======> Sinh viên từ file được gán vào 1 object quản lý: ", StudentManagerRead.listStudent)