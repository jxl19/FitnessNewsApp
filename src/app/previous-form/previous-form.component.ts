import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { NewsletterServiceService } from '../services/newsletter-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-previous-form',
  templateUrl: './previous-form.component.html',
  styleUrls: ['./previous-form.component.css']
})
export class PreviousFormComponent implements OnInit {
  newState:any;
  id: any;

  constructor(private newsletterService: NewsletterServiceService, private router: Router,  private route:ActivatedRoute) { }

  ngOnInit(): void {    
    let state = window.history.state;
    this.newState = state;
    if(this.newState != true){
      this.route.paramMap.subscribe(params => {
        this.newState = params.get("id");
          this.id = params.get("id");
          this.newsletterService.getNewsletterById(this.id).subscribe(data=>{
          this.newState=data;
        })
      })
    }
  }

  
  downloadPDF() {
    const doc = new jsPDF();
    let data:any = document.getElementById('newsletter');
    let name:any = document.getElementById('n-header')?.innerHTML;
    html2canvas(data).then(((canvas: { toDataURL: (arg0: string, arg1: number) => any; }) => {
      let width = 250;
      let fileHeight =  250;
      const fileUri = canvas.toDataURL('image/png', 0.1 );
      let pdf = new jsPDF('p', 'mm', [250, 250]);
      let pos = 0;
      pdf.addImage(fileUri, 'png', 0, pos, width, fileHeight, undefined, 'FAST');
      pdf.save(`${name}.pdf`);
    }))
  }
  
}
