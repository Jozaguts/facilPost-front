# FacilpostFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

## Routes 

### Normal users

- index _show products list_ <br>
"/" redirect to "/products"

- show <br> 
/products/:id <br>


### admin users
- login <br>
"/login"<br>
- register <br>
  "/register"  _Guard route_
- admin _Guard routes_ <br>
 "/admin"<br>
    '/admin/products/create'<br>
    '/adminproduct/:id'<br> 
    

## Credentials

admin@example.com <br>
password
