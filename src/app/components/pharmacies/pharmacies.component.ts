
import { Component, OnInit, ViewChild ,ElementRef} from '@angular/core';
import { Pharmacy } from 'src/app/models/pharmacy.model';
import { Ampara_pharmacies } from './pharamcy_database/Ampara_pharmacies';
import { Anuradhapura_pharmacies } from './pharamcy_database/Anuradhapura_pharmacies';
import { Badulla_pharmacies } from './pharamcy_database/Badulla_pharmacies';
import { Batticaloa_pharmacies } from './pharamcy_database/Batticaloa_pharmacies';
import { Colombo_pharmacies } from './pharamcy_database/Colombo_pharmacies';
import { Galle_pharmacies } from './pharamcy_database/Galle_pharmacies';
import { Gampaha_pharmacies } from './pharamcy_database/Gampaha_pharmacies';
import { Hambantota_pharmacies } from './pharamcy_database/Hambantota_pharmacies';
import { Jaffna_pharmacies } from './pharamcy_database/Jaffna_pharmacies';
import { Kalutara_pharmacies } from './pharamcy_database/Kalutara_pharmacies';
import { Kandy_pharmacies } from './pharamcy_database/Kandy_pharmacies';
import { Kegalle_pharmacies } from './pharamcy_database/Kegalle_pharmacies';
import { Kilinochchi_pharmacies } from './pharamcy_database/Kilinochchi_pharmacies';
import { Kurunegala_pharmacies } from './pharamcy_database/Kurunegala_pharmacies';
import { Mannar_pharmacies } from './pharamcy_database/Mannar_pharmacies';
import { Matale_pharmacies } from './pharamcy_database/Matale_pharmacies';
import { Matara_pharmacies } from './pharamcy_database/Matara_pharmacies';
import { Monaragala_pharmacies } from './pharamcy_database/Monaragala_pharmacies';
import { Mullaitivu_pharmacies } from './pharamcy_database/Mullaitivu_pharmacies';
import { Nuwara_Eliya_pharmacies } from './pharamcy_database/Nuwara_Eliya_pharmacies';
import { Polonnaruwa_pharmacies } from './pharamcy_database/Polonnaruwa_pharmacies';
import { Puttalam_pharmacies } from './pharamcy_database/Puttalam_pharmacies';
import { Ratnapura_pharmacies } from './pharamcy_database/Ratnapura_pharmacies';
import { Trincomalee_pharmacies } from './pharamcy_database/Trincomalee_pharmacies';
import { Vavuniya_pharmacies } from './pharamcy_database/Vavuniya_pharmacies';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.css']
})
export class PharmaciesComponent implements OnInit {
  constructor() { }

  
  ngOnInit(): void {
  }
  public isTableShown : boolean = false;
  public pharmacy_name :any | undefined;
  selectedValue: string = '';

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedValue = event.target.value;
    if (this.selectedValue == 'Ampara'){
      this.isTableShown = true;
      this.pharmacy_name = Ampara_pharmacies;

    }
    else if (this.selectedValue == 'Anuradhapura'){
      this.isTableShown = true;
      this.pharmacy_name = Anuradhapura_pharmacies;
    }
    else if (this.selectedValue == 'Badulla'){
      this.isTableShown = true;
      this.pharmacy_name = Badulla_pharmacies;
    }
    else if (this.selectedValue == 'Batticaloa'){
      this.isTableShown = true;
      this.pharmacy_name = Batticaloa_pharmacies;
    }
    else if (this.selectedValue == 'Colombo'){
      this.isTableShown = true;
      this.pharmacy_name = Colombo_pharmacies;
    }
    else if (this.selectedValue == 'Galle'){
      this.isTableShown = true;
      this.pharmacy_name = Galle_pharmacies;
    }
    else if (this.selectedValue == 'Gampaha'){
      this.isTableShown = true;
      this.pharmacy_name = Gampaha_pharmacies;
    }
    else if (this.selectedValue == 'Hambantota'){
      this.isTableShown = true;
      this.pharmacy_name = Hambantota_pharmacies;
    }
    else if (this.selectedValue == 'Jaffna'){
      this.isTableShown = true;
      this.pharmacy_name = Jaffna_pharmacies;
    }
    else if (this.selectedValue == 'Kalutara'){
      this.isTableShown = true;
      this.pharmacy_name = Kalutara_pharmacies;
    }
    else if (this.selectedValue == 'Kandy'){
      this.isTableShown = true;
      this.pharmacy_name = Kandy_pharmacies;
    }
    else if (this.selectedValue == 'Kegalle'){
      this.isTableShown = true;
      this.pharmacy_name = Kegalle_pharmacies;
    }
    else if (this.selectedValue == 'Kilinochchi'){
      this.isTableShown = true;
      this.pharmacy_name = Kilinochchi_pharmacies;
    }
    else if (this.selectedValue == 'Kurunegala'){
      this.isTableShown = true;
      this.pharmacy_name = Kurunegala_pharmacies;
    }
    else if (this.selectedValue == 'Mannar'){
      this.isTableShown = true;
      this.pharmacy_name = Mannar_pharmacies;
    }
    else if (this.selectedValue == 'Matale'){
      this.isTableShown = true;
      this.pharmacy_name = Matale_pharmacies;
    }
    else if (this.selectedValue == 'Matara'){
      this.isTableShown = true;
      this.pharmacy_name = Matara_pharmacies;
    }
    else if (this.selectedValue == 'Monaragala'){
      this.isTableShown = true;
      this.pharmacy_name = Monaragala_pharmacies;
    }
    else if (this.selectedValue == 'Mullaitivu'){
      this.isTableShown = true;
      this.pharmacy_name = Mullaitivu_pharmacies;
    }
    else if (this.selectedValue == 'Nuwara Eliya'){
      this.isTableShown = true;
      this.pharmacy_name = Nuwara_Eliya_pharmacies;
    }
    else if (this.selectedValue == 'Polonnaruwa'){
      this.isTableShown = true;
      this.pharmacy_name = Polonnaruwa_pharmacies;
    }
    else if (this.selectedValue == 'Puttalam'){
      this.isTableShown = true;
      this.pharmacy_name = Puttalam_pharmacies;
    }
    else if (this.selectedValue == 'Ratnapura'){
      this.isTableShown = true;
      this.pharmacy_name = Ratnapura_pharmacies;
    }
    else if (this.selectedValue == 'Trincomalee'){
      this.isTableShown = true;
      this.pharmacy_name = Trincomalee_pharmacies;
    }
    else if (this.selectedValue == 'Vavuniya'){
      
      this.pharmacy_name = Vavuniya_pharmacies;
    }
  }
//   public getOption() {
//     let selectElement = document.querySelector('#select1');
//     let output = selectElement.options[selectElement.selectedIndex].value;
//     let document.querySelector('.output').textContent = output;
// }

  public getPharmacy() {
   
    this.pharmacy_name = Ampara_pharmacies;
      
 }
   
}  























