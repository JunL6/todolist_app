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

  /* I am not sure if I should move this useEffect logic to Main.js */
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
