import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './components/navi/navi.component';
import { BlogPostPageComponent } from "./components/blog-post-page/blog-post-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NaviComponent, BlogPostPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BlogManagementSystemFront';
}
