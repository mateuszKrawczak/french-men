export interface UserDetails {
  name: { title: string; first: string; last: string };
  location: { city: string; state: string; country: string };
  dob: { date: Date; age: number };
  phone: string;
  id: {
    name: string;
    value: string;
  };
}
