import { Injectable } from '@nestjs/common';
import { CourseService } from 'src/course/course.service';



@Injectable()
export class EnrollmentService {
    constructor(private readonly courseService: CourseService) {}
    enrollStudent(studentName: string,coureseId: string){
        const course=this.courseService.getCourseById(coureseId);
        return {
             message :"enrollment successful",
             studentName,
             course,
             courseId: course.id,
        }
    } 

}


