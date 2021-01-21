import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsagerAddComponent } from './usager-add.component';

describe('UsagerAddComponent', () => {
  let component: UsagerAddComponent;
  let fixture: ComponentFixture<UsagerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsagerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsagerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
