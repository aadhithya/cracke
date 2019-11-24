(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header>-->\n<!--    <ion-toolbar>-->\n<!--        <ion-buttons slot=\"start\">-->\n<!--            <ion-menu-button></ion-menu-button>-->\n<!--        </ion-buttons>-->\n<!--        <ion-title>-->\n<!--            Home-->\n<!--        </ion-title>-->\n<!--    </ion-toolbar>-->\n<!--</ion-header>-->\n<ion-content id=\"container\">\n\n    <ion-list id=\"contents\">\n        <ion-list>\n            <ion-item>\n<!--                <ion-label>Input</ion-label>-->\n                <!--    <ion-thumbnail slot=\"start\">-->\n                <ion-img [src]=\"feed\"></ion-img>\n                <!--    </ion-thumbnail>-->\n\n                <!--            </ion-item>-->\n                <!--            <ion-item>-->\n<!--                <ion-label>Analysed</ion-label>-->\n                <!--    <ion-thumbnail slot=\"stop\">-->\n                <ion-img [src]=\"out\"></ion-img>\n                <!--    </ion-thumbnail>-->\n\n            </ion-item>\n        </ion-list>\n        <ion-item>\n            <ion-label>Materials</ion-label>\n            <ion-select placeholder=\"Select One\">\n                <ion-select-option value=\"AL7\">Aluminium 7075</ion-select-option>\n                <ion-select-option value=\"AL5\">Aluminium 5083</ion-select-option>\n                <ion-select-option value=\"CI\">Cast Iron</ion-select-option>\n                <ion-select-option value=\"MA\">Magnesium Alloy</ion-select-option>\n                <ion-select-option value=\"CC\">Carbon Composite</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label>Load</ion-label>\n            <ion-input></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Cycles/day</ion-label>\n            <ion-input></ion-input>\n        </ion-item>\n        <ion-button expand=\"block\" fill=\"solid\" (click)=\"capture()\">Capture</ion-button>\n        <ion-button expand=\"block\" fill=\"solid\" (click)=\"report()\">Generate Report</ion-button>\n        <ion-button expand=\"block\" fill=\"solid\" (click)=\"connect_server()\">Analyse</ion-button>\n        <ion-button expand=\"block\" fill=\"solid\" (click)=\"disconnect_server()\">Stop</ion-button>\n    </ion-list>\n\n</ion-content>\n<!--<ion-content>-->\n<!--    <ion-card class=\"welcome-card\">-->\n<!--      <img src=\"/assets/shapes.svg\" alt=\"\" />-->\n<!--      <ion-card-header>-->\n<!--        <ion-card-subtitle>Get Started</ion-card-subtitle>-->\n<!--        <ion-card-title>Welcome to Ionic</ion-card-title>-->\n<!--      </ion-card-header>-->\n<!--      <ion-card-content>-->\n<!--        <p>Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.</p>-->\n<!--      </ion-card-content>-->\n<!--    </ion-card>-->\n<!--    <ion-list lines=\"none\">-->\n<!--      <ion-list-header>-->\n<!--        <ion-label>Resources</ion-label>-->\n<!--      </ion-list-header>-->\n<!--      <ion-item href=\"https://ionicframework.com/docs/\">-->\n<!--        <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>-->\n<!--        <ion-label>Ionic Documentation</ion-label>-->\n<!--      </ion-item>-->\n<!--      <ion-item href=\"https://ionicframework.com/docs/building/scaffolding\">-->\n<!--        <ion-icon slot=\"start\" color=\"medium\" name=\"build\"></ion-icon>-->\n<!--        <ion-label>Scaffold Out Your App</ion-label>-->\n<!--      </ion-item>-->\n<!--      <ion-item href=\"https://ionicframework.com/docs/layout/structure\">-->\n<!--        <ion-icon slot=\"start\" color=\"medium\" name=\"grid\"></ion-icon>-->\n<!--        <ion-label>Change Your App Layout</ion-label>-->\n<!--      </ion-item>-->\n<!--      <ion-item href=\"https://ionicframework.com/docs/theming/basics\">-->\n<!--        <ion-icon slot=\"start\" color=\"medium\" name=\"color-fill\"></ion-icon>-->\n<!--        <ion-label>Theme Your App</ion-label>-->\n<!--      </ion-item>-->\n<!--    </ion-list>-->\n\n<!--</ion-content>-->\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n#container {\n  position: relative;\n}\n\n#contents {\n  position: absolute;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p5b3Rpcm1heS9XZWJzdG9ybVByb2plY3RzL3VudGl0bGVkL215QXBwL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNjb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jY29udGVudHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2NvbnRlbnRzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera-preview/ngx */ "./node_modules/@ionic-native/camera-preview/ngx/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_4__);




