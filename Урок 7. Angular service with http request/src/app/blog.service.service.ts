import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDblogRequest, IDblogResponse } from './inter.face';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  private url = environment.BACKEND_URL;
  private api = { cards: `${this.url}/admin`}

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<IDblogResponse[]> {
    return this.http.get<IDblogResponse[]>(this.api.cards)
  }

  create(cards: IDblogRequest): Observable<IDblogResponse> {
    return this.http.post<IDblogResponse>(this.api.cards, cards);
  }

  update(cards: IDblogRequest, id: number): Observable<IDblogResponse> {
    return this.http.patch<IDblogResponse>(`${this.api.cards}/${id}`, cards)
  }
  
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api.cards}/${id}`)
  }
}
