import ListGroup from "react-bootstrap/ListGroup";

function CaseStudies() {
  return (
    <ListGroup
      horizontal
      className="justify-content-center"
      variant="flush"
      style={{ marginBottom: "20px" }}
    >
      <ListGroup.Item
        style={{ backgroundColor: "#D2B202" }}
        className="text-white "
      >
        WON
      </ListGroup.Item>
      <ListGroup.Item>
        <span className="mt-3 me-5">Diamond insurance class actions </span>
        <span className="mt-3 m-2">2021</span>
      </ListGroup.Item>
      <ListGroup.Item style={{ fontSize: "9px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eo
        consequat
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="#"
        style={{ backgroundColor: "#000000", width: "156px" }}
        className="text-white "
      >
        View Case Study
      </ListGroup.Item>
    </ListGroup>
  );
}

export default CaseStudies;
