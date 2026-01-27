import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type BookingResult = { message: string };

@Injectable({
  providedIn: 'root'
})
export class Data {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000';

  create(
    name: string, email: string, date: string, room: number
  ) {
    return this.http.post<BookingResult>(this.apiUrl + '/reservations',
      {
        name,
        email,
        start: date,
        room
      }
    );
  }

  ask(prompt: string) {
    return this.http.post<BookingResult>(this.apiUrl + '/reservations/ask', {
      prompt
    });
  }

  getRooms(date: string) {
    return this.http.post<number[]>(
      this.apiUrl + '/reservations/rooms', { start: date }
    );
  }
}
