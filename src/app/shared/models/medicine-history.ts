import { MedicineQuantity } from "./medicine-quantity";

export class PrescriptionDetail {
    id: number = 0;
    medicine: number = 0;
    medicine_prescription: number = 0;
    medicine_name: string = "";
    dosage: string = "";
    time_of_consumption: string = "";
    days: string = "";
    medicine_per_price: string = "";
    quantity: number = 0;
  }
  
  export class MedicineHistory {
    id: number = 0;
    patient: number=0;
    doctor: number =0;
    patient_name:string='';
    doctor_name:string='';
    dateofvisit: Date = new Date(); // Change the default value as needed
    observation_details: string = "";
    diagnosis_details: string = "";
    choose_test: string[] = [];
    prescription_detai: PrescriptionDetail[] = [];
    patientId: any;
  }
  