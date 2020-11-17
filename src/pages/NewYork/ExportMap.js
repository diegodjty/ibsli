import React, { memo,useState,useEffect } from "react";
import styled from '@emotion/styled';
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";

import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

import map from '../../map/worldmap.json';



  
  const Container = styled.div`
    font-family: 'Montserrat';
    width: 100%;
    margin: auto;
    max-width: 1424px;
    height: auto;
    h2{
        margin: 3rem auto 1rem auto;
        width: 90%;
    }

    .year-container{
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: auto;
        select{
            margin-top: 1rem;
            margin-bottom: 2rem;
            appearance: none;
        }
    }

    @media (min-width:768px){
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2{
        margin-left: 0;
      }
      .year-container{
        width: 20%;
        margin-left: 0;
      }
    }
  `;
const CompsMap = styled(ComposableMap)`
  width: 100%;
  height: 100%;
  @media (min-width: 768px){
    width: 70%;
    margin: auto;
  }
`;

  const ExportMap = ({ setTooltipContent }) => {
    const [geoUrl,setGeoUrl] = useState(map)
    const [data,setData] = useState([])
    const [year, setYear] = useState('2014')


    useEffect(() => {
        csv(`/NY Export by country.csv`).then((data) => {
          setData(data);
        });
      }, []);

    const handleChange = (e) =>{
        setYear(e.target.value)
    }

    const colorScale = scaleLinear()
    .domain([0,
            5000000,
            20000000,
            100000000,
             4265878253,
             8531756506,
             17063513012])
    .range(["#D7F1B8",
            "#d7f171",
            "#95dd7d",
            "#5bc489",
            "#23aa8f",
            "#007f86",
            "#2a4858"]);

    const rounded = num => {
        if (num > 1000000000) {
          return Math.round(num / 100000000) / 10 + "B";
        } else if (num > 1000000) {
          return Math.round(num / 100000) / 10 + "M";
        } else {
          return Math.round(num / 100) / 10 + "K";
        }
      };
    
    return (
      <Container>

        <h2>New York State World Exports</h2>
        <div className="year-container">
            <label htmlFor="year">Select a Year:</label> 
            <select name="" id="year" onChange={handleChange}>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
            </select>
        </div>
        <CompsMap 
            data-tip="" 
            projectionConfig={{rotate: [-10, 0, 0],scale: 200}}
            height={600}
        >
        
            {data.length > 0 &&(
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                geographies.map(geo => {   
                    const d = data.find((s) => s.Partner === geo.properties.NAME_LONG);  
                    return (
                        <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                            if(d){
                                setTooltipContent(`${geo.properties.NAME} - $${rounded(d[year])}`)
                            }
                        }}
                        onMouseLeave={() => {
                            setTooltipContent("");
                        }}
                        fill={d ? colorScale(d[year]): 'white'}
                        style={
                            {
                            hover: {
                            fill: "#F2CFAC",
                            outline: "none"
                            },
                            pressed: {
                            fill: "#F2CFAC",
                            outline: "none"
                            }
                        }}
                        />
                    )
                })
                }
            </Geographies>
            )}

        </CompsMap>
      </Container>
    );
  };
  
  export default memo(ExportMap);