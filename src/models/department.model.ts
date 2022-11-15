import { ClassModel } from './class.model';
import { UserModel } from './user.model';

interface Expand {
  'classes(department)': ClassModel[];
  'users(department)': UserModel[];
  admin: UserModel;
}

export interface DepartmentModel {
  admin: string;
  code: string;
  collectionId: string;
  collectionName: string;
  college: string;
  created: Date;
  expand: Expand;
  id: string;
  name: string;
  updated: Date;
}
