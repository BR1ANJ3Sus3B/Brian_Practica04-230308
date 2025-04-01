import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Practice20Service {
  plants = ['Tulipan', 'Rosa', 'Hortensias'];

  getPlants(): string[] {
    return this.plants;
  }

  getPlant(id: number) {
    return this.plants[id];
  }
}
