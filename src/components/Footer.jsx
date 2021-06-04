import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f2bdce" };

  return (
    <footer style={bgStyle} className='mt-auto py-5 text-center '>
      <Container>
        {props.children}
        <i className='fas fa-code' /> with <i className='fas fa-heart' /> by{" "}
        <a
          className='badge badge-dark'
          rel='noopener'
          href='https://github.com/lohyingxin'
          aria-label='My GitHub'
        >
          Loh Ying Xin
        </a>{" "}
        using <i className='fab fa-react' />
      </Container>
    </footer>
  );
};

export default Footer;
