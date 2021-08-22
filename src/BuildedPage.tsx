import React from "react";
import { ElementConfig } from "./store/page/reducers";
import { AppState } from "./store/types";

import { connect } from "react-redux"


interface StateToProps {
    elements: ElementConfig
  }


  
type Props = StateToProps

const BuildedPage = ({ elements }: Props) =>{



  return <>{elements.elements.map((value,index)=>{
    return(<>
      <div key={index} style={{...value.style, marginTop:"10px"}}/>
    </>)
  })}</>
}

const mapStateToProps = (state: AppState): StateToProps => ({
    elements: state.elements
  })


  export default connect<StateToProps, null, any, AppState>(mapStateToProps)(BuildedPage)