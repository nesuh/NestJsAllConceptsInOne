import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private configService: NestConfigService) {}

  get databaseUrl(): string {
    const username = this.configService.get<string>('DATABASE_USERNAME');
    const password = this.configService.get<string>('DATABASE_PASSWORD');
    const host = this.configService.get<string>('DATABASE_HOST');
    const port = this.configService.get<number>('DATABASE_PORT');
    const database = this.configService.get<string>('DATABASE_NAME');

    if (!username || !password || !host || !port || !database) {
      throw new Error('Database configuration is incomplete.');
    }

    return `postgres://${username}:${password}@${host}:${port}/${database}`;
  }
}
