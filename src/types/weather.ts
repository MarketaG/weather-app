export type CityCoord = {
  lon: number;
  lat: number;
};

export type City = {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: CityCoord;
};
