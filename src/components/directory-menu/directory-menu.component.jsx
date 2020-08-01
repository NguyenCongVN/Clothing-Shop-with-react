import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory-menu.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

const Directory_Menu = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherProp }) => (
      <MenuItem
        key={id}
        title={otherProp.title}
        imageUrl={otherProp.imageUrl}
        size={otherProp.size}
        linkUrl={otherProp.linkUrl}
      />
    ))}
  </div>
);

const mapStateToProp = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProp)(Directory_Menu);
