import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatetaskComponent } from './updatetask.component';
 import { FormsModule } from '@angular/forms';
 import {RouterTestingModule} from '@angular/router/testing'
 import { HttpClientTestingModule} from '@angular/common/http/testing'

describe('UpdatetaskComponent', () => {
  let component: UpdatetaskComponent;
  let fixture: ComponentFixture<UpdatetaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetaskComponent ],imports:[FormsModule,RouterTestingModule,HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
