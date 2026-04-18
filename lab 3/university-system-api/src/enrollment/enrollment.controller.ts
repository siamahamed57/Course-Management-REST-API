import { Controller, Get, Post } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';

@Controller('enrollment')
export class EnrollmentController {
    constructor(private readonly enrollmentService: EnrollmentService) {}
    @Get() 
    enrollStudent(){
       return this.enrollmentService.enrollStudent("Monir", "Bangladesh Studies");

    }
    @Post()
    createEnrollment(){
        return this.enrollmentService.enrollStudent("Khalil", "Introduction to Programming");
    }

}
