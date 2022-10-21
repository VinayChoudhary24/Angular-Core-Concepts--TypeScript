import { Component, OnDestroy, OnInit } from '@angular/core';

// For REACTIVE APPROACH
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

// FOR TEMPLATE DRIVEN
// import { NgForm } from '@angular/forms';
// import { AccountService } from './account.service';
import { UsersService } from './users.service';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './http-post.model';
import { PostService } from './http-posts.srvices';
import { Subscription } from 'rxjs';

//## To Use BootStrap we need to Inform Angular in ANGULAR.JSON File in STYLES[]
   //-- "node_modules/bootstrap/dist/css/bootstrap.min.css"


// These are the DECORATORS
   @Component({
  selector: 'app-root', //This is to Select the INDEX.HTML File.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountService]
  providers: [UsersService]
})

// <!-- ---------------------------------------------------------------------------------- -->
// <!-- ----------------------------BASICS------------------------------------------------ -->
   //##1 - COMPONENTS:- headers, services etc.. [RE-USABLE]
export class AppComponent implements OnInit, OnDestroy {
  // name = 'angular-core-concepts';


  // //   ----------------------------GAME CONTROL-------------------------------------------------------
// oddNumbers: number[] =[];
// evenNumbers: number[] =[];

// onIntervalFired(firedNumber: number) {
//    // console.log(firedNumber);
//    if(firedNumber % 2 === 0) {
//       this.evenNumbers.push(firedNumber);
//    }else {
//       this.oddNumbers.push(firedNumber);
//    }
// }

// <!-- ---------------------------------------------------------------------------------- -->
// <!-- ---------------------------- PRACTICE ADVANCE COMPONENTS and DATA BINDING------------------------------------------------ -->
// serverElements = [];
//   newServerName = '';
//   newServerContent = '';

//   onAddServer() {
//     this.serverElements.push({
//       type: 'server',
//       name: this.newServerName,
//       content: this.newServerContent
//     });
//   }

//   onAddBlueprint() {
//     this.serverElements.push({
//       type: 'blueprint',
//       name: this.newServerName,
//       content: this.newServerContent
//     });
//   }


// <!-- ---------------------------------------------------------------------------------- -->
// <!-- ----------------------------PRACTICE ADVANCE DIRECTIVES------------------------------------------------ -->
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4, 6];
  onlyOdd = false;

  // <!-- ----------------------------ngSwitch DIRECTIVES------------------------------------------------ -->
  value = 10;


  // <!-- ----------------------------- -------------------------------- -------------------------------- -->
  // <!-- ----------------------------- SERVICES ------------------------ -------------------------------- -->
  // accounts: {name: string, status: string}[] = [];

  // constructor(private accountService: AccountService) {}

  
  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }

  // ngOnInit() {
  //    this.accounts = this.accountService.accounts;
  // }

  // <!-- ----------------------------- -------------------------------- -------------------------------- -->
  // <!-- -----------------------------PRACTICE SERVICES ------------------------ -------------------------------- -->  
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['chris', 'Man'];

  

//   <!-- ----------------------------- -------------------------------- -------------------------------- -->
// <!-- ----------------------------- ROUTING ------------------------ -------------------------------- -->
  

// <!-- ----------------------------- -------------------------------- -------------------------------- -->
// <!-- ----------------------------- ---------OBSERVABLES ------------------------ -------------------------------- -->


// // <!-- ----------------------------- -------------------------------- -------------------------------- -->
// // <!-- -------- ----------- --------- FORMS -- TEMPLATE-DRIVEN ------------------------------------ -->
// @ViewChild('f') signupForm: NgForm;

// // quesstion Property
// defaultQuestion: string = 'pet';
// // Answer Property
// answer: string = '';

// // Property for Radio Buttons
// genders = ['Male', 'Female'];

// // Ummarize the DATA
// user: {
//   username: '',
//   email: '',
//   secretQuestion: '',
//   answer: '',
//   gender: '',
// }
// submitted = false;

// suggestUserName() {
//   const suggestedName = 'Superuser';
//   // // passing the Exact Copy of the Form
//   // // Use setValue to set the Whole Form Values by click
//   // this.signupForm.setValue({
//   //   userData: {
//   //     username: suggestedName,
//   //     email: '',
//   //   },
//   //   secret: 'pet',
//   //   questionAnswer: '',
//   //   gender: 'male',
//   // })

