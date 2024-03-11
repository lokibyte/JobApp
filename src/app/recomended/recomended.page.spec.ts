import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecomendedPage } from './recomended.page';

describe('RecomendedPage', () => {
  let component: RecomendedPage;
  let fixture: ComponentFixture<RecomendedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecomendedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
