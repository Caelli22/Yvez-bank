import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SentPage } from './sent.page';

describe('SentPage', () => {
  let component: SentPage;
  let fixture: ComponentFixture<SentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
