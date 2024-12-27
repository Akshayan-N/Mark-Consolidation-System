import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  reviewNumber: number = 0;
  batchYear: number = 0;
  semester: string = '';
  selectedFile: File | null = null;

  onFileChange(event: any) {
    const file: File = event.target.files[0];
    if (file && file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      this.selectedFile = file;
    } else {
      alert('Please upload a valid Excel file.');
    }
  }

  onSubmit() {
    if (this.selectedFile && this.reviewNumber && this.batchYear && this.semester) {
      console.log('Review Number:', this.reviewNumber);
      console.log('Batch Year:', this.batchYear);
      console.log('Semester:', this.semester);
      console.log('File:', this.selectedFile);

      // Implement the logic to upload the file to the server or process it here
    } else {
      console.log('Form is invalid');
    }
  }
}
