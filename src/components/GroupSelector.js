import React from "react";
import { connect } from "react-redux";
import { selectGroup } from "../actions";

class GroupSelector extends React.Component {
  constructor(props) {
    super(props);
    this.renderGroupList = this.renderGroupList.bind(this);
  }

  renderGroupList(groupList, currentGroupId) {
    return groupList.map(group => {
      console.log(currentGroupId);
      return (
        <li
          key={group.groupId}
          className={
            group.groupId === currentGroupId
              ? "group-selector_li--selected"
              : null
          }
          onClick={() => {
            this.props.selectGroup(group.groupId);
          }}
        >
          {group.groupName}
        </li>
      );
    });
  }

  render() {
    console.log("group: " + this.props.groupSelected);
    return (
      <div className="group-selector">
        <h4>Group</h4>
        <ul>
          {this.renderGroupList(this.props.groupList, this.props.groupSelected)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    groupSelected: state.groupSelected,
    groupList: state.groupList
  };
}

export default connect(mapStateToProps, { selectGroup })(GroupSelector);