//   // The Better Way
//   // use pathValue to set some Values by Click
//   this.signupForm.form.patchValue({
//     userData: {
//       username: suggestedName,
//     }
//   });
// }

// // // This function will Submit the Form
// // onSubmit(form: NgForm) {
// //   console.log(form)
// // }

// // Accessing the For With View Child
// onSubmit() {
//   // console.log(this.signupForm)
//   this.submitted = true;
//   // onSubmit we Update the DATA
//   this.user.username = this.signupForm.value.userData.username;
//   this.user.email = this.signupForm.value.userData.email;
//   this.user.secretQuestion = this.signupForm.value.secret;
//   this.user.answer = this.signupForm.value.userData.questionAnswer;
//   this.user.gender = this.signupForm.value.gender;

//   // to reset the Form
//   this.signupForm.reset();
// }


// // <!-- ----------------------------- -------------------------------- -------------------------------- -->
// // <!-- ----------------------------- --------- FORMS --REACTIVE APPROACH ------------------------------------ -->
// genders = ['male', 'female'];

// // Accessing the Form with FormGroup not ngForm like T.D
// signupForm: FormGroup;

// // Building a Custom VALIDATORS
// forbiddenUsernames = ['chris', 'anna']

// // Always Initialize Form s in ngOnInit Lifecycle Hooks
// ngOnInit() {
//   this.signupForm = new FormGroup({
//     //     //initialize FormControl i.e KEY: VALUE PAIR
//         'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
//         // add VALIDATORS
//         'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
//         'gender': new FormControl('Male'),
//         // adding FormArray
//         'hobbies': new FormArray([])
//       });
//       // Reacting to the Value Changes and statusChanges
//       // this.signupForm.valueChanges.subscribe( (value) => {
//       //   console.log(value)
//       // })
//       this.signupForm.statusChanges.subscribe( (status) => {
//         console.log(status);
//       })
// }

// // this method will submit the Form
// onSubmit() {
//   console.log(this.signupForm)
//   this.signupForm.reset();
// }

// onAddHobby(){
//   const control = new FormControl(null, Validators.required);
//   (<FormArray>this.signupForm.get('hobbies')).push(control);
// }
// getControls() {
//   return (<FormArray>this.signupForm.get('hobbies')).controls;
// }

// // Validator Function
// forbiddenNames(control: FormControl): {[s: string]: boolean} {
//   if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
//     return {'nameIsForbidden': true};
//   } else {
//     //## if validation is successfull we have to NULL here ALWAYS
//     return null;
//   }
// }

// // Adding the Async Validator for emails i.e when the Response is Async
// forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
//   const promise = new Promise<any>( (resolve, reject) => {
//     setTimeout( () => {
//       if (control.value === 'test@test.com') {
//         resolve({'emailIsForbidden': true});
//       } else {
//         resolve(null);
//       }
//     }, 1500)
//   })
//   return promise
// }

// // <!-- ----------------------------- -------------------------------- -------------------------------- -->
// // // // <!-- -------- --------- PRACTICE FORMS --REACTIVE APPROACH ------------------------------------ -->

// // Property to Access the Form
// projectForm: FormGroup;

// // Custom Validators
// forbiddenProjectNames = ['test', 'test2'];

// // initialize the Form in ngOnInit always
// ngOnInit() {
//   this.projectForm = new FormGroup({
//     'projectName': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
//     'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail),
//     'projectStatus': new FormControl('critical'),
//   });
// }

// // Custom Validators
// forbiddenNames(control: FormControl): {[s: string]: boolean} {
//   if ((control.value) === 'test', 'test2') {
//         return {'ProjectNameIsForbidden': true};
//       } else {
//         //## if validation is successfull we have to NULL here ALWAYS
//         return null;
//       }
// }

// // Async Validator
// forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
//   const promise = new Promise<any>( (resolve, reject) => {
//     setTimeout( () => {
//       if (control.value === 'test@test.com') {
//         resolve( {'emailIsForbidden': true} )
//       } else {
//         resolve(null)
//       }
//     }, 2000)
//   });
//   return promise;
// }

