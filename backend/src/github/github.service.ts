import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Observable, catchError, map } from 'rxjs';
import { GitHubCommit } from './github.interface';

@Injectable()
export class GithubService {
  constructor(private httpService: HttpService) {}

  getCommits(
    username: string,
    repo: string,
    branch: string,
    limit: number,
    page: number,
  ): Observable<GitHubCommit[]> {
    return this.httpService
      .get<GitHubCommit[]>(`/repos/${username}/${repo}/commits`, {
        params: {
          sha: branch,
          per_page: limit,
          page,
        },
      })
      .pipe(
        map((response) => response.data),
        catchError((error) => {
          if (error.response?.status === HttpStatus.NOT_FOUND) {
            throw new HttpException(
              'Repository not found',
              HttpStatus.NOT_FOUND,
            );
          } else {
            throw new HttpException(
              'Internal server error',
              HttpStatus.INTERNAL_SERVER_ERROR,
            );
          }
        }),
      );
  }
}
