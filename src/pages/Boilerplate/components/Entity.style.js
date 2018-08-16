import styled from "styled-components";

const Wrapper = styled.div`
  & {
    width: 600px;
    margin: 30px auto;
    padding: 20px 10px;
    border: 1px solid gray;
  }
  div.foo {
    width: 100%;
  }
`;

export default Wrapper;
