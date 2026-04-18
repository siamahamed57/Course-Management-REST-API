import { Controller, Get, Param, Post } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService){}
        @Get()
        getAllCourse(){
            return this.courseService.getAllCourses();
        }
       @Get(':id')
        getCourseById(@Param('id')id: string){
            return this.courseService.getCourseById(id);
        }
       @Post()
       createCourse(name:string, code:string ){
        return this.courseService.createCourse(name, code);
        }
}
