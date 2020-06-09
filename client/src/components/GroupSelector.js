import React, { useContext } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { selectGroup, addGroup } from "../actions";
import { SelectedGroupContext } from "./SelectedGroupContext";
import CreateGroup from "./CreateGroup";
import { URL_ADD_GROUP } from "../config/urls";
import Modal from "react-modal";
Modal.setAppElement("#root");

class GroupSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      groupNameInput: "",
      selectedGroupId: null,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderGroupList = this.renderGroupList.bind(this);
    this.onGroupNameInputChange = this.onGroupNameInputChange.bind(this);
    this.onAddNewGroup = this.onAddNewGroup.bind(this);
  }

  componentDidMount() {
    if (!this.state.selectedGroupId && this.props.groups.length > 0) {
      console.log("componentdidmount");
      this.setState({
        selectedGroupId: this.props.groups[0]._id,
      });
    }
  }
  componentDidUpdate() {
    if (!this.state.selectedGroupId && this.props.groups.length > 0) {
      console.log("componentdidupdate");
      this.setState({
        selectedGroupId: this.props.groups[0]._id,
      });
    }
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  renderGroupList(groupList, currentGroupId) {
    return groupList.map((group) => {
      console.log(`selected group id: ${currentGroupId}`);
      return (
        <li
          key={group._id}
          className={
            group._id === currentGroupId ? "group-selector_li--selected" : null
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
    //redux
    const newGroupId = this.props.addGroup(this.state.groupNameInput).payload
      .groupId;

    this.props.selectGroup(newGroupId);

    // api
    axios
      .post(URL_ADD_GROUP, {
        groupName: this.state.groupNameInput,
        timeCreated: new Date(),
      })
      .then((response) => {
        console.log(response);
        this.setState({ selectedGroupId: response.data._id });
        this.props.setCount((prevCount) => prevCount + 1);
      });

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
          {this.renderGroupList(this.props.groups, this.state.selectedGroupId)}
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

// function mapStateToProps(state) {
//   return {
//     groupSelected: state.groupSelected,
//     groupList: state.groupList,
//   };
// }

// export default connect(mapStateToProps)(
//   GroupSelector
// );

export default GroupSelector;
