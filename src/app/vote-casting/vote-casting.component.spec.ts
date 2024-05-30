import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteCastingComponent } from './vote-casting.component';

describe('VoteCastingComponent', () => {
  let component: VoteCastingComponent;
  let fixture: ComponentFixture<VoteCastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoteCastingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoteCastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
