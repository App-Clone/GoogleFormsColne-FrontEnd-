import { Container, Card } from "react-bootstrap";

function Success() {
  return (
    <Container>
      <Card className="justify-content-center">
        <Card.Header>Response successfully submitted</Card.Header>
        <Card.Body>To submit another response use another gmail id</Card.Body>
      </Card>
    </Container>
  );
}

export default Success;