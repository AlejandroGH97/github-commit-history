import { Controller } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller({ path: 'github/repos' })
export class GithubController {
  constructor(private readonly githubService: GithubService) {}
}
