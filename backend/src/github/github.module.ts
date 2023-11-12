import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { GithubController } from './github.controller';
import { GithubService } from './github.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        baseURL: 'https://api.github.com',
        headers: {
          Authorization: `Bearer ${configService.get('GITHUB_TOKEN')}`,
          'X-Github-Api-Version': '2022-11-28',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [GithubController],
  providers: [GithubService],
})
export class GithubModule {}
