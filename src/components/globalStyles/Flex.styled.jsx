import styled from "styled-components";

const Flex = styled.div`
    display: flex;
    justify-content: ${({justify})=> justify ? justify : "center"};
    align-items: ${({align})=> align ? align : "center"};
    flex-wrap: ${({wrap})=> wrap && wrap};
    /* border: 1px solid red; */
    background: ${({bg})=> bg && bg };
    padding: ${({pad})=> pad && pad};
`;
export default Flex;