import { Card, CardTitle, CardBody, Form, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ObjectifFields } from "../../../constant/Fields";

const TimeTable = () => {

    return (
        <Table striped bordered hover variant="dark" className="TimeTable">
            <thead>
                <tr>
                    <th>Days\time</th>
                    <th>8-10</th>
                    <th>10-12</th>
                    <th>12-13</th>
                    <th>13-15</th>
                    <th>15-17</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Monday</th>
                    <td className="poitrine">Poitrine</td>
                    <td>repas</td>
                    <td>etude</td>
                    <td>Biceps</td>
                    <td className="break">Break</td>
                </tr>
                <tr>
                    <th>Tuesday</th>
                    <td>repas</td>
                    <td>Dourceaux</td>
                    <td>@repas</td>
                    <td className="break">Break</td>
                    <td>sleep</td>
                </tr>
                <tr>
                    <th>Wednesday</th>
                    <td>repas</td>
                    <td>cardio</td>
                    <td className="break">Break</td>
                    <td>work</td>
                    <td className="break">Break</td>
                </tr>
                <tr>
                    <th>Thursday</th>
                    <td>repas</td>
                    <td>cardio</td>
                    <td className="break">Break</td>
                    <td>work</td>
                    <td className="break">Break</td>
                </tr>
                <tr>
                    <th>Friday</th>
                    <td className="poitrine">Poitrine</td>
                    <td>repas</td>
                    <td>etude</td>
                    <td>Biceps</td>
                    <td className="break">Break</td>
                </tr>
                <tr>
                    <th>Saturday</th>
                    <td>repas</td>
                    <td>Dourceaux</td>
                    <td>@repas</td>
                    <td className="break">Break</td>
                    <td>sleep</td>
                </tr>
                <tr>
                    <th>Sunday</th>
                    <td className="poitrine">Poitrine</td>
                    <td>repas</td>
                    <td>etude</td>
                    <td>Biceps</td>
                    <td className="break">Break</td>
                </tr>
            </tbody>
        </Table>
    );
}
export default TimeTable;