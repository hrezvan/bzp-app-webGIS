import React, { Component } from 'react';
import L, { map } from 'leaflet';
// import { MapContainer, TileLayer, LayersControl , Marker, Popup, ScaleControl, ZoomControl } from 'react-leaflet';
import Toolbar from '../toolbar/toolbar';
import {createAreaTooltip , updateAreaTooltip} from '../helper.js';
import LeftSideBar from '../leftSideBar/leftSideBar';
import pin from '../../assets/pin.png';
import shadow from '../../assets/shadow2.png';
import  'leaflet.polylinemeasure';
import 'leaflet-measure';
import "leaflet-mouse-position";
import 'leaflet-easyprint';
import './map.scss';
import '../../Style.scss';
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";


// const {BaseLayer} = LayersControl;

const position_options= {
    position: 'bottomleft',
    separator: ' | ',
    emptyString: 'Unavailable',
    lngFirst: false,
    numDigits: 5,
    wrapLng: true,
}

const scale_options={
    position: 'bottomleft',
    imperial: false,
}

const pinIcon = L.icon({
    iconUrl: pin,
    iconSize: [38, 45],
    iconAnchor: [20, 45],
    // popupAnchor: [-3, -76],
    popupAnchor: [0, 0],
    shadowUrl: shadow,
    shadowSize: [40, 35],
    // shadowSize: [0, 0],
    shadowAnchor: [10, 45]
    // shadowAnchor: [0, 0]
});

const polyline_options = {
    position: 'topright',                    // Position to show the control. Possible values are: 'topright', 'topleft', 'bottomright', 'bottomleft'
    unit: 'metres',                         // Show imperial or metric distances. Values: 'metres', 'landmiles', 'nauticalmiles'
    showBearings: false,                    // Whether bearings are displayed within the tooltips
    measureControlTitleOn: 'Turn on PolylineMeasure',   // Title for the control going to be switched on
    measureControlTitleOff: 'Turn off PolylineMeasure', // Title for the control going to be switched off
    measureControlLabel: '&#8614;',         // HTML to place inside the control
    measureControlClasses: [],              // Classes to apply to the control
    backgroundColor: '#8f8',                // Background color for control when selected
    cursor: 'crosshair',                    // Cursor type to show when creating measurements
    clearMeasurementsOnStop: false,          // Clear all the measurements when the control is unselected
    showMeasurementsClearControl: true,    // Show a control to clear all the measurements
    clearControlTitle: 'Clear Measurements',// Title text to show on the clear measurements control button
    clearControlLabel: '&times',            // Clear control inner html
    clearControlClasses: [],                // Collection of classes to add to clear control button
    showUnitControl: false,                 // Show a control to change the units of measurements
    tempLine: {                             // Styling settings for the temporary dashed line
        color: '#00f',                      // Dashed line color
        weight: 2                           // Dashed line weight
    },          
    fixedLine: {                            // Styling for the solid line
        color: '#006',                      // Solid line color
        weight: 2                           // Solid line weight
    },
    startCircle: {                          // Style settings for circle marker indicating the starting point of the polyline
        color: '#000',                      // Color of the border of the circle
        weight: 1,                          // Weight of the circle
        fillColor: '#0f0',                  // Fill color of the circle
        fillOpacity: 1,                     // Fill opacity of the circle
        radius: 3                           // Radius of the circle
    },
    intermedCircle: {                       // Style settings for all circle markers between startCircle and endCircle
        color: '#000',                      // Color of the border of the circle
        weight: 1,                          // Weight of the circle
        fillColor: '#ff0',                  // Fill color of the circle
        fillOpacity: 1,                     // Fill opacity of the circle
        radius: 3                           // Radius of the circle
    },
    currentCircle: {                        // Style settings for circle marker indicating the latest point of the polyline during drawing a line
        color: '#000',                      // Color of the border of the circle
        weight: 1,                          // Weight of the circle
        fillColor: '#f0f',                  // Fill color of the circle
        fillOpacity: 1,                     // Fill opacity of the circle
        radius: 3                           // Radius of the circle
    },
    endCircle: {                            // Style settings for circle marker indicating the last point of the polyline
        color: '#000',                      // Color of the border of the circle
        weight: 1,                          // Weight of the circle
        fillColor: '#f00',                  // Fill color of the circle
        fillOpacity: 1,                     // Fill opacity of the circle
        radius: 3                           // Radius of the circle
    },
};

