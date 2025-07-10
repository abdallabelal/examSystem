import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ExamService } from '../../core/services/exam.service';
import { Exam } from '../../core/interface/exam';

@Component({
  selector: 'app-examhome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './examhome.component.html',
  styleUrl: './examhome.component.scss'
})
export class ExamhomeComponent  implements OnInit {
  private _examService = inject(ExamService);

  ngOnInit(): void {
    // Fetch exams from the service
    this._examService.getAll().subscribe({
      next: (data) => {
        console.log('Exams fetched successfully:', data);
      },
      error: (error) => {
        console.error('Error fetching exams:', error);
      }
    });
  }
  exams: Exam[] = [
    {
      id: 1,
      name: 'Math Exam',
      time: '2 hours',
      number: 101,
      description: 'Final term exam for mathematics'
    },
    {
      id: 2,
      name: 'Physics Exam',
      time: '1.5 hours',
      number: 102,
      description: 'Unit 1-3 assessment'
    },
        {
      id: 1,
      name: 'Math Exam',
      time: '2 hours',
      number: 101,
      description: 'Final term exam for mathematics'
    },
    {
      id: 2,
      name: 'Physics Exam',
      time: '1.5 hours',
      number: 102,
      description: 'Unit 1-3 assessment'
    },
        {
      id: 1,
      name: 'Math Exam',
      time: '2 hours',
      number: 101,
      description: 'Final term exam for mathematics'
    },
    {
      id: 2,
      name: 'Physics Exam',
      time: '1.5 hours',
      number: 102,
      description: 'Unit 1-3 assessment'
    },
        {
      id: 1,
      name: 'Math Exam',
      time: '2 hours',
      number: 101,
      description: 'Final term exam for mathematics'
    },
    {
      id: 2,
      name: 'Physics Exam',
      time: '1.5 hours',
      number: 102,
      description: 'Unit 1-3 assessment'
    }
  ];

  addExam() {
    const newExam: Exam = {
      id: Date.now(),
      name: 'New Exam',
      time: '1 hour',
      number: Math.floor(Math.random() * 1000),
      description: 'This is a new exam'
    };
    this.exams.push(newExam);
  }

  deleteExam(id: number) {
    this.exams = this.exams.filter(exam => exam.id !== id);
  }

  editExam(exam: Exam) {
    const newName = prompt('Enter new exam name:', exam.name);
    if (newName) {
      exam.name = newName;
    }
  }
}
