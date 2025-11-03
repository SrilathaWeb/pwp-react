
# 🅰️ Angular Guide

A comprehensive guide for building modern single-page applications (SPAs) using **Angular** (v16+).

---

## 🚀 What is Angular?

**Angular** is a TypeScript-based front-end framework developed by Google for building dynamic, reactive, and modular web applications.

It includes:
- Component-based architecture  
- Dependency injection  
- Reactive forms and RxJS  
- Built-in routing and HTTP services  

---

## ⚙️ Prerequisites

- **Node.js** (LTS version recommended)
- **npm** (comes with Node)
- Basic knowledge of TypeScript, HTML, and CSS

---

## 🧩 Installation

### 1. Install Angular CLI
```bash
npm install -g @angular/cli
````

### 2. Create a New Angular App

```bash
ng new angular-demo
cd angular-demo
```

### 3. Run the Application

```bash
ng serve
```

Open the app at 👉 **[http://localhost:4200](http://localhost:4200)**

---

## 📂 Project Structure

```
angular-demo/
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.module.ts
│   │   └── components/
│   │       ├── home/
│   │       │   ├── home.component.ts
│   │       │   └── home.component.html
│   │       └── about/
│   │           ├── about.component.ts
│   │           └── about.component.html
│   └── index.html
└── angular.json
```

---

## 🧱 Create a Component

```bash
ng generate component components/home
# or shorthand
ng g c components/home
```

**Example: `home.component.ts`**

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Welcome to Angular!';
}
```

**home.component.html**

```html
<h2>{{ title }}</h2>
<p>This is the home component.</p>
```

---

## 🔗 Routing in Angular

### 1. Generate Routing Module (optional)

```bash
ng generate module app-routing --flat --module=app
```

### 2. Define Routes

**app-routing.module.ts**

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' } // wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

**app.component.html**

```html
<nav>
  <a routerLink="/">Home</a> |
  <a routerLink="/about">About</a>
</nav>
<hr />
<router-outlet></router-outlet>
```

---

## ⚙️ Services and Dependency Injection

Generate a service:

```bash
ng g s services/user
```

**user.service.ts**

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers() {
    return ['Alice', 'Bob', 'Charlie'];
  }
}
```

Use it in a component:

```typescript
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  template: `
    <h3>Users:</h3>
    <ul><li *ngFor="let user of users">{{ user }}</li></ul>
  `
})
export class UsersComponent implements OnInit {
  users: string[] = [];
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
```

---

## 🌐 HTTP Requests (API Integration)

Add `HttpClientModule` to `app.module.ts`:

```typescript
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
})
export class AppModule {}
```

**Example Service:**

```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
```

**Component Example:**

```typescript
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-users',
  template: `
    <h3>User List</h3>
    <ul><li *ngFor="let user of users">{{ user.name }}</li></ul>
  `
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService.getUsers().subscribe((data) => (this.users = data));
  }
}
```

---

## 🧮 Forms in Angular

### Template-Driven Form

**app.module.ts**

```typescript
import { FormsModule } from '@angular/forms';
@NgModule({ imports: [FormsModule] })
export class AppModule {}
```

**form.component.html**

```html
<form #userForm="ngForm" (ngSubmit)="submitForm(userForm)">
  <input type="text" name="name" ngModel placeholder="Enter name" required />
  <button type="submit">Submit</button>
</form>
```

**form.component.ts**

```typescript
submitForm(form: any) {
  console.log(form.value);
}
```

---

## ⚡ Reactive Forms

Install Reactive Forms module:

```typescript
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({ imports: [ReactiveFormsModule] })
export class AppModule {}
```

**reactive-form.component.ts**

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent {
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  onSubmit() {
    console.log(this.userForm.value);
  }
}
```

**reactive-form.component.html**

```html
<form [formGroup]="userForm" (ngSubmit)="onSubmit()">
  <input formControlName="name" placeholder="Name" />
  <input formControlName="email" placeholder="Email" />
  <button type="submit">Submit</button>
</form>
```

---

## 🧭 Angular CLI Commands

| Command                | Description            |
|------------------------| ---------------------- |
| ng new app-name        | Create new Angular app |
| ng serve               | Run dev server         |
| ng build               | Build for production   |
| ng g c component-name  | Generate component     |
| ng g s service-name    | Generate service       |
| ng test                | Run unit tests         |
| ng lint                | Run linting            |

---

## 🧠 Best Practices

✅ Use **modules** to organize features.
✅ Leverage **services** for shared logic and HTTP.
✅ Use **Reactive Forms** for complex form handling.
✅ Apply **Observables** (RxJS) for async data.
✅ Implement **lazy loading** for performance.
✅ Prefer **OnPush** change detection for optimization.

---

## 📚 Useful Resources

* [Angular Official Docs](https://angular.io/docs)
* [Angular Tutorial - Tour of Heroes](https://angular.io/tutorial)
* [RxJS Documentation](https://rxjs.dev/)
* [Angular CLI Reference](https://angular.io/cli)
* [Angular GitHub Repo](https://github.com/angular/angular)
* [YouTube: Angular Crash Course (Traversy Media)](https://www.youtube.com/watch?v=htPYk6QxacQ)
 