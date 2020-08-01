import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { Route } from "react-router-dom";
import CollectionsOverview from "../collections-overview/collections-overview.component";
import CollectionPage from "../../pages/collection/collection.component";
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route
      exact
      path={`${match.path}/:collectionId`}
      component={CollectionPage}
    />
  </div>
);

const mapStateToProp = createStructuredSelector({
  collections: selectCollection,
});

export default connect(mapStateToProp)(ShopPage);
