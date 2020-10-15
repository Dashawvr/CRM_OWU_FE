import {UserRole} from '../constants';

export interface Credentials {
  name: string;
  surname: string;
  role: UserRole;
}
