import styled from 'styled-components';

function NestedRoot(props) {
  return <NestedStyle>{props.children}</NestedStyle>;
}

export const NestedStyle = styled.div`
  width: 80%;
  margin: auto;
`;

export default NestedRoot;
