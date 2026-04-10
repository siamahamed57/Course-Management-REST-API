import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseInterceptors,UploadedFile,BadGatewayException, BadRequestException, } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';



@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService){}
    @Get()
        getAllCourse(){
            return this.courseService.getAllCourse();
        }
    
     @Get(':id')
        getCourseById(@Param('id')id: string){
            return this.courseService.getCourseById(id);
        }
     @Post()
     createCourse(@Body() dto:CreateCourseDto){
        return this.courseService.createCourse(dto);
     }
     @Put(':id')
     updateCourse(@Param('id') id:string,@Body() dto: UpdateCourseDto){
        return this.courseService.updateCourse(id,dto);
     }
      @Patch(':id')
     patchCourse(@Param('id') id:string,@Body() dto:UpdateCourseDto){
        return this.courseService.patchCourse(id,dto);
     }
      @Delete(':id')
     deleteCourse(@Param('id') id:string){
        return this.courseService.deleteCourse(id);
     }
     @Post(':id/upload')
     @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueName = Date.now() + '-' + file.originalname;
          cb(null, uniqueName);
        },
      }),
      limits: {
        fileSize: 2 * 1024 * 1024, // 2MB
      },
      fileFilter: (req, file, cb) => {
        const allowedTypes = /jpg|jpeg|png|pdf/;
        const ext = file?.originalname?.split('.').pop()?.toLowerCase();

        if ((!ext)) {
           return cb(new BadRequestException('Invalid file'), false);
        }  if (allowedTypes.test(ext)) {
        return cb(null, true);
      } else {
        return cb(
          new BadRequestException(
            'Only JPG, JPEG, PNG, PDF files are allowed',
          ),
          false,
        );
      }
      },
    }),
  ) uploadFile(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.courseService.uploadCourseMaterial(id, file);
  }
    }


