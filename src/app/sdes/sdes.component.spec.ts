import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdesComponent } from './sdes.component';

describe('SdesComponent', () => {
  let component: SdesComponent;
  let fixture: ComponentFixture<SdesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
