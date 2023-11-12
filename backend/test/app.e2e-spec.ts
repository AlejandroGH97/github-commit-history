import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/github/repos/:username/:repo/commits (GET)', () => {
    return request(app.getHttpServer())
      .get('/github/repos/alejandrogh97/github-commit-history/commits')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  it('/github/repos/:username/:repo/branches (GET)', () => {
    return request(app.getHttpServer())
      .get('/github/repos/alejandrogh97/github-commit-history/branches')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  afterAll(async () => {
    await app.close();
  });
});
