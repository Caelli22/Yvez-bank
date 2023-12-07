import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginRealPage } from './login-real.page';

describe('LoginRealPage', () => {
  let component: LoginRealPage;
  let fixture: ComponentFixture<LoginRealPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginRealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
