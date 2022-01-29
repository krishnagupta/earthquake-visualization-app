export interface IEarthQuakeData {
    geometry: {
      coordinates: Array<number>;
    };
    id: string;
    properties: {
      title: string;
      place: string;
      detail: string;
    };
  }