const area_options = {
    position: 'topright',
    primaryAreaUnit: 'sqmeters',
    // activeColor: '#2825cc',
    // completedColor: '#2a8ade',
    activeColor: '#9C27B0',
    completedColor: '#9C27B0',
}

const print_options = {
    title: 'My awesome print button',
    position: 'bottomright',
    sizeModes: ['A4Portrait', 'A4Landscape']
}

class Map extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            map : null,
            zoom: 11,
            visible: false,
            placement: 'left',
            identifyOn: false,
            deleteOn: false,
            markerOn: false,
            lineMeasureOn: false,
            areaMeasureOn: false,
        }
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

    handleZoomIn = () => {
        var zoom = this.state.map.getZoom();
        var mymap=this.state.map;
        mymap.setZoom(zoom+1);
        this.setState({
            map: mymap
        })
    }

    handleZoomOut = () => {
        var zoom = this.state.map.getZoom();
        var mymap=this.state.map;
        mymap.setZoom(zoom-1);
        this.setState({
            map: mymap
        })
    }

    handleZoomExtent = () => {
        var mymap=this.state.map;
        mymap.setZoom(11);
        mymap.setView([35.68,51.38]);
        this.setState({
            map: mymap
        })
    }

    handleIdentify = () => {
        this.state.identifyOn ? this.setState({identifyOn:false}) : this.setState({identifyOn:true})
    }

    handleDelete = () => {
        // if (document.getElementsByClassName('polyline-measure-unicode-icon polyline-measure-clearControl')[0] || document.getElementsByClassName('js-deletemarkup deletemarkup')[0]) {
        //     document.getElementsByClassName('polyline-measure-unicode-icon polyline-measure-clearControl')[0].click();
        //     document.getElementsByClassName('js-deletemarkup deletemarkup')[0].click();
        // }
        // document.getElementsByClassName('js-deletemarkup deletemarkup')[0].click();
        document.getElementsByClassName('polyline-measure-unicode-icon polyline-measure-clearControl')[0].click();
        var mymap=this.state.map;
        // mymap.removeLayer(markers);
        // mymap.eachLayer(function (groupMarker) {
        //     mymap.removeLayer(groupMarker)
        // }); 
        // console.log(document.getElementsByClassName('js-deletemarkup deletemarkup')[0])
        
        // this.state.deleteOn ? this.setState({deleteOn:false}) : this.setState({deleteOn:true})
    }

    handleMarker = () => {
        // console.log(this.state.markerOn);
        this.state.markerOn ? this.setState({markerOn:false}) : this.setState({markerOn:true});
        console.log(this.state.markerOn)
       if (!this.state.markerOn) {
            // this.setState({
            //     lineMeasureOn: false,
            //     areaMeasureOn: false,
            // })
            // document.getElementById('polyline-measure-control').click();
            document.getElementById("mapid").style.cursor = "crosshair";
       } else{
            document.getElementById("mapid").style.cursor = "grab";
       }
       
    }
    
    handleMeasureLine = () => {
        document.getElementById('polyline-measure-control').click();
        this.state.lineMeasureOn ? this.setState({lineMeasureOn:false}) : this.setState({lineMeasureOn:true});
    }

    handleMeasureArea = () => {
        // document.getElementsByClassName('js-start start')[0].click();
        document.getElementsByClassName('leaflet-draw-draw-polygon')[0].click();
        // this.state.areaMeasureOn ? this.setState({areaMeasureOn:false}) : this.setState({areaMeasureOn:true});
    }

    handlePrint = () => {
        document.getElementsByClassName('A4Landscape page')[0].click();
    }

    componentDidMount(){
        var mymap=this.state.map;
        mymap =L.map(document.getElementById('mapid'),{drawControl:true}).setView([35.68,51.38], 11)
        var OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
        OSM.addTo(mymap)
      
        // var Satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');

        L.control.scale(scale_options).addTo(mymap);
        L.control.mousePosition(position_options).addTo(mymap);
        L.control.polylineMeasure(polyline_options).addTo(mymap);
        var measureControl = new L.Control.Measure(area_options);measureControl.addTo(mymap);
        L.easyPrint(print_options).addTo(mymap);

        var drawnItems = L.featureGroup().addTo(mymap);
        mymap.addControl(
            new L.Control.Draw({
              edit: {
                featureGroup: drawnItems,
                poly: {
                  allowIntersection: false,
                },
              },
              draw: {
                marker: false,
                circle: false,
                circlemarker: false,
                rectangle: false,
                polyline: false,
                polygon: {
                  allowIntersection: false,
                  showArea: true,
                },
              },
            })
        );
        mymap.on(L.Draw.Event.CREATED, function (event) {
            var layer = event.layer;
          
            if (layer instanceof L.Polygon) {
              createAreaTooltip(layer,mymap);
            }
          
            drawnItems.addLayer(layer);
        });
        mymap.on(L.Draw.Event.EDITED, function (event) {
            event.layers.getLayers().forEach(function (layer) {
              if (layer instanceof L.Polygon) {
                updateAreaTooltip(layer,mymap);
              }
            });
        });

        this.setState({map:mymap})
    }
    
    componentDidUpdate(prevProps,prevState) {
        // console.log('prevProps',prevProps);
        // console.log('prevState',prevState);
        var mymap=this.state.map;
        var OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
        var Satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');
     
        mymap.eachLayer(l=>{
            // l.remove();
            console.log(l);
        })
        // Layer Control
        this.props.MapType=='OSM' ? OSM.addTo(mymap) : Satellite.addTo(mymap);
        
        // Marker Control
        if (this.state.markerOn) {
            var groupMarker = L.featureGroup().addTo(mymap);
            mymap.on('click',function(e){           
            var coord=e.latlng.toString().split(',');
            var lat=coord[0].split('(');
            var long=coord[1].split(')');
            var markers=L.marker([lat[1],long[0]] , {icon: pinIcon}) //.addTo(mymap);    
            // var layerGroup = L.layerGroup([markers])
            // layerGroup.addTo(mymap);
            // markers.addTo(groupMarker)
            mymap.addLayer(markers);
            });
            } else{
            mymap.off('click')
        }
    }

    render(){
        return (
            <div>
                <div id="mapid"></div>
                <Toolbar 
                identifyStatus={this.state.identifyOn}
                deleteStatus={this.state.deleteOn}
                measureLineStatus={this.state.lineMeasureOn}
                markerStatus={this.state.markerOn}
                areaStatus={this.state.areaMeasureOn}
                onZoomIn={this.handleZoomIn}
                onZoomOut={this.handleZoomOut} 
                onZoomExtent={this.handleZoomExtent}
                onIdentify={this.handleIdentify}
                onMarker={this.handleMarker}
                onMeasureLine={this.handleMeasureLine}
                onMeasureArea={this.handleMeasureArea}
                onDelete={this.handleDelete}
                onPrint={this.handlePrint}
                />
                <LeftSideBar id='sider' onShowDrawer={this.showDrawer} onCloseDrawer={this.closeDrawer} visible={this.state.visible} placement={this.state.placement} />
            </div>

            // <MapContainer center={[35.68,51.38]} zoom={11} scrollWheelZoom={true} zoomControl={false}>
            //     {/* <overviewControl position='topleft' /> */}
            //     <LayersControl position='topleft'>
            //         <BaseLayer checked={this.props.MapType=='OSM' ? true : false} name='OpenStreetMap'>
            //             <TileLayer 
            //                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            //             />
            //         </BaseLayer>
            //         <BaseLayer checked={this.props.MapType=='Satellite' ? true : false} name='NASA Gibs Blue'>
            //             <TileLayer 
            //                 url="https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg"
            //                 maxNativeZoom={8}
            //             />
            //         </BaseLayer>
            //     </LayersControl>
            //     {/* <Marker position={[51.505, -0.09]}>
            //         <Popup>
            //          This is London.
            //         </Popup>
            //     </Marker> */}
            //     <ScaleControl position='bottomleft' metric={true} imperial={false} />
            //     <ZoomControl position="bottomright" />
            //     {/* <CoordinatesControl /> */}
            // </MapContainer>
        )
    }
     
}
 
export default Map;