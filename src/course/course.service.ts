import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
    getAllCourse() {
        return {
            message: "All courses fetech sucessfully",
            data: [],
        };
    }
    getCourseById(id: string) {
        return {
            message: "Coure feteched sucessfully",
            id,
        };
    }
    createCourse(dto: CreateCourseDto) {
        return {
            message: "Course created sucessfully",
            data: dto,
        };
    }
    updateCourse(id: string, dto: UpdateCourseDto) {
        return {
            message: "Course updated sucessfully",
            id,
            data: dto,
        };
    }
    patchCourse(id: string, dto: UpdateCourseDto) {
        return {
            message: "Course Update sucessfully",
            id,
            updatedFields: Object.keys(dto),
        };
    }
    deleteCourse(id: string) {
        return {
            messsage: "Course deleted sucessfully",
            id,
        };
    }
    uploadCourseMaterial(id: string, file: Express.Multer.File) {
        return {
            message: "Materail Uploaded sucessfully",
            courseId: id,
            filename: file.filename,
            path: file.path,
        };
    }
}
