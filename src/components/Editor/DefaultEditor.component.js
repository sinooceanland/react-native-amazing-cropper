import React from 'react'
import {View} from 'react-native';
import styles from './DefaultEditor.component.style';

const DefaultEditor = (props) => (
    <View style={{flex: 1}}>
        <View style={styles.gridRow}>
            <View style={styles.gridColumn}>
                {/*左上*/}
                <View style={[styles.borderDesign, {borderLeftWidth: 3, borderTopWidth: 3}]}/>
            </View>
            <View style={styles.gridColumn}>
                {/*上中*/}
                <View style={[styles.borderDesign, {borderTopWidth: 3, alignSelf: 'center'}]}/>
            </View>
            <View style={styles.gridColumn}>
                {/*右上*/}
                <View style={[styles.borderDesign, {
                    borderTopWidth: 3,
                    borderRightWidth: 3,
                    alignSelf: 'flex-end'
                }]}/>
            </View>
        </View>

        <View style={styles.gridRow}>
            <View style={[styles.gridColumn, {flexDirection: 'row'}]}>
                {/*左中*/}
                <View style={[styles.borderDesign, {borderLeftWidth: 3, alignSelf: 'center'}]}/>
            </View>
            <View style={styles.gridColumn}/>
            <View style={[styles.gridColumn, {justifyContent: 'center'}]}>
                {/*右中*/}
                <View style={[styles.borderDesign, {borderRightWidth: 3, alignSelf: 'flex-end'}]}/>
            </View>
        </View>

        <View style={styles.gridRow}>
            <View style={[styles.gridColumn, {justifyContent: 'flex-end'}]}>
                {/*左下*/}
                <View style={[styles.borderDesign, {borderLeftWidth: 3, borderBottomWidth: 3}]}/>
            </View>
            <View style={[styles.gridColumn, {justifyContent: 'flex-end'}]}>
                {/*下中*/}
                <View style={[styles.borderDesign, {borderBottomWidth: 3, alignSelf: 'center'}]}/>
            </View>
            <View style={[styles.gridColumn, {justifyContent: 'flex-end'}]}>
                {/*右下*/}
                <View style={[styles.borderDesign, {
                    borderRightWidth: 3,
                    borderBottomWidth: 3,
                    alignSelf: 'flex-end'
                }]}/>
            </View>
        </View>
    </View>
)

export default DefaultEditor;
