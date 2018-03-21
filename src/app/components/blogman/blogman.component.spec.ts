import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogmanComponent } from './blogman.component';

describe('BlogmanComponent', () => {
  let component: BlogmanComponent;
  let fixture: ComponentFixture<BlogmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
