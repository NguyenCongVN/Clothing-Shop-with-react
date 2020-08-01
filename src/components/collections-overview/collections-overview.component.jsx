import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../preview-collection/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...OtherProps }) => (
      <CollectionPreview key={id} {...OtherProps} />
    ))}
  </div>
);

const mapStateToProp = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProp)(CollectionsOverview);
