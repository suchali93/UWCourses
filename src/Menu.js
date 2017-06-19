import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import Style from './Style';

export default class Menu extends Component {
    
    render() {
        return (
            <View style={Style.menuButton}>
                <Text style={Style.menuButtonText}>{this.props.value}</Text>
            </View>
        )
    }
}