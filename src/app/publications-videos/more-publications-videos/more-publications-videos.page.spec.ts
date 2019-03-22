import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePublicationsVideosPage } from './more-publications-videos.page';

describe('MorePublicationsVideosPage', () => {
  let component: MorePublicationsVideosPage;
  let fixture: ComponentFixture<MorePublicationsVideosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorePublicationsVideosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorePublicationsVideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
