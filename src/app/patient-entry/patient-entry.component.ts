import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {

  PatientName=""
  PatientID=""
  Address=""
  ContactNumber=""
  DateOfAppointment=""
  PatientImage=""
  DoctorName=""


  readValues=()=>{

  

  let data:any={

    "PatientName":this.PatientName,
    "PatientID":this.PatientID,
    "Address":this.Address,
    "ContactNumber":this.ContactNumber,
    "DateOfAppointment":this.DateOfAppointment,
    "PatientImage":this.PatientImage,
    "DoctorName":this.DoctorName,
  
  }
  console.log(data)
                        
                         
                        
}          

}
