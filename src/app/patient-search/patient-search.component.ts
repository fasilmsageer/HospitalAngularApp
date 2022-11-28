import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent {


  PatientID=""


  readValues=()=>{

  

  let data:any={

    
    "PatientID":this.PatientID
  
  
  }
  console.log(data)
}
}
