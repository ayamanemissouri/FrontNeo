import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsagerUpdateComponent } from './usager-update.component';

describe('UsagerUpdateComponent', () => {
  let component: UsagerUpdateComponent;
  let fixture: ComponentFixture<UsagerUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsagerUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsagerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
