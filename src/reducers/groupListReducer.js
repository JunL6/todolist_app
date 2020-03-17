export default function(
  groupList = [
    { groupName: "Default Group", groupId: -1 },
    {
      groupName: "Group 2",
      groupId: -2
    }
  ],
  action
) {
  switch (action.type) {
    default:
      return groupList;
  }
}
