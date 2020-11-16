import React,{useState} from 'react';
import styled from '@emotion/styled';
import { LiMap } from '../../img';
import Slider from '@material-ui/core/Slider';

const Container = styled.div`
    .slider{
        width: 50%;
    }
`;

const LiExport = () => {

    const [year,setYear] = useState('2014');

    const marks = [
        {
          value: 0,
          label: '2014',
        },
        {
          value: 25,
          label: '2015',
        },
        {
          value: 50,
          label: '2016',
        },
        {
          value: 75,
          label: '2017',
        },
        {
          value: 100,
          label: '2018',
        },
      ];
      
      function valuetext(value) {
        return `${value}°C`;
      }
      
      function valueLabelFormat(value) {
        return marks.findIndex((mark) => mark.value === value) + 1;
      }
    return (
        <Container>
            <img src={LiMap} alt=""/>
            <Slider
                defaultValue={0}
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-restrict"
                step={null}
                marks={marks}
                className="slider"
                onChange={(e)=>console.log(e.target.value)}
      />
        </Container>
    );
};

export default LiExport;