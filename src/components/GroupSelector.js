import React from "react";
import { connect } from "react-redux";
import { selectGroup } from "../actions";
import CreateGroup from "./CreateGroup";
import Modal from "react-modal";
Modal.setAppElement("#root");

class GroupSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: true };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderGroupList = this.renderGroupList.bind(this);
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
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
                X
              </button>
            </header>
            <form>
              <label>Group Name: </label>
              <input type="text"></input>
            </form>
            <footer>
              <button>Add</button>
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
    groupList: state.groupList
  };
}

export default connect(mapStateToProps, { selectGroup })(GroupSelector);
