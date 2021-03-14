import React, { Component } from 'react';
import Navbar from '../components/navbar/navBar';
import License from '../components/license/license';
import Toolbar from '../components/toolbar/toolbar';
import Map from '../components/map/map';
import LocateBTN from '../components/locatebtn/locateBtn';
import LayerControl from '../components/layercontrol/layerControl';
import RightSideBar from '../components/rightSideBar/rightSideBar';
import OSMImg from '../assets/OSM1.png';
import SatelliteImg from '../assets/Satellite1.png';

class Mappage extends Component {
    state = {
        basemapType : 'OSM',
        img : SatelliteImg,
        visible: false,
        placementRight: 'right',
        // zoom:11,
        // draw: false,
        // markerOn: false,
    }
    
    changeBaseMap = () => {
        // console.log('button Clicked!',this);
        const currnetBasemap=this.state.basemapType;
        this.setState({
            basemapType:currnetBasemap=='OSM'?'Satellite':'OSM',
            img:currnetBasemap=='OSM'?SatelliteImg:OSMImg
        })  
    }

    showDrawer = () => {
        // console.log('Drawer Showed!');
        this.setState({
          visible: true,
        });
    };
    
    closeDrawer = () => {
        this.setState({
          visible: false,
        });
    };

    // handleZoomIn = () => {
    //     this.setState({
    //         zoom: this.state.zoom+1
  
    //     })
    // }

    // handleZoomOut = () => {
    //     this.setState({
    //         zoom: this.state.zoom-1
    //     })
    // }

    // handleZoomExtent = () => {
    //     this.setState({
    //         zoom: 11
    //     })
    // }

    // handleDraw = () => {
    //     this.setState({
    //         draw: true
    //     })
    // }

    // handleMarker = () => {
    //     console.log(this.state.markerOn);
    //     this.state.markerOn ? this.setState({markerOn:false}) : this.setState({markerOn:true})
    // }

    // zoom={this.state.zoom} draw={this.state.draw} marker={this.state.markerOn}
    
    render() { 
        return (
            <div id='page_container'>
                <Navbar />
                <Map MapType={this.state.basemapType} /> 
                {/* <Toolbar 
                onZoomIn={this.handleZoomIn}
                onZoomOut={this.handleZoomOut} 
                onZoomExtent={this.handleZoomExtent}
                onDraw={this.handleDraw}
                onMarker={this.handleMarker}
                /> */}
                <LocateBTN />
                <LayerControl onChangeMap={this.changeBaseMap} MapType={this.state.basemapType}/>
                <RightSideBar onShowDrawer={this.showDrawer} onCloseDrawer={this.closeDrawer} visible={this.state.visible} placement={this.state.placementRight} />
                <License />
            </div> 
        );
    }
}
 
export default Mappage;