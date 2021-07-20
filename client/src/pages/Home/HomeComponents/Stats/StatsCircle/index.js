
import React from 'react';
import Input from '../../../../../components/Inputs/siteDataInput'
import './style.css';

const StatsCircle = (props) => {
  return (
    <>
      <div className="circle-container container-center">
        {/* <svg id="visual" className=" stats-visual" viewBox="0 0 960 540" width="350" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
          <g fill="#AED3BE"><circle r="265" cx="503" cy="277"></circle></g>
          <text className="stats-number title-text" x={1000 / 2} y={590 / 2} dominantBaseline="middle" textAnchor="middle">{props.statTitle}</text>
        </svg> */}
                  <h2 className="stats-number title-text" x={1000 / 2} y={590 / 2} dominantBaseline="middle" textAnchor="middle">{props.statTitle}</h2>

        {props.loggedIn === true && props.editShown === true ? (
          <>
            <Input path={props.titlePath} titleStyling="true" className="" updateBtn="align-btn-left" />
            <Input path={props.bodyPath} titleStyling="true" className="" inputType="textarea" updateBtn="align-btn-left" />
            <Input path={props.linkPath ? (props.linkPath) : ""} titleStyling="true" className="" inputType="textarea" updateBtn="align-btn-left" />
          </>
        ) : (
          <>
            <p className="stats-description" dominantBaseline="middle" textAnchor="middle">{props.statBody}</p>
            <a href={props.statLink} target="_blank" rel="noreferrer" className="stats-link"> Read More Here</a>
          </>
        )}
      </div>
    </>
  )
}

export default StatsCircle