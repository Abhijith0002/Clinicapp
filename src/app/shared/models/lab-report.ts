export class LabReport {
    id: number = 0;
    staff_id: number = 0;
    doctor_id: number = 0;
    patient_id: number = 0;
    tests: any[] = []; // Assuming tests is an array of some type
    patient_name: string = '';
    doctor_name: string = '';
    staff: string = '';
    report: string = '';
    lab_report_id: string = '';
    test_bill_id: string = '';
    tests_info: { name: string, price: number }[] = []; // Assuming tests_info is an array of objects with name and price properties
}