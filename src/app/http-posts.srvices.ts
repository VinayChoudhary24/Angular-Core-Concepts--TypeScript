import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./http-post.model";
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, } from "rxjs-compat";
import { throwError } from 'rxjs'

@Injectable({
    // this will make sure app.module providers[] Array is UPDATED
    providedIn: 'root',
})

// This Contains -- HTTP Requests Methods, 
export class PostService {
    // to handle Errors in a better way
    error = new Subject<string>();

    // INJECT httpClient to use the HTTP Request
    constructor( private http: HttpClient ) {}

    createAndStorePost(title: string, content: string) {
        const postData: Post = {title: title, content: content};
    // Send Http request
    // console.log(postData);
    // ## if we Dont Subscribe to the Request it will not be Send by Angular, Always Subscribe(observable)
    this.http.post< {name: string} >('https://back-end-for-angular-58f78-default-rtdb.firebaseio.com/posts.json', postData,
    
    // To get the Full Response from the SERVER i.e Headers, Body and STATUS
    {
        observe: 'response'
    }
    ).subscribe( (response) => {
        console.log(response);
      }, error => {
        this.error.next(error.message);
      });
    }

    // // GET -- it Takes only ine Argument i.e URl to GET
    fetchPosts() {
        // The GET method can take the TYPE of the RESPONSE inside the ANGLED Brackets <>
    return this.http.get< {[ key: string ]: Post } >('https://back-end-for-angular-58f78-default-rtdb.firebaseio.com/posts.json', 
    
    // This is the place for HTTP request HEADERS
    {
        headers: new HttpHeaders({ 'custom-Header': 'Hello' }),
        // These are the Query Params
        params: new HttpParams().set( 'print', 'pretty' ),

    }
    )
    // Using RxJS Operators i.e PIPES, OSERVABLES to transform DATA
    .pipe(map( (response) => {
      const postArray: Post[] = [];
      for (const key in response) {
        if(response.hasOwnProperty(key)) {
          postArray.push({ ...response[key], id: key })
        }
      }
      return postArray;
    }),
    // Here we can call the catchErr Operator
    catchError( (errorRes) => {
        // Sending error message to someone for analytics
       return throwError(errorRes)
    })
    )

    // .subscribe( (posts) => {
    //   this.isFetchingPosts = false;
      // console.log(posts);
    //   this.loadedPosts = posts;
    // })

    }

    // To Delete all the Posts requests
    deletePosts() {
       return this.http.delete('https://back-end-for-angular-58f78-default-rtdb.firebaseio.com/posts.json', 

    //    using OBSERVE 
    {
        observe: 'events',
        
        // for the BODY
        responseType: 'text' 
    }
    // using tap Operator
       ).pipe(tap( (event) => {
        console.log(event)
       }))
    }
}