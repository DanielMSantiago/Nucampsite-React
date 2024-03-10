import { Col } from "reactstrap";
import Partner from "./Partner";
import { selectAllPartners } from "./partnersSlice";

const PartnersList = () => {
  const partner = selectAllPartners();

  return (
    <Col className="mt-4">
      {partner.map((partner) => {
        return (
          <div className="d-flex mb-b" key={partner.id}>
            <Partner partner={partner} />
          </div>
        );
      })}
    </Col>
  );
};

export default PartnersList;
