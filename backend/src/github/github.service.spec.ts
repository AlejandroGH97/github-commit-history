import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AxiosResponse } from 'axios';
import { of, throwError } from 'rxjs';

import { GithubService } from './github.service';
import { GitHubCommit } from './github.interface';

describe('GithubService', () => {
  let service: GithubService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GithubService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<GithubService>(GithubService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of commits', (done) => {
    const mockCommits: GitHubCommit[] = [
      {
        url: 'https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e',
        sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
        node_id:
          'MDY6Q29tbWl0NmRjYjA5YjViNTc4NzVmMzM0ZjYxYWViZWQ2OTVlMmU0MTkzZGI1ZQ==',
        html_url:
          'https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e',
        comments_url:
          'https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e/comments',
        commit: {
          url: 'https://api.github.com/repos/octocat/Hello-World/git/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e',
          author: {
            name: 'Monalisa Octocat',
            email: 'support@github.com',
            date: '2011-04-14T16:00:49Z',
          },
          committer: {
            name: 'Monalisa Octocat',
            email: 'support@github.com',
            date: '2011-04-14T16:00:49Z',
          },
          message: 'Fix all the bugs',
          tree: {
            url: 'https://api.github.com/repos/octocat/Hello-World/tree/6dcb09b5b57875f334f61aebed695e2e4193db5e',
            sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
          },
          comment_count: 0,
          verification: {
            verified: false,
            reason: 'unsigned',
            signature: null,
            payload: null,
          },
        },
        author: {
          login: 'octocat',
          id: 1,
          node_id: 'MDQ6VXNlcjE=',
          avatar_url: 'https://github.com/images/error/octocat_happy.gif',
          gravatar_id: '',
          url: 'https://api.github.com/users/octocat',
          html_url: 'https://github.com/octocat',
          followers_url: 'https://api.github.com/users/octocat/followers',
          following_url:
            'https://api.github.com/users/octocat/following{/other_user}',
          gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/octocat/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/octocat/subscriptions',
          organizations_url: 'https://api.github.com/users/octocat/orgs',
          repos_url: 'https://api.github.com/users/octocat/repos',
          events_url: 'https://api.github.com/users/octocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/octocat/received_events',
          type: 'User',
          site_admin: false,
        },
        committer: {
          login: 'octocat',
          id: 1,
          node_id: 'MDQ6VXNlcjE=',
          avatar_url: 'https://github.com/images/error/octocat_happy.gif',
          gravatar_id: '',
          url: 'https://api.github.com/users/octocat',
          html_url: 'https://github.com/octocat',
          followers_url: 'https://api.github.com/users/octocat/followers',
          following_url:
            'https://api.github.com/users/octocat/following{/other_user}',
          gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/octocat/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/octocat/subscriptions',
          organizations_url: 'https://api.github.com/users/octocat/orgs',
          repos_url: 'https://api.github.com/users/octocat/repos',
          events_url: 'https://api.github.com/users/octocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/octocat/received_events',
          type: 'User',
          site_admin: false,
        },
        parents: [
          {
            url: 'https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e',
            sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
          },
        ],
      },
    ];
    jest
      .spyOn(httpService, 'get')
      .mockImplementation(() => of({ data: mockCommits } as AxiosResponse));

    service.getCommits('username', 'repo', 'branch', 10, 1).subscribe({
      next: (commits) => {
        expect(commits).toEqual(mockCommits);
        done();
      },
      error: done.fail,
    });
  });

  it('should throw a NotFoundException for an invalid repository', (done) => {
    jest.spyOn(httpService, 'get').mockImplementation(() =>
      throwError(() => ({
        response: { status: HttpStatus.NOT_FOUND },
      })),
    );

    service.getCommits('not-found', 'repo', 'branch', 10, 1).subscribe(
      () =>
        done.fail('Expected method to throw HttpException, but it did not.'),
      (error) => {
        expect(error).toBeInstanceOf(HttpException);
        expect(error.status).toBe(HttpStatus.NOT_FOUND);
        done();
      },
    );
  });

  it('should throw an InternalServerErrorException for other errors', (done) => {
    jest.spyOn(httpService, 'get').mockImplementation(() =>
      throwError(() => ({
        response: { status: HttpStatus.INTERNAL_SERVER_ERROR },
      })),
    );

    service.getCommits('username', 'repo', 'branch', 10, 1).subscribe(
      () =>
        done.fail('Expected method to throw HttpException, but it did not.'),
      (error) => {
        expect(error).toBeInstanceOf(HttpException);
        expect(error.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
        done();
      },
    );
  });
});
