import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AxiosResponse } from 'axios';
import { of, throwError } from 'rxjs';

import { GithubService } from './github.service';
import { GitHubCommit } from './github.interface';
import { mockGitHubCommits } from '../mocks/github.mocks';

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
    const mockCommits: GitHubCommit[] = mockGitHubCommits;
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
