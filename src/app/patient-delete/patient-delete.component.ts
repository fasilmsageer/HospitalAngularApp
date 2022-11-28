import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent {

  
  PatientID=""


  readValues=()=>{

  

  let data:any={

    
    "PatientID":this.PatientID
  
  
  }
  console.log(data)
}

}
