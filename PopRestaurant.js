import React from "react";
import 'antd/dist/antd.css';
import { Card } from 'antd';

const { Meta } = Card;
function PopRest () {
    return (
    <div>
    <   h1>Popular Restaurant</h1>
        <div className='pop-rest'>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="./images/f4.png" />}>
            <Meta title="Palm Shore" description="www.instagram.com" />
            </Card>,
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="./images/f5.png" />}>
            <Meta title="Palm Shore" description="www.instagram.com" />
            </Card>,
        </div>    
    </div>
    );
}

export default PopRest;