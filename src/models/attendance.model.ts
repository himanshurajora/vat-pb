import { ClassModel } from './class.model';
import { UserModel } from './user.model';

interface Expand {
 class: ClassModel;
 student: UserModel;
}
export interface AttendanceModel {
  class: string;
  collectionId: string;
  collectionName: string;
  created: Date;
  expand: Expand;
  id: string;
  present: boolean;
  student: string;
  updated: Date;
}

