import React, { Component } from 'react';
import OSMImg from '../../assets/OSM1.png';
import SatelliteImg from '../../assets/Satellite1.png';
import './layerControl.scss';


class LayerControl extends Component {

    render() { 
        return (
            <img onClick={()=>this.props.onChangeMap()} src={this.props.MapType=='OSM' ? SatelliteImg : OSMImg} id='layercontrol' alt='' />
        );
    }
}
 
export default LayerControl;