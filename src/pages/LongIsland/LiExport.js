import React,{useState,useRef,useEffect} from 'react';
import styled from '@emotion/styled';
import Chart from "react-apexcharts"
import data2014 from './data2014.json'
import data2015 from './data2015.json'
import data2016 from './data2016.json'

const newData = [];
const nassau = [];
const suffolk = [];


const modifydata = (data)=>{
  data.map((industry)=>{
    newData.push({
      county: industry.COUNTY,
      x: industry.DESCRIPTION,
      y: industry.VALUE.replace(/,/g,'')
    })
  })

  newData.map((industry,index)=>{
    if(industry.county==="Nassau County"){
      let onlyNumbers = parseInt(industry.y)
      if(!isNaN(onlyNumbers)){
       const num = Math.round(onlyNumbers / 100000) / 10;
       if(num!=0){
         nassau.push({
           x: industry.x,
           y: num
          })
       }
      }
      
    }else{
      suffolk.push(industry)
    }
  })

}

const Container = styled.div`
    max-width: 1424px;
    margin: auto;
    .chartContainer{
      width: 80%;
      margin: auto;
    }
`;

const LiExport = () => {
    const [year,setYear] = useState(data2014)
    
    const handleChange = (e) =>{
      setYear([e.target.value])
    }
    modifydata(year)
    const [chart,setChart] = useState({
      series: [
        {
          data: nassau
        }
      ],
      options:{
        chart: {
          type: 'treemap'
        },
        title: {
          text: 'Nassau Exports 2014'
        },
        plotOptions: {
          treemap: {
            distributed: true,
            enableShades: false
          }
        }
      }
    })
    return (
        <Container>
          {/* <div className="year-container">
            <label htmlFor="year">Select a Year:</label> 
            <select name="" id="year" onChange={handleChange}>
                <option value="data2014">2014</option>
                <option value={`${data2015}`}>2015</option>
                <option value={`${data2016}`}>2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
            </select>
        </div> */}
        <div className="chartContainer">
            <Chart
              className='diego'
              options={chart.options}
              series={chart.series}
              type="treemap"
              height='700px'
              width='100%'
            />      
        </div>
        </Container>
    );
};

export default LiExport;