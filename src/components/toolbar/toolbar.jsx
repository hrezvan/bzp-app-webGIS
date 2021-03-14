import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import plus from '../../assets/add.svg';
import minus from '../../assets/minus.png';
import extent from '../../assets/extent.png';
import pinOff from '../../assets/pin.png';
import pinOn from '../../assets/pin2.png';
import identifyOff from '../../assets/identify.png';
import identifyOn from '../../assets/identify2.png';
import areaOff from '../../assets/area.png';
import areaOn from '../../assets/area2.png';
import rulerOff from '../../assets/ruler.png';
import rulerOn from '../../assets/ruler2.png';
// import deleteicon from '../../assets/storage.svg';
import deleteOff from '../../assets/bin.png';
import deleteOn from '../../assets/bin2.png';
// import art from '../../assets/art-gallery.svg';
import brushOff from '../../assets/brush.png';
import brushOn from '../../assets/brush2.png';
import printer from '../../assets/print-button-svgrepo-com.svg';
import './toolbar.scss';

// const useStyles = makeStyles((theme) => ({
//     margin: {
//       margin: theme.spacing(1),
//     },
//     extendedIcon: {
//       marginRight: theme.spacing(1),
//     },
// }));


class Toolbar extends Component {
    // state = {  }
    render() { 
        return ( 
            <div id='toolbar'>
            <IconButton onClick={()=>this.props.onZoomIn()} id='plus-icon' color="primary" component="span">
                <img id='plus' alt="" src={plus} />
            </IconButton>
            <IconButton onClick={()=>this.props.onZoomOut()} id='minus-icon' color="primary" component="span">
                <img id='minus' alt="" src={minus} />
            </IconButton>
            <IconButton onClick={()=>this.props.onZoomExtent()} id='zoom-extent' color="primary" component="span">
                <img id='zoom-extent' alt="" src={extent} />
            </IconButton>
            <IconButton onClick={()=>this.props.onIdentify()} id='brush-icon' color="primary" component="span">
                <img id='brush' alt="" src={this.props.identifyStatus ? identifyOn : identifyOff} />
            </IconButton>
            <IconButton onClick={()=>this.props.onDelete()} id='delete-icon' color="primary" aria-label="upload picture" component="span">
                <img id='delete' alt="" src={deleteOff} />
            </IconButton>
            <IconButton onClick={()=>this.props.onMeasureLine()} id='ruler-icon' color="primary" aria-label="upload picture" component="span">
                <img id='ruler' alt="" src={this.props.measureLineStatus ? rulerOn : rulerOff} />
            </IconButton>
            <IconButton onClick={()=>this.props.onMeasureArea()} id='area-icon' color="primary" aria-label="upload picture" component="span">
                <img id='area' alt="" src={areaOff} />
            </IconButton>
            <IconButton onClick={()=>this.props.onMarker()} id='pin-icon' color="primary" aria-label="upload picture" component="span">
                <img id='pin' alt="" src={this.props.markerStatus ? pinOn : pinOff} />
            </IconButton>
            <IconButton onClick={()=>this.props.onPrint()} id='printer-icon' color="primary" aria-label="upload picture" component="span">
                <img id='printer' alt="" src={printer} />
            </IconButton>
            </div>
        );
    }
}
 
export default Toolbar;


// const Toolbar = () => {
//     // const classes = useStyles();
//     return ( 
//         <div id='toolbar'>
//             <IconButton onClick={()=>this.props.onZoomIn()} id='plus-icon' color="primary" component="span">
//                 <img id='plus' alt="" src={plus} />
//             </IconButton>
//             <IconButton onClick={()=>this.props.onZoomOut()} id='minus-icon' color="primary" component="span">
//                 <img id='minus' alt="" src={minus} />
//             </IconButton>
//             <IconButton id='brush-icon' color="primary" component="span">
//                 <img id='brush' alt="" src={art} />
//             </IconButton>
//             <IconButton id='delete-icon' color="primary" aria-label="upload picture" component="span">
//                 <img id='delete' alt="" src={deleteicon} />
//             </IconButton>
//             <IconButton id='ruler-icon' color="primary" aria-label="upload picture" component="span">
//                 <img id='ruler' alt="" src={ruler} />
//             </IconButton>
//             <IconButton id='area-icon' color="primary" aria-label="upload picture" component="span">
//                 <img id='area' alt="" src={area} />
//             </IconButton>
//             <IconButton id='printer-icon' color="primary" aria-label="upload picture" component="span">
//                 <img id='printer' alt="" src={printer} />
//             </IconButton>
//         </div>
//     );
// }

// export default Toolbar;
