import { Component, OnInit,ViewChild,ElementRef,ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
// import { FilePath } from '@ionic-native/file-path/ngx';

declare var navigator: any;
declare var cordova: any;

declare var window: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  @ViewChild("videoRecorded") videoRecorded!: ElementRef;

  // @ViewChild('videoPlayer') videoplayer!: ElementRef;
  
  videofile = '';
  _filepath = "";
  isPlayHidden = false;
  constructor(private router: Router,private toastController: ToastController,private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  doLogout(){
    this.router.navigate(['/login']);
    
  }
   recordVideo(){
    console.info('recordVideo()');
    // this.isPlayHidden = false;
    let me = this;
    let captureSuccess = (mediaFiles:any)=>{
      
        me.isPlayHidden = true;
        console.info(me.isPlayHidden);
        
        me.cdRef.detectChanges();
      
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
            console.info("11",mediaFiles);
            console.info("22",this._filepath);
            this._filepath = path;
            
        // me.videoplayer.nativeElement.src = path;
        }
    };
    let captureError = (error:any)=>{
      this.isPlayHidden = false;
      
      this.presentToast('bottom',error.message);
        console.info('Error code: ', error);
    };
    let options = { limit: 1, duration: 120 };
    navigator.device.capture.captureVideo(captureSuccess, captureError, options);
  }
  
  async playVideo(){
    // this.videofile = 'assets/imgs/small.mp4';
    // this.filepath = 'assets/imgs/SampleVideo_1280x720_1mb.mp4';
    // this.videoplayer.nativeElement.src = 'assets/imgs/SampleVideo_1280x720_1mb.mp4';
    // console.info(this.videoplayer.nativeElement);
    // this.videoplayer.nativeElement.play();
  //   let res = await this.filepth.resolveNativePath(this._filepath)
  // console.info("res",res);
    window.plugins.streamingMedia.playVideo(this._filepath);
    
     
  }
  async presentToast(position: 'bottom',message:"") {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
  
}
