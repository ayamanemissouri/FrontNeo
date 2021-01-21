import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportsAddComponent } from './transports-add.component';

describe('TransportsAddComponent', () => {
  let component: TransportsAddComponent;
  let fixture: ComponentFixture<TransportsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
