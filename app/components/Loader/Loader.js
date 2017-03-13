import React from 'react';

import styled from 'styled-components';

const LoaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eee;
`;

const Loader = () => <LoaderContainer>Loading</LoaderContainer>;

export default Loader;