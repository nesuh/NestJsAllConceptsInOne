import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../../entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async create(taskData: Partial<Task>): Promise<Task> {
    const task = this.tasksRepository.create(taskData);
    return this.tasksRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

async findOne(id:number):Promise<Task | null>{

  return this.tasksRepository.findOne({where:{id}})
}

async update(id:number,updatedTask:Partial<Task>):Promise<Task | null>{
 const task =await this.findOne(id)

 if(task){
  Object.assign(task,updatedTask);
  return this.tasksRepository.save(task)
 }

}

async delete(id:number):Promise<void >{
  await this.tasksRepository.delete(id)
}

 }