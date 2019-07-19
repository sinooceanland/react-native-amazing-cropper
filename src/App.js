import React from 'react';
import PropTypes from 'prop-types';
import Cropper from './pages/Cropper.page';
import DefaultFooter from './components/Footer/DefaultFooter.component';
import DefaultEditor from './components/Editor/DefaultEditor.component';

const App = (props) => (
    <Cropper
        footerComponent={props.footerComponent}
        editorComponent={props.editorComponent}
        onStartCrop={props.onStartCrop}
        onDone={props.onDone}
        onCancel={props.onCancel}
        imageUri={props.imageUri}
        imageWidth={props.imageWidth}
        imageHeight={props.imageHeight}
        TOP_VALUE={props.TOP_VALUE}
        LEFT_VALUE={props.LEFT_VALUE}
        BOTTOM_VALUE={props.BOTTOM_VALUE}
        RIGHT_VALUE={props.RIGHT_VALUE}
        initialRotation={props.initialRotation}
        NOT_SELECTED_AREA_OPACITY={props.NOT_SELECTED_AREA_OPACITY}
        BORDER_WIDTH={props.BORDER_WIDTH}
        editorDeviation={props.editorDeviation}
    />
)


App.propTypes = {
    editorComponent:PropTypes.object,
    footerComponent: PropTypes.object,
    onStartCrop:PropTypes.func,
    onDone: PropTypes.func,
    onCancel: PropTypes.func,
    imageUri: PropTypes.string,
    imageWidth: PropTypes.number,
    imageHeight: PropTypes.number,
    TOP_VALUE: PropTypes.number,
    LEFT_VALUE: PropTypes.number,
    BOTTOM_VALUE: PropTypes.number,
    RIGHT_VALUE: PropTypes.number,
    initialRotation: PropTypes.number,
    NOT_SELECTED_AREA_OPACITY: PropTypes.number,
    BORDER_WIDTH: PropTypes.number,
    editorDeviation: PropTypes.number,
};

App.defaultProps = {
    footerComponent: (
        <DefaultFooter
            doneText='DONE'
            rotateText='ROTATE'
            cancelText='CANCEL'
        />
    ),
    editorComponent: (
        <DefaultEditor/>
    ),
    onStartCrop:()=>{

    },
    onDone: () => {
    },
    onCancel: () => {
    },
    imageUri: '',
    imageWidth: 1280,
    imageHeight: 747,
    TOP_VALUE: 0,
    LEFT_VALUE: 0,
    BOTTOM_VALUE: 0,
    RIGHT_VALUE: 0,
    initialRotation: 0,
    NOT_SELECTED_AREA_OPACITY: 0.5,
    BORDER_WIDTH: 10,
    editorDeviation:0,
};

export default App;
