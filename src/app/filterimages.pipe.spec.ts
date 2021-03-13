import { FilterimagesPipe } from './filterimages.pipe';
import { ImageService } from './image.service';

describe('FilterimagesPipe', () => {
  let pipe: FilterimagesPipe;
  let service: ImageService;
  const items = [];


  beforeAll(() => {
    pipe = new FilterimagesPipe();
    service = new ImageService();
    service.getImages().forEach(element => {
      items.push(element);
    });
  });

  it('Debe crear la instancia del pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('Debe filtrar por la etiqueta all y retornar todos los elementos', () => {
    const filteredResult = pipe.transform(items, 'all');
    expect(filteredResult.length).toBe(5);
  });
});
