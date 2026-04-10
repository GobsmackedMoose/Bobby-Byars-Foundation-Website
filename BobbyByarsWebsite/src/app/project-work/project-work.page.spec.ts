import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectWorkPage } from './project-work.page';

describe('ProjectWorkPage', () => {
  let component: ProjectWorkPage;
  let fixture: ComponentFixture<ProjectWorkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectWorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
