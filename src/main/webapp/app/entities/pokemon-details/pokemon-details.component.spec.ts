import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs'; // Import of from rxjs
import { PokemonDetailsComponent } from './pokemon-details.component';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { HttpClientModule } from '@angular/common/http';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;

  beforeEach(async () => {
    // Create a mock ActivatedRoute
    const mockActivatedRoute = {
      paramMap: of({ get: () => 'pokemonName' }), // Mock paramMap
    };

    await TestBed.configureTestingModule({
      declarations: [PokemonDetailsComponent],
      imports: [HttpClientModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }, // Provide mock ActivatedRoute
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
