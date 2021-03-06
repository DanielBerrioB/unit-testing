import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageDetailComponent } from './image-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageService } from '../image.service';

describe('ImageDetailsComponent', () => {
  let component: ImageDetailComponent;
  let fixture: ComponentFixture<ImageDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ ImageDetailComponent],
      providers: [ ImageService ],
    });
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
