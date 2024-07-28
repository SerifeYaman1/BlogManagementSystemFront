import { Component } from '@angular/core';
import { BlogPostPageComponent } from "../blog-post-page/blog-post-page.component";
import { BasicLayoutComponent } from "../basic-layout/basic-layout.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BlogPostPageComponent, BasicLayoutComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
