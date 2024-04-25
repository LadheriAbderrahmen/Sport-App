import { Card, CardTitle, CardBody, Form, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ObjectifFields } from "../../../constant/Fields";

const ObjectifTable = () => {
  
    return (
      <Table striped bordered hover variant="dark" className="ObjectifTable">
      <thead>
        <tr>
          <th>overweight</th>
          <th>Maintain weight</th>
          <th>Weight loss</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    );
  }
  export default ObjectifTable;