import { Component, OnInit } from '@angular/core';
import { ProfileNavComponent } from "../profile-nav/profile-nav.component";
import { ProfileMenuComponent } from "../profile-menu/profile-menu.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogPostService } from '../../services/blog-post.service';
import { HttpClientModule } from '@angular/common/http';
import { BlogPost } from '../../models/blogPost';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ProfileNavComponent, ProfileMenuComponent, ReactiveFormsModule],
  providers:[BlogPostService],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  posts: BlogPost[] = [];
  createBlogPostForm: FormGroup;

  constructor(private blogPostService: BlogPostService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.createBlogPost();
  }

  createBlogPost() {
    this.createBlogPostForm = this.fb.group({
      title: ["", Validators.required],
      content: ["", Validators.required],
      releaseDate: [new Date().toISOString(), Validators.required], // Otomatik tarih ayarlama
      likesCount: [0],
      commentsCount: [0],
      authorName: ["Anonymous"] // Varsayılan olarak isimsiz kullanıcı
    });
  }
  saveBlog() {
    if (this.createBlogPostForm.valid) {
      let blogPost: BlogPost = this.createBlogPostForm.value;
      this.blogPostService.createBlogPost(blogPost).subscribe(response => {
        console.log("Blog post created:", response);
        // İşlemler veya yönlendirme
      });
      console.log("blogpost oluştu")
    } else {
      console.log("formu yanlış doldurdunuz.")
    }
  }

}