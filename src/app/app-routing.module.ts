import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

/**
 * Defines the navigation routes for the application.
 * * - `/welcome`: Displays the {@link WelcomePageComponent} (Login/Signup).
 * - `/movies`: Displays the main movie gallery via {@link MovieCardComponent}.
 * - Empty path: Redirects automatically to `/welcome`.
 */
const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'movies', component: MovieCardComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
];

/**
 * The AppRoutingModule configures the injector and the server-side/client-side
 * navigation paths for the application.
 * * @remarks
 * This module uses the `RouterModule.forRoot` strategy to provide the routes
 * at the root level of the application.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
