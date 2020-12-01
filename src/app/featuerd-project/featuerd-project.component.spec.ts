import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatuerdProjectComponent } from './featuerd-project.component';

describe('FeatuerdProjectComponent', () => {
  let component: FeatuerdProjectComponent;
  let fixture: ComponentFixture<FeatuerdProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatuerdProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatuerdProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
