import {HttpClient} from "@angular/common/http";
import {Register} from "../models/register.model";
import {catchError} from "rxjs";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Login} from "../models/login.model";

@Injectable(
  {providedIn: 'root'}
)
export class AdapterService {

  private BACKEND_URL = "http://localhost:8080/";

  constructor(private http: HttpClient,
              private router: Router) { }

  register(register: Register) {
    this.http.post<Register>(this.BACKEND_URL + "auth/register", register)
      .pipe(
        catchError(error => {
          console.error('An error accured during the registration.');
          throw error;
        })
      )
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }

  login(login: Login) {
    this.http.post<Login>(this.BACKEND_URL + "auth/login", login)
      .pipe(
        catchError(error => {
          console.error('An error accured during the login.');
          throw error;
        })
      )
      .subscribe(() => {
        this.router.navigate(['/']);
      })
  }
}
