import Watering from "../watering/Watering";
import Camera from "../camera/Camera";
import Alarm from "../alarm/Alarm";
import Portal from "../portal/Portal";
import Lights from "../lights/Lights";

const Hub = () => {

  return (
    <div className="hub">
      <Watering />
      <Camera />
      <Alarm />
      <Portal />
      <Lights />
    </div>
  );
}

export default Hub;