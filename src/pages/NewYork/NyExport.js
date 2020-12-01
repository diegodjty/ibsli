import React,{useState} from 'react';
import styled from '@emotion/styled';
import ReactTooltip from "react-tooltip";
import MetaData from '../../components/MetaData'

import ExportMap from './ExportMap'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F6F8FD;
    height: 100vh;
    h2{
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 1.8rem;
        color: #7EC2EB;
        width: 90%;
        margin: auto;
        margin-top: 5rem;
    }
    select{
        width: 40%;
        margin-top: 2rem;
        padding: .5rem;
    }
    .__react_component_tooltip{
        opacity: 1;
    }
`;



const NyExport = () => {
    const [content, setContent] = useState("");
    return (
        <Container>
            <MetaData title="NY export" description="New York State World Exports" />
            <ExportMap setTooltipContent={setContent} />
            <ReactTooltip textColor='#7EC2EB' backgroundColor='white'>{content}</ReactTooltip>
        </Container>
    );
};

export default NyExport;