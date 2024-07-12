import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { BlogPost } from '../models/blogPost';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  apiUrl = "http://localhost:8080/api/blogposts/getAll";
  constructor(private httpClient: HttpClient) { }
  getBlogPosts():Observable<ListResponseModel<BlogPost>> {
    return this.httpClient.get<ListResponseModel<BlogPost>>(this.apiUrl)
  }
}
