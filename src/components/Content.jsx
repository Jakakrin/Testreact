import React from 'react'
import "./Content.css"
import Button from 'react-bootstrap/Button';
import Conter from '../img/connter.png'
function Content() {
    return (
        <div className="container">
            <section className="content-con">
         
                <div className="content-r">
                    <h2>ทำไมต้องเลือกเรา</h2>
                    <p>
                    สถาบันรับรองและตรวจสอบวัตถุมงคลประเทศไทย ก่อตั้งโดยคณะกรรมการผู้ทรงคุณวุฒิและมีประสบการณ์ในวงการพระเครื่องมากกว่า 30 ปี ซึ่งเป็นที่ยอมรับและรู้จักในวงการพระเครื่องเป็นอย่างดี และทำให้มั่นใจได้ว่าใบรับรองจากทางสถาบัน ACI ได้ผ่านการตรวจสอบ
                    </p>
                    <Button variant="outline-success">เพิ่มเติม</Button>{' '}
                </div>
                <div className="content-l">
                    <img src={Conter} alt=""/>
                </div>
            </section>

        </div>
    )
}

export default Content

