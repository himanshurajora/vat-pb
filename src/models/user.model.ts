import { AttendanceModel } from './attendance.model';
import { CollegeModel } from './college.model';
import { DepartmentModel } from './department.model';

export interface UserModel {
  avatar: string;
  code: string;
  collectionId: string;
  collectionName: string;
  created: Date;
  department: string;
  email: string;
  emailVisibility: boolean;
  expand: Expand;
  id: string;
  name: string;
  role: string;
  updated: Date;
  username: string;
  verified: boolean;
}

interface Expand {
  'attendances(student)': AttendanceModel[];
  'colleges(admin)': CollegeModel[];
  department: DepartmentModel;
  'departments(admin)': DepartmentModel[];
}
