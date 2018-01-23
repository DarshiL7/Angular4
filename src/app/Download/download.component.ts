import { Component, Input } from '@angular/core';

@Component({
  selector: 'download',
  templateUrl: './src/app/download/download.component.html'
})
export class DownloadComponent {
    @Input() downloadLinks: Array<number>;
    @Input() link: boolean
    @Input() button: boolean
    @Input() downloadTitle: Array<number>;
    /*constructor()
    {
        console.log(this.downloadLinks);
        if(this.downloadLinks.length==0 || this.downloadLinks == undefined)
        {
            console.error('Links not available')
        }
        
    }*/

}