import { Service, DOCUMENT, inject } from '@angular/core';
import { Employee } from './employee';

@Service()
export class Employees {
  private storage = inject(DOCUMENT).defaultView!.localStorage;

  create(employee: Employee) {
    const employees = this.storage.getItem('sfs') ?? '[]';
    this.storage.setItem('sfs', JSON.stringify(
      [...JSON.parse(employees), employee])
    );
  }

  getAll(): Employee[] {
    return JSON.parse(this.storage.getItem('sfs')!);
  }
}
