import * as clientWrapper from './clientWrapper'

const getEarthQuakeData = async () => {
    const data = await clientWrapper.get(
      "/earthquakes/feed/v1.0/summary/all_day.geojson",
      {}
    );
   return data;
  };

  export {
    getEarthQuakeData
  }