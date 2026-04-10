import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourse(): string {
        return 'Get all course -from service';
    }
    getCourseByID(id:string): string{
        return 'Get course with ID: ${id} -from service';
    }
    createCourse():string{
        return 'create course -from service';
    }
    updateCourse(id:string):string {
        return 'Update coruse ${id} -from service';
    }
    patchCourse(id:string):string{
        return 'Patch Course ${id} -from service'
    }
    deleteCourse(id:string):string{
        return 'Delete Course ${id} -from service';
    }
}
