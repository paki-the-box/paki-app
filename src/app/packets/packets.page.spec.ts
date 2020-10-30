import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacketsPage } from './packets.page';

describe('PacketsPage', () => {
  let component: PacketsPage;
  let fixture: ComponentFixture<PacketsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacketsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
