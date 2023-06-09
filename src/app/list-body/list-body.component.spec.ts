import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListBodyComponent } from './list-body.component';

describe('ListBodyComponent', () => {
  let component: ListBodyComponent;
  let fixture: ComponentFixture<ListBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
