import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { EnrollmentModule } from './enrollment/enrollment.module';

@Module({
  imports: [CourseModule, EnrollmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
