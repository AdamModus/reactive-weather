export interface ILocationState {
  coordinates: {
    latitude: Number | undefined;
    longitude: Number | undefined;
  };
  city: String | undefined;
  countryCode: String | undefined;
}
