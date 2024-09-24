import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from '../service/tasks.service';
import { Task } from '../../entities/task.entity';
import { AuthGuard } from '../../auth/auth.guard';
import { ApiTags, ApiResponse, ApiBody, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Tasks')
@ApiBearerAuth()  // Adds Bearer Token option to the Swagger UI for these routes
@Controller('tasks')
@UseGuards(AuthGuard) // Protects the routes with the JWT Auth Guard
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiBody({ type: Task })
  @ApiResponse({ status: 201, description: 'Task created.' })
  create(@Body() task: Omit<Task, 'id'>) {
    return this.tasksService.create(task);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'List of tasks.' })
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Task found.' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  findOne(@Param('id') id: number) {
    return this.tasksService.findOne(id);
  }

  @Put(':id')
  @ApiBody({ type: Task })
  @ApiResponse({ status: 200, description: 'Task updated.' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  update(@Param('id') id: number, @Body() updatedTask: Partial<Task>) {
    return this.tasksService.update(id, updatedTask);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Task deleted.' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  delete(@Param('id') id: number) {
    return this.tasksService.delete(id);
  }
}
