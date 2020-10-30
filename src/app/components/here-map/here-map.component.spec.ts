import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HereMapComponent } from './here-map.component';

describe('HereMapComponent', () => {
  let component: HereMapComponent;
  let fixture: ComponentFixture<HereMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HereMapComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HereMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
