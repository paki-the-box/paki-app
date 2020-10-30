import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './open.page.html',
  styleUrls: ['./open.page.scss'],
})
export class OpenPage {
  public data: string;
  public scannerShown: boolean;

  constructor(private qrScanner: QRScanner) { }


  scan() {
    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        console.debug(status);
        if (status.authorized) {
          // camera permission was granted


          // start scanning
          const scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            this.data = text;

            this.scannerShown = false;
            this.qrScanner.destroy().then((statusD) => console.debug('destroy', statusD)).catch((e) => console.error('destroy error', e));
            scanSub.unsubscribe(); // stop scanning
          });
          this.qrScanner.show().then((showStatus) => console.debug('show status', showStatus)).catch((e) => console.error('show error', e));
          this.scannerShown = true;

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));

  }

}
