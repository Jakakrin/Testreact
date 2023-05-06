// import React from "react";
// import {
//   Box,
//   Container,
//   Row,
//   Column,
//   FooterLink,
//   Heading,
// } from "./Footer";

// const Footer = () => {
//   return (
//     <Box>
//       <h1 style={{ color: "green",
//                    textAlign: "center",
//                    marginTop: "-50px" }}>
//         GeeksforGeeks: A Computer Science Portal for Geeks
//       </h1>
//       <Container>
//         <Row>
//           <Column>
//             <Heading>About Us</Heading>
//             <FooterLink href="#">Aim</FooterLink>
//             <FooterLink href="#">Vision</FooterLink>
//             <FooterLink href="#">Testimonials</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Services</Heading>
//             <FooterLink href="#">Writing</FooterLink>
//             <FooterLink href="#">Internships</FooterLink>
//             <FooterLink href="#">Coding</FooterLink>
//             <FooterLink href="#">Teaching</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Contact Us</Heading>
//             <FooterLink href="#">Uttar Pradesh</FooterLink>
//             <FooterLink href="#">Ahemdabad</FooterLink>
//             <FooterLink href="#">Indore</FooterLink>
//             <FooterLink href="#">Mumbai</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Social Media</Heading>
//             <FooterLink href="#">
//               <i className="fab fa-facebook-f">
//                 <span style={{ marginLeft: "10px" }}>
//                   Facebook
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-instagram">
//                 <span style={{ marginLeft: "10px" }}>
//                   Instagram
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-twitter">
//                 <span style={{ marginLeft: "10px" }}>
//                   Twitter
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-youtube">
//                 <span style={{ marginLeft: "10px" }}>
//                   Youtube
//                 </span>
//               </i>
//             </FooterLink>
//           </Column>
//         </Row>
//       </Container>
//     </Box>
//   );
// };
// export default Footer;

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h5>ที่ตั้งบริษัท</h5>
            <h6 className="list-unstyled">
              <li>2972 Westheimer Rd. Santa Ana, Illinois 85486 </li>

              <li>0812345666</li>
            </h6>
          </div>
          {/* Column2 */}
          <div className="col">
            <h5>หน้าหลัก</h5>
          </div>
          {/* Column3 */}
          <div className="col">
            <h5>เกี่ยวกับเรา</h5>
          </div>
          <div className="col">
            <h5>คลังพระเครือง</h5>
            <br/>
            <br/>
            <li>Copyright</li>
          </div>
  
        </div>
        <hr />
        <div className="row">
            <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
