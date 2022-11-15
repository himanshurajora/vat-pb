import { DepartmentModel } from './department.model';
import { UserModel } from './user.model';

interface Expand {
  admin: UserModel;
  'departments(college)': DepartmentModel[];
}
export interface CollegeModel {
  admin: string;
  code: string;
  collectionId: string;
  collectionName: string;
  created: Date;
  expand: Expand;
  id: string;
  name: string;
  updated: Date;
}
