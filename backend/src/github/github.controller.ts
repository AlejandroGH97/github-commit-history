import { Controller, Get, Param, Query } from '@nestjs/common';

import { GithubService } from './github.service';

@Controller({ path: 'github/repos' })
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get(':username/:repo/commits')
  getCommits(
    @Param('username') username: string,
    @Param('repo') repo: string,
    @Query('branch') branch?: string,
    @Query('limit') limit?: number,
    @Query('page') page?: number,
  ) {
    return this.githubService.getCommits(username, repo, branch, limit, page);
  }

  @Get(':username/:repo/branches')
  getBranches(
    @Param('username') username: string,
    @Param('repo') repo: string,
  ) {
    return this.githubService.getBranches(username, repo);
  }
}
