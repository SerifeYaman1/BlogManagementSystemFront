import { Component } from '@angular/core';
import { BlogPostPageComponent } from "../blog-post-page/blog-post-page.component";
import { NaviComponent } from "../navi/navi.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BlogPostPageComponent, NaviComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
