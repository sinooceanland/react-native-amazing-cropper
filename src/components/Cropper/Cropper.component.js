import React, {Component} from 'react';
import {View, Animated, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Q, SCREEN_HEIGHT, SCREEN_WIDTH, W} from "react-native-amazing-cropper/src/components/Cropper/Cropper.constants";

export default class Cropper extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        imageUri: PropTypes.string,
        footerComponent: PropTypes.object,
        editorComponent: PropTypes.object,
        getTopOuterStyle: PropTypes.func,
        getLeftOuterStyle: PropTypes.func,
        getBottomOuterStyle: PropTypes.func,
        getRightOuterStyle: PropTypes.func,
        getTopLeftStyle: PropTypes.func,
        getBottomLeftStyle: PropTypes.func,
        getBottomRightStyle: PropTypes.func,
        getTopRightStyle: PropTypes.func,
        getTopSideStyle: PropTypes.func,
        getLeftSideStyle: PropTypes.func,
        getBottomSideStyle: PropTypes.func,
        getRightSideStyle: PropTypes.func,
        getRectangleStyle: PropTypes.func,
        getImageStyle: PropTypes.func,
        onDone: PropTypes.func,
        onRotate: PropTypes.func,
        onCancel: PropTypes.func,
        topOuterPanResponder: PropTypes.object,
        leftOuterPanResponder: PropTypes.object,
        bottomOuterPanResponder: PropTypes.object,
        rightOuterPanResponder: PropTypes.object,
        topPanResponder: PropTypes.object,
        leftPanResponder: PropTypes.object,
        bottomPanResponder: PropTypes.object,
        rightPanResponder: PropTypes.object,
        topLeftPanResponder: PropTypes.object,
        bottomLeftPanResponder: PropTypes.object,
        bottomRightPanResponder: PropTypes.object,
        topRightPanResponder: PropTypes.object,
        rectanglePanResponder: PropTypes.object,
        topOuterRef: PropTypes.func,
        leftOuterRef: PropTypes.func,
        bottomOuterRef: PropTypes.func,
        rightOuterRef: PropTypes.func,
    }

    render(): React.ReactNode {

        return (
            <View style={styles.container}>
                <View style={styles.secondContainer}>
                    <Image
                        style={this.props.getImageStyle()}
                        source={{uri: this.props.imageUri}}
                    />
                </View>

                <View style={styles.footerContainer}>
                    {
                        React.cloneElement(
                            this.props.footerComponent,
                            {
                                onDone: this.props.onDone,
                                onRotate: this.props.onRotate,
                                onCancel: this.props.onCancel
                            }
                        )
                    }
                </View>


                <Animated.View
                    ref={this.props.topOuterRef}
                    style={[styles.animation, this.props.getTopOuterStyle()]}
                    {...this.props.topOuterPanResponder.panHandlers}
                />

                <Animated.View
                    ref={this.props.leftOuterRef}
                    style={[styles.animation, this.props.getLeftOuterStyle()]}
                    {...this.props.leftOuterPanResponder.panHandlers}
                />

                <Animated.View
                    ref={this.props.bottomOuterRef}
                    style={[styles.animation, this.props.getBottomOuterStyle()]}
                    {...this.props.bottomOuterPanResponder.panHandlers}
                />

                <Animated.View
                    ref={this.props.rightOuterRef}
                    style={[styles.animation, this.props.getRightOuterStyle()]}
                    {...this.props.rightOuterPanResponder.panHandlers}
                />

                <Animated.View
                    style={[styles.animation, styles.topSideAnimation, this.props.getTopSideStyle()]}
                    {...this.props.topPanResponder.panHandlers}
                />
                <Animated.View
                    style={[styles.animation, styles.leftSideAnimation, this.props.getLeftSideStyle()]}
                    {...this.props.leftPanResponder.panHandlers}
                />
                <Animated.View
                    style={[styles.animation, styles.bottomSideAnimation, this.props.getBottomSideStyle()]}
                    {...this.props.bottomPanResponder.panHandlers}
                />
                <Animated.View
                    style={[styles.animation, styles.rightSideAnimation, this.props.getRightSideStyle()]}
                    {...this.props.rightPanResponder.panHandlers}
                />

                <Animated.View
                    style={[styles.animation, styles.topLeftAnimation, this.props.getTopLeftStyle()]}
                    {...this.props.topLeftPanResponder.panHandlers}
                />
                <Animated.View
                    style={[styles.animation, styles.bottomLeftAnimation, this.props.getBottomLeftStyle()]}
                    {...this.props.bottomLeftPanResponder.panHandlers}
                />
                <Animated.View
                    style={[styles.animation, styles.bottomRightAnimation, this.props.getBottomRightStyle()]}
                    {...this.props.bottomRightPanResponder.panHandlers}
                />
                <Animated.View
                    style={[styles.animation, styles.topRightAnimation, this.props.getTopRightStyle()]}
                    {...this.props.topRightPanResponder.panHandlers}
                />

                <Animated.View
                    style={[styles.animation, this.props.getRectangleStyle()]}
                    {...this.props.rectanglePanResponder.panHandlers}
                >
                    {
                        React.cloneElement(
                            this.props.editorComponent
                        )
                    }
                </Animated.View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    secondContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
    footerContainer: {
        position: 'absolute',
        top: SCREEN_HEIGHT - Q,
        bottom: 0,
        width: W
    },
    gridRow: {
        flex: 1,
        flexDirection: 'row'
    },
    animation: {
        position: 'absolute',
        backgroundColor: 'transparent',
    },
    topSideAnimation: {
        borderBottomWidth: 20,
        borderColor: 'transparent',
        zIndex: 4
    },
    leftSideAnimation: {
        borderRightWidth: 20,
        borderColor: 'transparent',
        zIndex: 4
    },
    bottomSideAnimation: {
        borderTopWidth: 20,
        borderColor: 'transparent',
        zIndex: 4,
        transform: [{translateY: -20}],
    },
    rightSideAnimation: {
        borderLeftWidth: 20,
        borderColor: 'transparent',
        zIndex: 4,
        transform: [{translateX: -20}]
    },
    topLeftAnimation: {
        borderLeftWidth: 56,
        borderRightWidth: 25,
        borderTopWidth: 31,
        borderColor: 'transparent',
        zIndex: 5,
    },
    bottomLeftAnimation: {
        borderLeftWidth: 56,
        borderRightWidth: 25,
        borderBottomWidth: 31,
        borderColor: 'transparent',
        zIndex: 5,
        transform: [{translateY: -31}]
    },
    bottomRightAnimation: {
        borderTopWidth: 25,
        borderRightWidth: 31,
        borderBottomWidth: 56,
        borderColor: 'transparent',
        zIndex: 5,
        transform: [{translateX: -31}, {translateY: -31}]
    },
    topRightAnimation: {
        borderColor: 'transparent',
        borderTopWidth: 56,
        borderRightWidth: 31,
        borderBottomWidth: 25,
        zIndex: 5,
        transform: [{translateX: -31}]
    },
    borderDesign: {
        width: 30,
        height: 30,
        borderColor: 'white'
    },


    icon: {
        paddingRight: 10,
        flexDirection: 'row',
    },
    zoomNavBar: {
        width: '100%',
        height: 50,
        backgroundColor: '#5a2480',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20
    },
    rightNav: {
        flexDirection: 'row',
    },
});
