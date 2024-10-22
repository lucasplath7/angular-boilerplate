import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

const API_BASE_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private messages = new BehaviorSubject<any>([]);
  messages$ = this.messages.asObservable();

  constructor(private http: HttpClient) { }

  fetchMessages() {
    this.http.get(`${API_BASE_URL}/messages`).subscribe((messages: any) => {
      this.messages.next(messages);
    });
  }
}
