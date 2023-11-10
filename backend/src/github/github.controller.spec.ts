import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';

import { GithubController } from './github.controller';
import { GitHubCommit } from './github.interface';
import { GithubService } from './github.service';
import { mockGitHubCommits } from '../mocks/github.mocks';

describe('GithubController', () => {
  let controller: GithubController;
  let githubService: GithubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubController],
      providers: [
        {
          provide: GithubService,
          useValue: {
            getCommits: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<GithubController>(GithubController);
    githubService = module.get<GithubService>(GithubService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call getCommits on GithubService with correct parameters', (done) => {
    const mockCommits: GitHubCommit[] = mockGitHubCommits;
    jest
      .spyOn(githubService, 'getCommits')
      .mockImplementation(() => of(mockCommits));

    const username = 'testUser';
    const repo = 'testRepo';
    const branch = 'main';
    const limit = 10;
    const page = 1;

    controller
      .getCommits(username, repo, branch, limit, page)
      .subscribe((data) => {
        expect(data).toEqual(mockCommits);
        done();
      });

    expect(githubService.getCommits).toHaveBeenCalledWith(
      username,
      repo,
      branch,
      limit,
      page,
    );
  });
});
