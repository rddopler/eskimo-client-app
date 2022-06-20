import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALaCarteMenuComponent } from './a-la-carte-menu.component';

describe('ALaCarteMenuComponent', () => {
  let component: ALaCarteMenuComponent;
  let fixture: ComponentFixture<ALaCarteMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ALaCarteMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ALaCarteMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
