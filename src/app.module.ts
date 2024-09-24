import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { TasksModule } from './tasks/task.module';
import { ConfigModule } from '@nestjs/config'; // Ensure this is imported
import { ConfigService } from './config/config.service';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    TasksModule,
  ],
  providers: [ConfigService, TypeOrmConfigService],
})
export class AppModule {}





































    // ClientsModule.register([
    //   {
    //     name: 'TASK_SERVICE',
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: [process.env.RMQ_URL],
    //       queue: 'task_queue',
    //       queueOptions: {
    //         durable: false,
    //       },
    //     },
    //   },
    // ]),
  // ],

