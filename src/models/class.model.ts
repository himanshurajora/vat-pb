import { AttendanceModel } from "./attendance.model";
import { DepartmentModel } from "./department.model";

export interface ClassModel {
    code:           string;
    collectionId:   string;
    collectionName: string;
    created:        Date;
    department:     string;
    expand:         Expand;
    id:             string;
    name:           string;
    updated:        Date;
}

interface Expand {
    "attendances(class)": AttendanceModel[];
    department:           DepartmentModel;
}