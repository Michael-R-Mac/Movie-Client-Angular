/**
 * @module FetchApiDataService
 * This service provides methods to interact with the myFlix API.
 * It handles user registration, login, movie retrieval, and user profile management.
 */

import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

/** * Base URL for the movie API.
 */
const apiUrl = 'https://cf-movie-api.herokuapp.com/';

@Injectable({
  providedIn: 'root',
})
export class FetchApiDataService {
  /**
   * @param http - The HttpClient module for making HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Extracts data from the HTTP response.
   * @param res - The response object from the API.
   * @returns The body of the response or an empty object.
   */
  private extractResponseData(res: any): any {
    const body = res;
    return body || {};
  }

  /**
   * Handles user registration.
   * @param userDetails - An object containing the new user's information.
   * @returns An observable containing the API response.
   */
  public userRegistration(userDetails: any): Observable<any> {
    return this.http
      .post(apiUrl + 'users', userDetails)
      .pipe(catchError(this.handleError));
  }

  /**
   * Handles user login.
   * @param userDetails - An object containing the username and password.
   * @returns An observable containing the user data and token.
   */
  public userLogin(userDetails: any): Observable<any> {
    return this.http
      .post(apiUrl + 'login', userDetails)
      .pipe(catchError(this.handleError));
  }

  /**
   * Retrieves all movies from the database.
   * Requires a valid JWT token.
   * @returns An observable containing an array of all movies.
   */
  public getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies', {
        headers: new HttpHeaders({ Authorization: 'Bearer ' + token }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
   * Retrieves a single movie by its ID.
   * @param movieId - The unique ID of the movie.
   * @returns An observable containing the movie object.
   */
  public getMovie(movieId: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + `movies/${movieId}`, {
        headers: new HttpHeaders({ Authorization: 'Bearer ' + token }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
   * Retrieves director information by name.
   * @param directorName - Name of the director.
   * @returns An observable containing the director object.
   */
  public getDirector(directorName: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + `directors/${directorName}`, {
        headers: new HttpHeaders({ Authorization: 'Bearer ' + token }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
   * Retrieves genre information by name.
   * @param genreName - Name of the genre.
   * @returns An observable containing the genre object.
   */
  public getGenre(genreName: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + `genres/${genreName}`, {
        headers: new HttpHeaders({ Authorization: 'Bearer ' + token }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
   * Retrieves the current user's profile information.
   * @returns An observable containing the user object.
   */
  public getUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    return this.http
      .get(apiUrl + `users/${username}`, {
        headers: new HttpHeaders({ Authorization: 'Bearer ' + token }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
   * Adds a movie to the user's favorite list.
   * @param movieId - The ID of the movie to add.
   * @returns An observable containing the updated user object.
   */
  public addFavoriteMovie(movieId: string): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    return this.http
      .post(apiUrl + `users/${username}/movies/${movieId}`, null, {
        headers: new HttpHeaders({ Authorization: 'Bearer ' + token }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
   * Updates the user's information.
   * @param userDetails - The new user details.
   * @returns An observable containing the updated user object.
   */
  public editUser(userDetails: any): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    return this.http
      .put(apiUrl + `users/${username}`, userDetails, {
        headers: new HttpHeaders({ Authorization: 'Bearer ' + token }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
   * Deletes the user's account.
   * @returns An observable indicating the success of the deletion.
   */
  public deleteUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    return this.http
      .delete(apiUrl + `users/${username}`, {
        headers: new HttpHeaders({ Authorization: 'Bearer ' + token }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
   * Removes a movie from the user's favorite list.
   * @param movieId - The ID of the movie to remove.
   * @returns An observable containing the updated user object.
   */
  public deleteFavoriteMovie(movieId: string): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    return this.http
      .delete(apiUrl + `users/${username}/movies/${movieId}`, {
        headers: new HttpHeaders({ Authorization: 'Bearer ' + token }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
   * Standardized error handling for API requests.
   * @param error - The HttpErrorResponse object.
   * @returns A thrown error message.
   */
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`,
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
