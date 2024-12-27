import { Component } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css'],
})
export class GuideComponent {
  // Human-generated names demo
  students = [
    { name: 'Ananya Gupta', batchYear: 2024, semester: '1st Semester', reviewNumber: 1, marks: 85 },
    { name: 'Amit Patel', batchYear: 2024, semester: '1st Semester', reviewNumber: 2, marks: 78 },
    { name: 'Rohan Desai', batchYear: 2023, semester: '2nd Semester', reviewNumber: 1, marks: 92 },
    { name: 'Meera Iyer', batchYear: 2023, semester: '2nd Semester', reviewNumber: 2, marks: 88 },
    { name: 'Priya Singh', batchYear: 2022, semester: '3rd Semester', reviewNumber: 1, marks: 80 },
    { name: 'Vikram Chawla', batchYear: 2022, semester: '3rd Semester', reviewNumber: 2, marks: 82 },
  ];
}
