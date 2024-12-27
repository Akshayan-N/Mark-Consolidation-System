import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  // Demo student info
  student = {
    name: 'Akshayan N',
    regNo: '7376222IT108',
    email: 'akshayan.it22@bitsathy.ac.in'
  };

  // Demo student marks for each year
  studentMarks = [
    {
      year: '1st Year',
      firstReview: { pmc: 50, guide: 25 },
      secondReview: { pmc: 55, guide: 28 },
      thirdReview: { pmc: 60, guide: 29 }
    },
    {
      year: '2nd Year',
      firstReview: { pmc: 52, guide: 26 },
      secondReview: { pmc: 58, guide: 27 },
      thirdReview: { pmc: 61, guide: 28 }
    },
    {
      year: '3rd Year',
      firstReview: { pmc: 53, guide: 27 },
      secondReview: { pmc: 59, guide: 29 },
      thirdReview: { pmc: 64, guide: 30 }
    },
    {
      year: '4th Year',
      firstReview: { pmc: 55, guide: 28 },
      secondReview: { pmc: 61, guide: 29 },
      thirdReview: { pmc: 66, guide: 30 }
    }
  ];

  // Calculate total marks for each year
  calculateTotal(mark: any): number {
    const totalPMC =
      mark.firstReview.pmc +
      mark.secondReview.pmc +
      mark.thirdReview.pmc;

    const totalGuide =
      mark.firstReview.guide +
      mark.secondReview.guide +
      mark.thirdReview.guide;

      const total = (totalPMC + totalGuide) / 3;
      return parseFloat(total.toFixed(2));
  }
}
