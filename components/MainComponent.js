import React, { Component } from 'react';

import Dishdetail from './DishdetailComponents';
import { View } from 'react-native';
import Menu from './MenuComponent'
import { DISHES } from '../shared/dishes'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
        console.debug('test')
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId })
    }

    render() {
        return (
            <View>
                <Menu dishes={this.state.dishes} onPress={(dishId) => this.onDishSelect(dishId)} />
                <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </View>
        )
    }
}

module.exports = Main