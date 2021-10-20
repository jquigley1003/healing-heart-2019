export interface DisplayName {
  firstName?: string;
  lastName?: string;
}

export interface Address {
  street?: string;
  unit?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  country?: string;
}

export interface Roles {
  admin?: boolean;
  workshop01?: boolean;
  workshop02?: boolean;
}

export interface User extends DisplayName {
  uid: string;
  email: string;
  address?: Address;
  phone?: number;
	roles?: Roles;
  workshopIDs?: string[];
  moduleIDs?: string[];
}
