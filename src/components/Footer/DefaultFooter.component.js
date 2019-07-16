import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './DefaultFooter.component.style';

const DefaultFooter = (props) => (
    <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={props.onCancel} style={[styles.touchable, props.cancelStyle]}>
            <Text style={[styles.text, props.cancelTextStyle]}>{props.cancelText}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onRotate} style={[styles.touchable, props.rotateStyle]}>
            <Text style={[styles.text, props.rotateTextStyle]}>{props.rotateText}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onDone} style={[styles.touchable, props.doneStyle]}>
            <Text style={[styles.text, props.doneTextStyle]}>{props.doneText}</Text>
        </TouchableOpacity>
    </View>
)

DefaultFooter.propTypes = {
    onDone: PropTypes.func,
    onRotate: PropTypes.func,
    onCancel: PropTypes.func,
    doneText: PropTypes.string,
    rotateText: PropTypes.string,
    cancelText: PropTypes.string,
    doneStyle: PropTypes.object,
    rotateStyle: PropTypes.object,
    cancelStyle: PropTypes.object,
    doneTextStyle: PropTypes.object,
    rotateTextStyle: PropTypes.object,
    cancelTextStyle: PropTypes.object
}

export default DefaultFooter;
