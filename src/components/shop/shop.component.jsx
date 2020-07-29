import React from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../preview-collection/collection-preview.component'
class ShopPage extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            collections : SHOP_DATA
        }
    }

    render()
    {
        const collections = this.state.collections;
        return (<div className='shop-page'>
            {collections.map( ({id , ...OtherProps}) => (
                <CollectionPreview key={id} {...OtherProps} />
            ))}
        </div>)
    }
}

export default ShopPage;