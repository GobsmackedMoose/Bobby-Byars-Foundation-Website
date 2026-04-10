import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrancesProjectPage } from './frances-project.page';

describe('FrancesProjectPage', () => {
  let component: FrancesProjectPage;
  let fixture: ComponentFixture<FrancesProjectPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FrancesProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
