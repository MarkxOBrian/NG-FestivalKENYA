import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicknmortyComponent } from './ricknmorty.component';

describe('RicknmortyComponent', () => {
  let component: RicknmortyComponent;
  let fixture: ComponentFixture<RicknmortyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RicknmortyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RicknmortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
