import { Module } from '@nestjs/common';
import { EnrollmentController } from './enrollment.controller';
import { EnrollmentService } from './enrollment.service';
import {CourseModule} from 'src/course/course.module'; 

@Module({
  imports: [CourseModule], 
  controllers: [EnrollmentController],
  providers: [EnrollmentService]
})
export class EnrollmentModule {}
