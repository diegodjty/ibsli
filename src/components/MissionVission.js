import React from 'react';
import styled from '@emotion/styled';
import { About } from '../img';

const Container = styled.div`

    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    h2{
        color: #7EC2EB;
        font-family: 'Montserrat';
        font-weight: 500;
        text-align: center;
        font-size: 1.8rem;
        
    }
    p{

        text-align: center;
        color: #29446B;
        font-size: 1.2rem;
        font-family: proxima-nova, sans-serif;
    }
    .imgContainer{
        img{
            width: 100%;
        }
    }
    button{
            border: none;
            background-color: #7EC2EB;
            color: #29446B;
            font-family: 'Montserrat';
            font-weight: 500;
            padding: 1rem 1rem;
            font-size: 1rem;
            border-radius: 5px;
            width: 70%;
            margin: auto;
            margin-top: 3rem;
            margin-bottom: 2rem;
        }

    @media (min-width: 768px){
        max-width: 1424px;
        width: 50%;
        margin: auto;
        p{

            font-size: 1.4rem;
        }
        button{
            width: 30%;
        }
        .imgContainer{
            width: 80%;
            margin: 2rem auto;
        }
    }
`;


const MissionVission = () => {
    return (
        <Container>
            <h2>Mission & Vission</h2>
            <p>We are an organization aiming to enhance international
               engagement, and to promote the competitiveness of the 
               region in the global marketplace. IBSLI provides support
               to SME on Long Island with international market intelligence.
               Research is based upon international business activities and
               to examine the business environment for foreign direct
               investment in the region.</p>
            <div className="imgContainer">
                <img src={About} alt="about"/>
            </div>
            <h2>2020 LI Business
                Development Report
            </h2>
            <p>IBSLI produces Business Development Report periodically. The most recent 2020 report
                provides an in-depth analysis of international business activities in New York metro area and
                Long Island. The report provides an overview of exports performance, foreign direct
                investment, and business patterns in the region. It helps the regional and local businesses and
                government agencies to have a better understand of their local economy and international engagement.
            </p>
            <p>The 2020 Long Island, NY, Business Development Report includes the analysis based on the
available exports and economic data from 2016 to 2018 or 2019. In this report, Nassau and
Suffolk county in Long Island showed robust exports and economic growth in 2017 and 2018.
However, exports out of New York declined in 2019 due to various international trade issues.</p>
            <p>Looking forward, 2020 has been and will be an even more challenging for the region due to the
pandemic crisis, tension with China, and political uncertainty in Hong Kong (as one of major
export destinations for NY). The region will focus on the recovery of the economy and at the
same time explore new foreign markets to remain export growth.</p>
            <button>
                View the full report here
            </button>
        </Container>
    );
};

export default MissionVission;