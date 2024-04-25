import header from '../../asset/images/header1.jpg'
import { Button, Card, CardBody, CardTitle, Col, Form, Row } from 'react-bootstrap';
import PrecSuiv from './PrecSuiv';
import { useState } from 'react';
import { ObjectifFields } from '../../constant/Fields';
import { useForm } from 'react-hook-form';
import ObjectifPage from './ObjectifSection/ObjectifPage';
import ObjectifTable from './ObjectifSection/ObjectifTable';
import TimeTable from './TimeTable/TimeTable';
import goodtime from '../../asset/images/goodtime.png'

const MainContent = () => {
  return (
    <>
      <div className="MainContent">
        <section className="firstSection">
          <div className="paragraphObj">
            <h4>Nothing tasks as good</h4>
            <h2>As being fit feels</h2>
          </div>
          <h3>Objectif</h3>
          <div className="sectionContent">
            <Row>
              <Col>
                <ObjectifPage />
              </Col>
              <Col>
                <ObjectifTable/>
              </Col>
            </Row>
          </div>
        </section>
        <section className="SecondSection">
        <div className="paragraphObj">
            <h4>Do you find it difficult to organize your time?</h4>
            <h2>Use our timetable</h2>
          </div>
          <h3>Create your own timetable</h3>
          <div className="sectionContent">
          <Row>
              <Col>
                <TimeTable />
              </Col>
              <Col style={{textAlign:"center"}}>
                <img src={goodtime} alt="" />
              </Col>
            </Row>
          </div>
        </section>
      </div>
    </>
  );
}



function Index() {
  const [currentimg, setcurrentimg] = useState<any>();

  const test = (data: any) => {
    setcurrentimg(data)

  }

  return (
    <>
      <header>
        <img src={currentimg} alt="" />
        <PrecSuiv pastfnc={test} />
      </header>
      <main>
        <MainContent />
      </main>
    </>

  );
}

export default Index