import WithHeaderAndFooter from "../withHeaderAndFooter/WithHeaderAndFooter";
import Hub from "./Hub";

const HubFrame = () => {
  
  return (
    <>
      <WithHeaderAndFooter child={<Hub />} />
    </>
  );
}

export default HubFrame;
