import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly PORT = 3000;
  private baseURL = `https://loginserver.azurewebsites.net`;

  constructor(private http: HttpClient, private router: Router) { }

  login(name: string, password: string) {
    this.http.post(this.baseURL + '/login', { name: name, password: password }).subscribe((res: any) => {
      //If the response isValid Is True So Navigate to Main Page Component
      if (res.isValid) {
        this.navigateToMainPage(res.name)
      }
    })
  }

  navigateToMainPage(name: string) {
    this.router.navigate(['/MainPage'], { state: { data: { name } } });
  }
}
