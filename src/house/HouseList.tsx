import useFetchHouses from "../hooks/HouseHooks";
import { Row } from "react-bootstrap";
import HouseCard from "./HouseCard";
import { House } from "../types/house";
const HousesList = () => {
  const { data } = useFetchHouses();

  return (
    <div>
      <div className="row mb-2">
        <h5 className="themeFontColor">We have found some houses around you</h5>
      </div>

      {/* Data table */}
      <div className="cards-container">
        <Row>
          {data &&
            data.map((house: House) => <HouseCard key={house.id} {...house} />)}
        </Row>
      </div>
    </div>
  );
};

export default HousesList;
