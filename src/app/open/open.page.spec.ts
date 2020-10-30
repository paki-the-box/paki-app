import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { OpenPage } from './open.page';

describe('LoginPage', () => {
  let component: OpenPage;
  let fixture: ComponentFixture<OpenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(OpenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
