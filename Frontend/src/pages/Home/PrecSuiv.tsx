import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import header from '../../asset/images/header1.jpg'
import header1 from '../../asset/images/header2.jpg'
import header2 from '../../asset/images/header3.jpg'
type PrecSuivProps={
    pastfnc:(data : any)=>void
}
function PrecSuiv({pastfnc}:PrecSuivProps) {
    const list : any[]=[header,header1,header2];
    const [index , setindex]=useState<number>(0);
    
  useEffect(() => {
    pastfnc(list[index]);
    const x = setTimeout(() => {
        pastfnc(list[index]);
        CurrentImageSuiv();
        if(index === list.length - 1){
            setindex(0)
        }
    }, 5000);
    return () => clearTimeout(x);
  }, [index]);

  const CurrentImagePrec = () => {
    if (index > 0) {
      setindex((prev) => prev - 1);
    }
  };

  const CurrentImageSuiv = () => {
    if (index < list.length - 1) {
      setindex((prev) => prev + 1);
    }
  };
    
    return (
        <nav>
            <ul>
                <li onClick={CurrentImagePrec}>
                    <FaAngleLeft  />
                </li>
            </ul>
            <ul className='rightul'>
                <li onClick={CurrentImageSuiv}>
                    <FaAngleRight />
                </li>
            </ul>
        </nav>
    )
}

export default PrecSuiv