// onSubmit() {
//   console.log(this.projectForm.value)
// }


// // <!-- ----------------------------- -------------------------------- -------------------------------- -->
// // <!-- -------- --------- -------------------PIPES ------------------------------------ -->
// servers = [
//   {
//     instanceType: 'medium',
//     name: 'Production',
//     status: 'stable',
//     started: new Date(15, 1, 2017)
//   },
//   {
//     instanceType: 'large',
//     name: 'User Database',
//     status: 'stable',
//     started: new Date(15, 1, 2017)
//   },
//   {
//     instanceType: 'small',
//     name: 'Development Server',
//     status: 'offline',
//     started: new Date(15, 1, 2017)
//   },
//   {
//     instanceType: 'small',
//     name: 'Testing Environment Server',
//     status: 'stable',
//     started: new Date(15, 1, 2017)
//   }
// ];
// filteredStatus = '';

// ngOnInit() {}

// getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
//   return {
//     'list-group-item-success': server.status === 'stable',
//     'list-group-item-warning': server.status === 'offline',
//     'list-group-item-danger': server.status === 'critical'
//   };
// }


// <!-- ----------------------------- -------------------------------- -------------------------------- -->
// <!-- -------- --------- ------------------- HTTP ------------------------------------ -->
loadedPosts: Post[] = [];

// Property for LOADING Indicator
isFetchingPosts: boolean = false;

// To HANDLE ERRORS
error = null;

// To unsubscribe the error
private errorSub: Subscription;

  // Required to Use the http Client 
constructor( private http: HttpClient,
             private postService: PostService ) {}


ngOnInit() {
  // better way of handling errors
  this.errorSub = this.postService.error.subscribe( (errorMessage) => {
    this.error = errorMessage
  })

  this.isFetchingPosts = true;
  // Calling fetchPosts Method Here so that whenever the Page LOADS/INITIALIZED it fetches the data
  this.postService.fetchPosts()
  // After creating post.service we can Subscribe to the Request Here
  .subscribe( (posts) => {
    this.isFetchingPosts = false;
    this.loadedPosts = posts;
  }, 
  // error => {
    // this.error = error.message;
  // }
  )
}


  //## POST -- it TAKES two Arguments i.e URL and the postData
  // Using POST INTERFACE
onCreatePost(postData: Post) {
    // Send Http request
    // console.log(postData);
    // ## if we Dont Subscribe to the Request it will not be Send by Angular, Always Subscribe(observable)
    // this.http.post< {name: string} >('https://back-end-for-angular-58f78-default-rtdb.firebaseio.com/posts.json', postData).subscribe( (response) => {
    //   console.log(response);
    // });
    
    // This will call the Method createAndStorePost from the http-post.service 
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetchingPosts = true;
  // Calling fetchPosts Method Here so that whenever the Page LOADS/INITIALIZED it fetches the data
  this.postService.fetchPosts()
  // After creating post.service we can Subscribe to the Request Here
  .subscribe( (posts) => {
    this.isFetchingPosts = false;
    this.loadedPosts = posts;
  }, 
  // error => {
    // this.error = error.message;
  // }
  )
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe( () => {
      this.loadedPosts = [];
    })
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

  // GET -- it Takes only ine Argument i.e URl to GET
  // private fetchPosts() {
  //   this.isFetchingPosts = true;
  //   // The GET method can take the TYPE of the RESPONSE inside the ANGLED Brackets <>
  //   this.http.get< {[ key: string ]: Post } >('https://back-end-for-angular-58f78-default-rtdb.firebaseio.com/posts.json')
  //   // Using RxJS Operators i.e PIPES, OSERVABLES to transform DATA
  //   .pipe(map( (response) => {
  //     const postArray: Post[] = [];
  //     for (const key in response) {
  //       if(response.hasOwnProperty(key)) {
  //         postArray.push({ ...response[key], id: key })
  //       }
  //     }
  //     return postArray;
  //   }))
  //   .subscribe( (posts) => {
  //     this.isFetchingPosts = false;
  //     // console.log(posts);
  //     this.loadedPosts = posts;
  //   })
  // }


}

//##Creating Components from CLI
  // ng generate component <name>



 