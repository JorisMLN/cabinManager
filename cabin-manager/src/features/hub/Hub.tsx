import Watering from "../watering/Watering";
import Camera from "../camera/Camera";
import Alarm from "../alarm/Alarm";
import Portal from "../portal/Portal";

const Hub = () => {

  return (
    <div className="hub">
      <Watering />
      <Camera />
      <Alarm />
      <Portal />
    </div>
  );
}

export default Hub;