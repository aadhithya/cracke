import {Component} from '@angular/core';
import {Camera, CameraOptions} from "@ionic-native/camera/ngx";
import {
    CameraPreview,
    CameraPreviewPictureOptions,
    CameraPreviewOptions,
    CameraPreviewDimensions
} from '@ionic-native/camera-preview/ngx';
// import * as pdfmake from 'pdfmake/build/pdfmake';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';
// import {PdfmakeService} from 'ng-pdf-make/pdfmake/pdfmake.service';
import {Socket} from 'ng-socket-io';
import {Observable} from 'rxjs/Observable';

(window as any).global = window;

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    // public pdfmake_=null;
    public out = null;
    public feed = null;
    public report_out = null;
    public ipdata = {
        'material':'',
          'load': '',
        'cycles': ''
    };
    public intervalID;
    public intervalID1;
    constructor(private camera: Camera,
                private cameraPreview: CameraPreview,
                private socket: Socket,
                // public pdfmake: PdfmakeService
    ) {

        this.socket.fromEvent('join_room').subscribe(data => {
            console.log(data);
        });
        this.socket.fromEvent('out_feed').subscribe(data => {
            console.log('coming out feed');
            this.out = 'data:image/jpeg;base64,' +  data['feed'];
        });

        this.socket.fromEvent('report_out_feed').subscribe(data => {
            console.log('coming out feed', data['feed']);
            // let html_href = this.arrayBufferToBase64(data['feed']);
            var html_href = this.dataURLtoFile('data:text/plain;base64,'+data['feed'],'report.html');
            // console.log(file);
            console.log(html_href);
            this.report_out = html_href;
        });


    }

    dataURLtoFile(dataurl, filename) {

        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, {type:mime});
    }
    connect_server() {
        this.socket.connect();
        console.log('Creating game...');
        this.socket.emit('create', {size: 'normal', teams: 2, dictionary: 'Simple', game_id: '1'});
    }
    arrayBufferToBase64( buffer ) {
        var binary = '';
        var bytes = new Uint8Array( buffer );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        return window.btoa( binary );
    }
    disconnect_server() {
        clearInterval(this.intervalID);
        clearInterval(this.intervalID1);
        this.stop_camera();
        this.socket.disconnect();
        this.camera.cleanup();

    }

    capture() {
        console.log('coming to camera thingy');
        const options: CameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        // let cameraPreviewOpts: CameraPreviewOptions = {
        //     x: 0,
        //     y: 0,
        //     width: Math.abs(window.screen.width),
        //     height: Math.abs(window.screen.height / 2),
        //     camera: 'rear',
        //     tapPhoto: true,
        //     previewDrag: true,
        //     toBack: true,
        //     alpha: 1
        // };

        // this.cameraPreview.startCamera(cameraPreviewOpts).then(
        //     (res) => {
        //         let base64Image = 'data:image/jpeg;base64,' + res;
        //         this.feed = base64Image;
        //         this.socket.emit('camera_feed', {'feed': base64Image});
        //     },
        //     (err) => {
        //         console.log(err)
        //     });
        // console.log(this.camera.DestinationType.FILE_URI);
        // let camera_ready = ;
        // document.getElementsByTagName('button')
        // for(var i=0; i<elems.length; i++){ if(elems[i].innerText=='Capture!'){ elems[i].click()} }
        let capture = () => {
            let elems = document.getElementsByTagName('button');
            for (var i = 0; i < elems.length; i++) {
                if (elems[i].innerText == 'Capture!') {
                    elems[i].click();
                }
            }
            this.camera.cleanup();
        };
        let image_upload = () => {
            this.camera.getPicture(options).then((imageData) => {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64 (DATA_URL):
                let base64Image = 'data:image/jpeg;base64,' + imageData;
                this.feed = base64Image;
                this.socket.emit('camera_feed', {'feed': base64Image});
                // capture();
            }, (err) => {
                // Handle error
                console.log(err);
            });
        };



        let final_capture = () => {
            image_upload();
            capture();
        };
        this.intervalID = setInterval(image_upload, 2000);
        this.intervalID1 = setInterval(capture, 1500);

        // let dummyData = {
        //     'Material': 'Carbon Alloy',
        //     'Load': '60N',
        //     'cycles_day': '80',
        //     'team_members': ['Abhijieet', 'Aditya', 'Abhi', 'Jyotirmay'],
        //     'name': 'XYZ',
        //     'crack_state': 'No',
        //     'tyime_since_crack': '',
        //     'imagestr': ''
        // };
        // this.pdfmake_ = this.preparePdf(dummyData);

        // let cameraPreviewOpts: CameraPreviewOptions = {
        //     x: 0,
        //     y: 0,
        //     width: Math.abs(window.screen.width),
        //     height: Math.abs(window.screen.height / 2),
        //     camera: 'rear',
        //     tapPhoto: true,
        //     previewDrag: true,
        //     toBack: true,
        //     alpha: 1
        // };
        // // start camera
        // this.cameraPreview.startCamera(cameraPreviewOpts).then(
        //     (res) => {
        //         console.log(res);
        //         this.socket.emit('camera_feed', {'feed': res});
        //     },
        //     (err) => {
        //         console.log(err)
        //     });

    }

    stop_camera() {
        this.cameraPreview.stopCamera();
    }

    switch_camera() {
        this.cameraPreview.switchCamera();
    }

    report() {
        console.log('report generating!!!');

        this.socket.emit('report_feed', this.ipdata);
    }

    getTodaysDate() {

        let today: any = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }
}
