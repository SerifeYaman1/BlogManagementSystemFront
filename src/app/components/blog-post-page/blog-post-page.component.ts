import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../models/blogPost';
import { CommonModule } from '@angular/common';
import { BlogPostService } from '../../services/blog-post.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-blog-post-page',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  providers:[BlogPostService],
  templateUrl: './blog-post-page.component.html',
  styleUrl: './blog-post-page.component.css'
})
export class BlogPostPageComponent implements OnInit {
  posts: BlogPost[] = [];
  dataLoaded=false;
  constructor(private blogPostService:BlogPostService) { }
  ngOnInit(): void {
    this.getBlogPosts();
    console.log("Init çalıştı")
  }
  getBlogPosts() {
    this.blogPostService.getBlogPosts().subscribe(response=>{
      this.posts=response.data
      this.dataLoaded=true;
    });
  }
}
