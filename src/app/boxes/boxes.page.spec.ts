import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoxesPage } from './boxes.page';

describe('BoxesPage', () => {
  let component: BoxesPage;
  let fixture: ComponentFixture<BoxesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoxesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
