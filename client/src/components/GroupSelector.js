import React from "react";
import { connect } from "react-redux";
import { selectGroup, addGroup } from "../actions";
import CreateGroup from "./CreateGroup";
import Modal from "react-modal";
Modal.setAppElement("#root");

class GroupSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false, groupNameInput: "" };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderGroupList = this.renderGroupList.bind(this);
    this.onGroupNameInputChange = this.onGroupNameInputChange.bind(this);
    this.onAddNewGroup = this.onAddNewGroup.bind(this);
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  renderGroupList(groupList, currentGroupId) {
    return groupList.map((group) => {
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

  onAddNewGroup() {
    const newGroupId = this.props.addGroup(this.state.groupNameInput).payload
      .groupId;

    this.props.selectGroup(newGroupId);

    this.setState({ isModalOpen: false, groupNameInput: "" });
  }

  onGroupNameInputChange(e) {
    if (e.target.value) {
      const text = e.target.value.trim();
      this.setState({ groupNameInput: text });
    }
  }

  render() {
    return (
      <div className="group-selector">
        <h4>Group</h4>
        <ul>
          {this.renderGroupList(this.props.groupList, this.props.groupSelected)}
        </ul>
        <CreateGroup onHandleClick={this.openModal} />
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <div>
            <header>
              <h3>Add Group</h3>
              <button onClick={() => this.setState({ isModalOpen: false })}>
                x
              </button>
            </header>
            <form onSubmit={this.onAddNewGroup}>
              <label>Group Name: </label>
              <input onChange={this.onGroupNameInputChange} type="text"></input>
            </form>
            <footer>
              <button onClick={this.onAddNewGroup}>Add</button>
            </footer>
          </div>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    groupSelected: state.groupSelected,
    groupList: state.groupList,
  };
}

export default connect(mapStateToProps, { selectGroup, addGroup })(
  GroupSelector
);
