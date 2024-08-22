import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisansListeComponent } from './artisans-liste.component';

describe('ArtisansListeComponent', () => {
  let component: ArtisansListeComponent;
  let fixture: ComponentFixture<ArtisansListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtisansListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisansListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
