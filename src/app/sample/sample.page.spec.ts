import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePage } from './sample.page';

describe('SamplePage', () => {
  let component: SamplePage;
  let fixture: ComponentFixture<SamplePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
