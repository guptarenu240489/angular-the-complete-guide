import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './post.model';
import { createAndFetchPosts } from './post.service';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  loading: boolean = false;
  error = null;
  errorSubscription: Subscription;
  constructor(private http: HttpClient, private postService: createAndFetchPosts) {}

  ngOnInit() {
    this.errorSubscription = this.postService.error.subscribe(error => {
      this.error = error;
    })
    this.fetchingPosts();
  }

  ngOnDestroy() {
    this.errorSubscription.unsubscribe();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createPost(postData.title, postData.content);

    this.fetchingPosts();
  }

  onFetchPosts() {
    // Send Http request
    this.fetchingPosts();
  }

  onClearPosts() {
    // Send Http request
    this.loading = true;
    this.postService.deleteAllPosts()
      .subscribe(() => {
        this.loading = false;
        this.loadedPosts = [];
      });
  }
  private fetchingPosts() {
    this.loading = true;
    this.postService.fetchPosts()
    .subscribe(response => {
      this.loadedPosts = response;
      this.loading = false;
    }, error => {
      this.loading = false;
      this.error = error.message;
    });
  }
}
