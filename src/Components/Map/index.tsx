import { FC, useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { getEarthQuakeData } from "../../Services/getEarthQuakeData";

interface IEarthQuakeData {
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

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33,
        }}
        defaultZoom={10}
      >
        {earthQuakeData.length &&
          earthQuakeData.map((data) => {
              return (
                <Marker
                  key={data.id}
                  lat={data.geometry.coordinates[0]}
                  lng={data.geometry.coordinates[1]}
                />
              );
          })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
