import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagenotfound404pageComponent } from './pagenotfound404page.component';

describe('Pagenotfound404pageComponent', () => {
  let component: Pagenotfound404pageComponent;
  let fixture: ComponentFixture<Pagenotfound404pageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagenotfound404pageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagenotfound404pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
