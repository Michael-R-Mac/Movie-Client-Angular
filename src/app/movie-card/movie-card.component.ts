import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

/**
 * Component representing the movie card gallery.
 * * @remarks
 * This component is responsible for fetching movie data from the backend
 * using {@link FetchApiDataService} and rendering it in the UI.
 * It also includes the necessary Material Design modules for the layout.
 */
@Component({
  selector: 'app-movie-card',
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
  ],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  /**
   * Array that holds the movie data fetched from the API.
   */
  movies: any[] = [];

  /**
   * @param fetchApiData - Service used to handle API requests.
   */
  constructor(public fetchApiData: FetchApiDataService) {}

  /**
   * Angular lifecycle hook called after component initialization.
   * Initiates the process of fetching movies.
   */
  ngOnInit(): void {
    this.getMovies();
  }

  /**
   * Fetches the complete list of movies from the {@link FetchApiDataService}.
   * * @returns An array of movie objects.
   * @remarks
   * This method subscribes to the `getAllMovies` observable and updates
   * the `movies` state variable upon a successful response.
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }
}
