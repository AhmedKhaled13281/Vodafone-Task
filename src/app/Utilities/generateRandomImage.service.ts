import { env } from '../../enviroments/env';

export class RandomImage {
  private apiUrl: string = env.UNSPLASH_BASE_URL;

  getRandomImage() {
    const randomImageId = Math.floor(Math.random() * 1000);
    return `${this.apiUrl}${randomImageId}`;
  }
}
