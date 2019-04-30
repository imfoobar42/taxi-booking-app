import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DriverLoginComponent } from './driver-login.component';
import { DriverRegistrationComponent } from './driver-registration.component';
import { DriverHomeComponent } from './driver-home.component';
import { DriverRequestComponent } from './driver-request.component';


@NgModule({
    declarations:[
        DriverLoginComponent,
        DriverRegistrationComponent,
        DriverHomeComponent,
        DriverRequestComponent

    ],
    imports:[
        BrowserModule
    ],
    exports:[
        DriverLoginComponent,
        DriverRegistrationComponent,
        DriverHomeComponent,
        DriverRequestComponent
    ],
    providers:[

    ]
})

export class DriverModule{

}