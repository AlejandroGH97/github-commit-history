import { Module } from '@nestjs/common';
import { GithubService } from './github.service';
import { HttpModule } from '@nestjs/axios';
import { GithubController } from './github.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
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
