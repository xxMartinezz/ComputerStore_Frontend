import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComputerPage, Computer } from '../classes/computer';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  private restApiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getComputers(): Observable<ComputerPage>
  {
    return this.http.get<ComputerPage>(`${this.restApiUrl}/computerList`);
  }

  getComputerById(id: number): Observable<Computer>
  {
    return this.http.get<Computer>(`${this.restApiUrl}/computerList/${id}`);
  }

  addComputer(computer: Computer): Observable<Computer>
  {
    return this.http.post<Computer>(`${this.restApiUrl}/computerList`, computer);
  }

  deleteComputer(id: number): Observable<Computer>
  {
    return this.http.delete<Computer>(`${this.restApiUrl}/computerList/${id}`);
  }

}
