import {EducationDegree} from './education-degree';
import {Division} from './division';
import {Contract} from '../contract/contract';


export interface Employee {
  id: number;
  name: string;
  birthDay: string;
  idCard: string;
  salary: number;
  phone: string;
  email: string;
  address: string;
  position: Position;
  educationDegree: EducationDegree;
  division: Division;
  contracts: string;
}
