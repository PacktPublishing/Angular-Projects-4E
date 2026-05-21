import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Building {
  id: string;
  address: string;
  apartments: number;
}

@Service()
export class Data {
  private http = inject(HttpClient);
  private buildingsUrl = 'http://localhost:3000/buildings';

  getBuilding(id: string) {
    return this.http.get<Building>(`${this.buildingsUrl}/${id}`);
  }

  getBuildings() {
     return this.http.get<Building[]>(this.buildingsUrl);
  }
}
