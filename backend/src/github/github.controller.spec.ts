import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';

import { GithubController } from './github.controller';
import { GitHubBranch, GitHubCommit } from './github.interface';
import { GithubService } from './github.service';
import { mockGitHubBranches, mockGitHubCommits } from '../mocks/github.mocks';

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
            getBranches: jest.fn(),
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

  it('should call getBranches on GithubService with correct parameters', (done) => {
    const mockBranches: GitHubBranch[] = mockGitHubBranches;
    jest
      .spyOn(githubService, 'getBranches')
      .mockImplementation(() => of(mockBranches));

    const username = 'testUser';
    const repo = 'testRepo';

    controller.getBranches(username, repo).subscribe((data) => {
      expect(data).toEqual(mockBranches);
      done();
    });

    expect(githubService.getBranches).toHaveBeenCalledWith(username, repo);
  });
});
