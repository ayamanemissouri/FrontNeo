import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsagerCrudComponent } from './usager-crud.component';

describe('UsagerCrudComponent', () => {
  let component: UsagerCrudComponent;
  let fixture: ComponentFixture<UsagerCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsagerCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsagerCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
