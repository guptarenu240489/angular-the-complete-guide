import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { Post } from './post.model';
import { Subject, throwError } from 'rxjs';
@Injectable({providedIn: 'root'})
export class createAndFetchPosts {
    error = new Subject<string>();

    constructor(private http:HttpClient) {}

    createPost(title: string, content: string) {
        const postData: Post = {'title': title, 'content': content};
        this.http
            .post<{name: string}>(
                'https://learn-angular-7b37a.firebaseio.com/posts.json',
                postData
            )
            .subscribe(responseData => {
                console.log(responseData);
            }, error => {
                this.error.next(error.message);
            });
    }

    fetchPosts() {
        return this.http
        .get<{[key: string]: Post}>('https://learn-angular-7b37a.firebaseio.com/posts.json',{
            headers: new HttpHeaders({'custom-header': 'Hello'})
        })
        .pipe(map(resp => {
          const responseData = [];
          for(let key in resp) {
            if(resp.hasOwnProperty(key)) {
              responseData.push({...resp[key], id: key})
            }
          }
          return responseData;
        })
        // .catchError(error=> {
        //     return throwError(error)
        // })
        )
    }

    deleteAllPosts() {
        return this.http
            .delete('https://learn-angular-7b37a.firebaseio.com/posts.json');
    }
}