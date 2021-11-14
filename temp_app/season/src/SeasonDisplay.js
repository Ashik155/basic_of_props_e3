import React from 'react';



//creating a helper funciton for Determine what actual season is...
const getSeason = (lat, month)=>{
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer': 'winter'
    }
    else{
        return lat > 0 ? 'winter': 'summer'
    }
}
const SeasonDisplay = (props )=>{
    // console.log(props.lat)
    // console.log("Passing this lat to generate season....")
    // console.log(getSeason(props.lat, new Date().getMonth()))

    const Season = getSeason(props.lat, new Date().getMonth())
    console.log(Season)
    //Object Extracting Here done... for determing 2 things 
    //1. The Text to Display according ton season 
    //2. The Icon to be shown according to Season name using Ternary Operations....


    const  extractSeasonData ={
        winter : {
            text : 'It is winter and better to stay in home and enjoy Cream of Brocolli Soup....',
            iconName : 'snowflake'
        },
        summer : {
            text : 'Hot !, go out and get some ice capps......',
            iconName : 'sun'
        }
    }
const {text,iconName} =extractSeasonData[Season]


    return (
        <div> 
            <i className={`massive ${iconName} icon` } />
            <h1>{text}</h1>
            <i className={`massive ${iconName} icon` } />
        </div>
    )
}
export default SeasonDisplay;