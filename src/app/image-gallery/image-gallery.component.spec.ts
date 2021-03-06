import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryComponent } from './image-gallery.component';
import { ImageService } from '../image.service';
import { FilterimagesPipe } from '../filterimages.pipe';
import { By } from "@angular/platform-browser";

describe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryComponent, FilterimagesPipe],
      providers: [ImageService, FilterimagesPipe],
    });
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe crear las 5 imagenes y mostrarlas en pantalla', () => {
    const compiled = fixture.debugElement;
    const images = compiled.queryAll(By.css('img'));
    expect(images.length).toBe(5)
  });
});
