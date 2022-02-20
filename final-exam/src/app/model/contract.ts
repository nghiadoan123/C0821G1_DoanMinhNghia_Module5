import {Customer} from './customer';
import {Facility} from './facility';

export interface Contract {
  id?: number;
  checkIn?: string;
  checkOut?: string;
  deposit?: number;
  totalMoney?: number;
  customer?: Customer;
  facility?: Facility;
}
