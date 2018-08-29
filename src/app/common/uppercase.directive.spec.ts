import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UppercaseDirective } from './uppercase.directive';

@Component({
  template: `<div appUppercase>toto</div>`
})
class TestUppercaseComponent {
}

describe('UppercaseDirective', () => {

  let fixture: ComponentFixture<TestUppercaseComponent>;
  let inputEl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestUppercaseComponent, UppercaseDirective]
    });
    fixture = TestBed.createComponent(TestUppercaseComponent);
    fixture.detectChanges();
    inputEl = fixture.debugElement.query(By.css('div'));
  });

  it(`should have the right textTransform attribut`, () => {
    expect(inputEl.nativeElement.style.textTransform).toBe('uppercase');
  });
});
