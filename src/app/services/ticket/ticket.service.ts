import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { shared } from 'src/app/shared/shared';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  get(subject: string, description: string, proirity: number, computerId: number) {
    return from(
      fetch(
        `${shared.baseUrl}/CreateTicket/${subject}/${description}/${proirity}/${computerId}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'GET',
          mode: 'no-cors'
        }
      )
    )
  }
}
