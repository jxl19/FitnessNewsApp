import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF }  from 'jspdf';
import html2canvas from 'html2canvas';
import { Newsletters } from '../models/newsletters';
import { NewsletterServiceService } from '../services/newsletter-service.service';
import { UploadServiceService } from '../services/upload-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent implements OnInit {
  
  constructor(private newsletterService: NewsletterServiceService, private uploadService : UploadServiceService, private http: HttpClient) {}

  @ViewChild('newsletter') htmlData:ElementRef | any;
  newsletter: Newsletters | any;
  mostRecentId: number = 0;
  prevId: number = 0;

  ngOnInit(): void {
    this.newsletterService.getNewsletters().subscribe((data) => {
      this.mostRecentId = data.length - 1;
    });
    this.newsletterService
      .getNewsletterById(this.mostRecentId)
      .subscribe((data) => {
        this.newsletter = data;
      });
  }

  ngAfterContentChecked(): void {
    if (this.mostRecentId !== this.prevId) {
      this.prevId = this.mostRecentId;
      this.newsletterService
        .getNewsletterById(this.mostRecentId)
        .subscribe((data) => {
          this.newsletter = data;
          console.log(this.newsletter);
        });
    }
  }
  
  downloadPDF() {
    console.log("downloading..");
    const doc = new jsPDF();
    let data:any = document.getElementById('newsletter');
    html2canvas(data).then((canvas => {
      let width = 250;
      let fileHeight =  250;
      const fileUri = canvas.toDataURL('image/png', 0.1 );
      
      let pdf = new jsPDF('p', 'mm', [250, 250]);
      let pos = 0;
      pdf.addImage(fileUri, 'png', 0, pos, width, fileHeight, undefined, 'FAST');
      pdf.save('demo.pdf');
    }))
  }

  uploadPDF() {
    const doc = new jsPDF();
    let data:any = document.getElementById('newsletter');
    html2canvas(data).then(((canvas: { toDataURL: (arg0: string, arg1: number) => any; }) => {
      let width = 250;
      let fileHeight =  250;
      const fileUri = canvas.toDataURL('image/png', 0.1);
      let pdf = new jsPDF('p', 'mm', [250, 250]);
      let pos = 0;
      pdf.addImage(fileUri, 'png', 0, pos, width, fileHeight, undefined, 'FAST');
      const formData = new FormData();
      var out = pdf.output('blob');
      formData.append("uploadFile", out, 'somename.pdf');
      // this.uploadService.uploadPDF(formData).subscribe(data => {
      //   console.log(data)
      // });
      console.log('fornd', formData);
      this.http.post('http://localhost:8080/fileupload/file/', formData).subscribe(res => {
        console.log(res);
      })
      console.log('done');
    }))
  }
}
