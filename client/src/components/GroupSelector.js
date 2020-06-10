import React, { useState, useContext, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
// import { selectGroup, addGroup } from "../actions";
import { SelectedGroupContext } from "./SelectedGroupContext";
import CreateGroup from "./CreateGroup";
import { URL_ADD_GROUP } from "../config/urls";
import Modal from "react-modal";
Modal.setAppElement("#root");

export default function GroupSelector(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupNameInput, setGroupNameInput] = useState("");
  const [selectedGroupId, setSelectedGroupId] = useContext(
    SelectedGroupContext
  );

  useEffect(() => {
    if (!selectedGroupId && props.groups.length > 0) {
      setSelectedGroupId(props.groups[0]._id);
    }
  }, [selectedGroupId, props.groups]);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function onGroupNameInputChange(e) {
    if (e.target.value) {
      const text = e.target.value.trim();
      setGroupNameInput(text);
    }
  }

  function onAddNewGroup(e) {
    e.preventDefault();
    axios
      .post(URL_ADD_GROUP, {
        groupName: groupNameInput,
        timeCreated: new Date(),
      })
      .then((response) => {
        console.log(response);
        setSelectedGroupId(response.data._id);
        props.setCount((prevCount) => prevCount + 1);
      });

    closeModal();
    setGroupNameInput("");
    // this.setState({ isModalOpen: false, groupNameInput: "" });
  }

  function renderGroupList(groupList, currentGroupId) {
    return groupList.map((group) => {
      return (
        <li
          key={group._id}
          className={
            group._id === currentGroupId ? "group-selector_li--selected" : null
          }
          onClick={() => {
            setSelectedGroupId(group._id);
          }}
        >
          {group.groupName}
        </li>
      );
    });
  }

  return (
    <div className="group-selector">
      <h4>Group</h4>
      <ul>{renderGroupList(props.groups, selectedGroupId)}</ul>
      <CreateGroup onHandleClick={openModal} />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div>
          <header>
            <h3>Add Group</h3>
            <button onClick={closeModal}>x</button>
          </header>
          <form onSubmit={onAddNewGroup}>
            <label>Group Name: </label>
            <input onChange={onGroupNameInputChange} type="text"></input>
          </form>
          <footer>
            <button onClick={onAddNewGroup}>Add</button>
          </footer>
        </div>
      </Modal>
    </div>
  );
}

/*

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
    // const newGroupId = this.props.addGroup(this.state.groupNameInput).payload
    //   .groupId;

    // this.props.selectGroup(newGroupId);

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

export default GroupSelector;

*/
