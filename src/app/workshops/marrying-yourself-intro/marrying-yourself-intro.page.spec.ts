import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarryingYourselfIntroPage } from './marrying-yourself-intro.page';

describe('MarryingYourselfIntroPage', () => {
  let component: MarryingYourselfIntroPage;
  let fixture: ComponentFixture<MarryingYourselfIntroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarryingYourselfIntroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarryingYourselfIntroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
