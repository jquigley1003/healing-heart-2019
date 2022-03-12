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

export interface Completed {
  work02module01?: boolean;
  work02module02?: boolean;
  work02module03?: boolean;
  work02module04?: boolean;
  work02module05?: boolean;
  work02module06?: boolean;
  work02module07?: boolean;
}

export interface User extends DisplayName {
  uid: string;
  email: string;
  address?: Address;
  phone?: number;
	roles?: Roles;
  completed?: Completed;
  workshopIDs?: string[];
  moduleIDs?: string[];
}
