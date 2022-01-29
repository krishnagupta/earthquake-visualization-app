import { FC, useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { getEarthQuakeData } from "../../Services/getEarthQuakeData";
import { IEarthQuakeData } from './models'

const Map: FC = () => {
  const [earthQuakeData, setEarthQuakeData] = useState<IEarthQuakeData[]>([]);
  const key = process.env.REACT_APP_GOOGLE_MAP_KEY as string
  const getData = async () => {
    const data = await getEarthQuakeData();
    setEarthQuakeData(data.features);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderMarkers = (map: any, maps: any) => {
    earthQuakeData.length &&
          earthQuakeData.map((data) => {
            const title = data.properties.title
              return  new maps.Marker({
                position: { lat: data.geometry.coordinates[0], lng: data.geometry.coordinates[1]},
                map,
                title,
                });
          })
   };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        defaultCenter={{
          lat: 38.4161,
          lng: 63.6167,
        }}
        defaultZoom={2}
        onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
        yesIWantToUseGoogleMapApiInternals
      >
      </GoogleMapReact>
    </div>
  );
};

export default Map;
