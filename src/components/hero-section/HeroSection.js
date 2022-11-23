import styled from 'styled-components';

function HeroSection() {
  return (
    // TODO: put in main bg img
    // TODO: reference valorant website for button design using ::before and ::after sudo selectors
    <div>
      <MiddleText>
        <p>Lorem Ipsum</p>
        <h1>SKULL SPLIT</h1>
        <MainButt>Play Now</MainButt>
      </MiddleText>
    </div>
  );
}

const MiddleText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainButt = styled.button``;

export default HeroSection;
