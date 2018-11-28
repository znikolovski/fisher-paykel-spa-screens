/*
    Text.js

    Maps to spa-screens/components/content/text
*/

import React, {Component} from 'react';
import {MapTo} from '@adobe/cq-react-editable-components';
require('./Product.scss');
/**
 * Default Edit configuration for the Product component
 *
 * @type EditConfig
 */
const ProductEditConfig = {

    emptyLabel: 'Product',

    isEmpty: function(props) {
        return !props || !props.productPath;
    }
};

/**
 * Product React component
 */
export default class Product extends Component {

    get productPath() {
        return <div>{this.props.productPath}</div>;
    }

    render() {
        return (<div className="Product">
                {this.productPath}
            </div>);
    }
}

MapTo('spa-screens/components/content/product')(Product, ProductEditConfig);