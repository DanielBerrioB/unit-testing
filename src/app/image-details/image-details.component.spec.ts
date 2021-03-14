import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ImageDetailComponent } from './image-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageService } from '../image.service';
import { Router } from '@angular/router';
import { By } from "@angular/platform-browser";

describe('ImageDetailsComponent', () => {
  let component: ImageDetailComponent;
  let router: Router;
  let fixture: ComponentFixture<ImageDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([{ path: 'image/:id', component: ImageDetailComponent }])],
      declarations: [ImageDetailComponent],
      providers: [ImageService],
    });
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe ingresar a una url de una imagen valida y mostrarla en pantalla', fakeAsync(() => {
    router.navigate(['image/9']);
    tick();
    const compiled = fixture.debugElement;
    const titleContainer = compiled.queryAll(By.css('.img-container'));
  }));
});
