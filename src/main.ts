import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter} from "@angular/router";
import {APP_INITIALIZER} from "@angular/core";
import routeConfig from "./app/routes";

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routeConfig),
    ],
}).catch(err => console.error(err));
