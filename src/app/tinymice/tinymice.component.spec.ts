import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinymiceComponent } from './tinymice.component';

describe('TinymiceComponent', () => {
  let component: TinymiceComponent;
  let fixture: ComponentFixture<TinymiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinymiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinymiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
