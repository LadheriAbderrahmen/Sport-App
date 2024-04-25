import React from 'react'
import { Card } from 'react-bootstrap'
import { MdPlace } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { Link } from 'react-router-dom';

function Cardcomp({ imgUrl, Title, Description , website}: any) {
    return (
        <Card style={{ width: '18rem' }} className='CardGym'>
            <Card.Img variant="top" src={imgUrl}  />
            <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <Card.Text className='mt-3'>
                    <div className="d-flex ContentCardGym" >
                        <MdPlace/>
                        <p>
                        {Description}
                        </p>
                    </div>
                    <div className="d-flex ContentCardGym" >
                        <CgWebsite/>
                        <p>
                            <Link to={website} target="_blank">
                        {website}
                        </Link>
                        </p>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cardcomp