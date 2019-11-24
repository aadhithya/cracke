import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {
    CameraPreview,
    CameraPreviewPictureOptions,
    CameraPreviewOptions,
    CameraPreviewDimensions
} from '@ionic-native/camera-preview/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'http://138.246.223.54:8765', options: {} };

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        SocketIoModule.forRoot(config),
        AppRoutingModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Camera,
        CameraPreview,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
