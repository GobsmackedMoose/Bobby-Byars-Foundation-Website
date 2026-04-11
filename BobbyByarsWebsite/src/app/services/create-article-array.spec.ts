import { TestBed } from '@angular/core/testing';

import { CreateArticleArray } from './create-article-array';

describe('CreateArticleArray', () => {
  let service: CreateArticleArray;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateArticleArray);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
