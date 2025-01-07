import { Col, Card } from "react-bootstrap";
import { currencyFormatter } from "../config";

type Args = {
  id: number;
  address: string;
  price: number;
  country: string;
};

const HouseCard = ({ id, address, price, country }: Args) => {
  const adjustedId = id > 6 ? 1 : id;
  const imagePath = `/tempstorage/house${adjustedId}-1.jpg`;

  return (
    <Col key={id} xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Card className="house-card shadow-sm border-0">
        <Card.Img 
          className="house-card-img rounded-top" 
          variant="top" 
          src={imagePath} 
        />
        <Card.Body className="house-card-body">
          <Card.Title className="house-card-price text-primary fw-bold mb-2">
            {currencyFormatter.format(price)}
          </Card.Title>
          <Card.Text className="house-card-country text-secondary mb-1">
            {country}
          </Card.Text>
          <Card.Text className="house-card-address text-muted">
            {address}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HouseCard;
