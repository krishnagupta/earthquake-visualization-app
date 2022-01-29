import { FC } from "react";
import { FcRating } from "react-icons/fc";
import ReactTooltip from "react-tooltip";

interface IMarker {
  lat?: number;
  lng?: number;
  key: string;
}

const Marker: FC<IMarker> = ({ key }) => {
  return (
    <div key={key}>
      <p data-tip="hello world">
        <FcRating size={28} />
      </p>
      <ReactTooltip />
    </div>
  );
};

export default Marker;
