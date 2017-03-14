import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SjpsComponent } from './sjps.component';

describe('SjpsComponent', () => {
  let component: SjpsComponent;
  let fixture: ComponentFixture<SjpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SjpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
