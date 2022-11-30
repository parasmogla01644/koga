import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsetComponent } from './groupset.component';

describe('GroupsetComponent', () => {
  let component: GroupsetComponent;
  let fixture: ComponentFixture<GroupsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
