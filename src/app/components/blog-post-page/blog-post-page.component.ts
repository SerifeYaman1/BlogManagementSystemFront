import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../models/blogPost';
import { CommonModule } from '@angular/common';
import { BlogPostResponseModel } from '../../models/blogPostResponseModel';

@Component({
  selector: 'app-blog-post-page',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './blog-post-page.component.html',
  styleUrl: './blog-post-page.component.css'
})
export class BlogPostPageComponent implements OnInit {
  posts: BlogPost[] = [];
  blogPostResponseModel:BlogPostResponseModel={
    data: this.posts,
    message:"",
    success:true
  };
  apiUrl = "http://localhost:8080/api/blogposts/getAll";
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.getBlogPosts();
    console.log("Init çalıştı")
  }
  getBlogPosts() {
    this.httpClient
    .get<BlogPostResponseModel>(this.apiUrl)
    .subscribe((response)=> {
      this.posts=response.data;
    });
  }
}