// import * as pdfmake from 'pdfmake/build/pdfmake';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';
// import {PdfmakeService} from 'ng-pdf-make/pdfmake/pdfmake.service';

window.global = window;
let HomePage = class HomePage {
    constructor(camera, cameraPreview, socket) {
        this.camera = camera;
        this.cameraPreview = cameraPreview;
        this.socket = socket;
        // public pdfmake_=null;
        this.out = null;
        this.feed = null;
        this.socket.fromEvent('join_room').subscribe(data => {
            console.log(data);
        });
        this.socket.fromEvent('out_feed').subscribe(data => {
            console.log('coming out feed');
            this.out = data['feed'];
        });
    }
    connect_server() {
        this.socket.connect();
        console.log('Creating game...');
        this.socket.emit('create', { size: 'normal', teams: 2, dictionary: 'Simple', game_id: '1' });
    }
    disconnect_server() {
        this.stop_camera();
        this.socket.disconnect();
    }
    capture() {
        console.log('coming to camera thingy');
        const options = {
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
        };
        let image_upload = () => {
            this.camera.getPicture(options).then((imageData) => {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64 (DATA_URL):
                let base64Image = 'data:image/jpeg;base64,' + imageData;
                this.feed = base64Image;
                this.socket.emit('camera_feed', { 'feed': base64Image });
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
        setInterval(image_upload, 1000);
        setInterval(capture, 500);
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
    }
    getTodaysDate() {
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }
    preparePdf(datadict) {
        // pdfmake.vfs = pdfFonts.pdfMake.vfs;
        // const cellContents = [[{text: 'ID', style: 'tableHeader'}, {text: 'Structure', style: 'tableHeader'},
        //     {text: 'Vol*' /*[{text: 'Volume in mm', width: 'auto'}, {text: '3', fontSize: 8}]*/, style: 'tableHeader'},
        //     {text: '%ICV', style: 'tableHeader'}, {text: 'U*', style: 'tableHeader'}, {
        //         text: '',
        //         style: 'tableHeader'
        //     }]];
        // // Deep copy of an array containing objects inside.
        // const cellContents_otherHalf = JSON.parse(JSON.stringify(cellContents));
        // const cellContents = [[{text: 'ID', style: 'tableHeader'}, {text: 'Structure', style: 'tableHeader'},
        //     {text: 'Vol*' /*[{text: 'Volume in mm', width: 'auto'}, {text: '3', fontSize: 8}]*/, style: 'tableHeader'},
        //     {text: '%ICV', style: 'tableHeader'}, {text: 'U*', style: 'tableHeader'}, {
        //         text: '',
        //         style: 'tableHeader'
        //     }]];
        const img_src = datadict.imagestr;
        const report_title = datadict.title;
        // datadict.raw_data.color_map.map((v, i) => {
        //     if (i < Math.ceil(datadict.raw_data.color_map.length / 2)) {
        //         cellContents.push([v.id, v.name,
        //             (p_data[v.id - 1] * p_data[p_data.length - 1]).toFixed(0),
        //             p_data[v.id - 1].toFixed(2), uncertainties[v.id].toFixed(2),
        //             {
        //                 text: '',
        //                 fillColor: null,//this.rgbToHex(v.rgb_values),
        //             }]);
        //     } else {
        //         cellContents_otherHalf.push([v.id, v.name,
        //             (p_data[v.id - 1] * p_data[p_data.length - 1]).toFixed(0),
        //             p_data[v.id - 1].toFixed(2), uncertainties[v.id].toFixed(2),
        //             {
        //                 text: '',
        //                 fillColor: null,//this.rgbToHex(v.rgb_values),
        //             }]);
        //     }
        // });
        // pdfmake_.tableLayouts = {
        //     // common_table_layout: {
        //     //     hLineWidth: function (i, node) {
        //     //         return (i === 0 || i === node.table.body.length) ? 2 : 1;
        //     //     },
        //     //     vLineWidth: function (i, node) {
        //     //         return (i === 0 || i === node.table.widths.length) ? 2 : 1;
        //     //     },
        //     //     hLineColor: function (i, node) {
        //     //         return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
        //     //     },
        //     //     vLineColor: function (i, node) {
        //     //         return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
        //     //     },
        //     //     fillColor: function (rowIndex, node, columnIndex) {
        //     //         return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
        //     //     },
        //     // },
        // };
        const docDefinition = {
            footer: {
                columns: [
                    '',
                    { text: '', style: 'footer' }
                ]
            },
            content: [
                // TODO: Logo dataurl does not load on production server.
                // {
                //   margin: [1, 1, 1, 1],
                //   columns: [
                //     {image: 'ai_med_logo', style: 'logo'}
                //   ]
                // },
                {
                    margin: [1, 1, 1, 1],
                    columnGap: 1,
                    columns: [
                        { text: report_title + ' \n ' + this.getTodaysDate(), style: 'header' },
                        {
                            text: '',
                            style: 'align_right'
                        }
                    ]
                },
                // {
                //     margin: [1, 1, 1, 1],
                //     columnGap: 1,
                //     columns: [
                //         {
                //             image: '',
                //             fit: [150, 150]
                //         },
                //         {
                //             image: '',
                //             fit: [150, 150]
                //         },
                //         {
                //             image: '',
                //             fit: [150, 150]
                //         }
                //     ]
                // },
                // {text: '', style: 'subheader'},
                {
                    margin: [1, 1, 1, 1],
                    columnGap: 1,
                    columns: [
                        {
                            text: 'Maerial',
                            style: 'align_left'
                        },
                        {
                            text: datadict.Material,
                            style: 'align_right'
                        }
                    ]
                },
                {
                    margin: [1, 1, 1, 1],
                    columnGap: 1,
                    columns: [
                        {
                            text: 'Load',
                            style: 'align_left'
                        },
                        {
                            text: datadict.Load,
                            style: 'align_right'
                        }
                    ]
                },
            ],
            // images: {
            //     crack_img_src: img_src
            // },
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10]
                },
                subheader: {
                    fontSize: 16,
                    bold: true,
                    margin: [0, 10, 0, 5]
                },
                tableExample: {
                    margin: [0, 5, 0, 15, 0],
                    bold: true,
                    alignment: 'center'
                },
                tableHeader: {
                    bold: true,
                    fontSize: 13,
                    fillColor: '#4caf50'
                },
                align_right: {
                    alignment: 'right'
                },
                logo: {
                    alignment: 'right',
                    width: 150,
                    height: 30
                },
                footer: {
                    alignment: 'right',
                    border: [true, true, true, true],
                    fillColor: '#4caf50',
                    width: 100,
                    height: 2
                }
            },
            defaultStyle: {
            // alignment: 'justify'
            },
        };
        // const pdf = pdfmake.createPdf(docDefinition);
        // return pdf;
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__["CameraPreview"] },
    { type: ng_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
        _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__["CameraPreview"],
        ng_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map