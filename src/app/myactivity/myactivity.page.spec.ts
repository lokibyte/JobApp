import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyactivityPage } from './myactivity.page';

describe('MyactivityPage', () => {
  let component: MyactivityPage;
  let fixture: ComponentFixture<MyactivityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyactivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
