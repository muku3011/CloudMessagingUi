import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerApiTableComponent } from './server-api-table.component';

describe('ServerApiTableComponent', () => {
  let component: ServerApiTableComponent;
  let fixture: ComponentFixture<ServerApiTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerApiTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerApiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
