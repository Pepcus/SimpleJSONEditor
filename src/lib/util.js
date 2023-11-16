export const EDIT_KEY = "__editable_json_editor__";

export const getKey = (prefix, currentKey, parentKeyPath, marginLeft) => {
  return `${prefix}_${parentKeyPath}_${currentKey}_${marginLeft}`;
};

export const jsonEditorDefaultStyles = {
  dualView: {
    display: "flex",
  },
  jsonViewer: {
    borderLeft: "1px solid lightgrey",
    width: "50%",
    margin: 10,
  },
  jsonEditor: {
    width: "50%",
    fontSize: 12,
    fontFamily: "Lucida Console, monospace",
    lineHeight: 1.25,
  },
  root: {
    fontSize: 12,
    fontFamily: "Lucida Console, monospace",
    lineHeight: 1.25,
    /*color: "#3E3D32"*/
  },
  label: {
    display:"flex",
    borderRadius:4,
    color: "red",
    marginLeft: 10,
    height: 30,
    alignItems: 'center',
    
  },
  value: {
    marginLeft: 10,
  },
  row: {
    display: "flex",
  },
  withChildrenLabel: {
    color: "Red",
  },
  select: {
    backgroundColor: '#e1d9d9',
    paddingRight: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 25,
    height:25,
    borderRadius: 3,
    borderColor: "grey",
    color: "Black",
  },
  input: {
    height:25,
    borderRadius: 3,
    border: "1px solid #272822",
    fontFamily: "Lucida Console, monospace",
    fontSize: 12,
    backgroundColor: '#e1d9d9',
    paddingRight: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 25,
    color: "Black",
    width: "200%",
  },
  addButton: {
    cursor: "pointer",
    color: "Green",
    marginLeft: 15,
    fontSize: 18,
  },
  removeButton: {
    cursor: "pointer",
    color: "Red",
    marginLeft: 180,
    fontSize: 18,
  },
  saveButton: {
    cursor: "pointer",
    color: "green",
    marginLeft: 15,
    fontSize: 12,
  },
  builtin: {
    color: "green",
    fontSize: 12,
  },
  text: {
    color: "black",
    fontSize: 12,
  },
  number: {
    color: "purple",
    fontSize: 12,
  },
  property: {
    color: "red",
    fontSize: 12,
  },
  collapseIcon: {
    cursor: "pointer",
    fontSize: 10,
    color: "teal",
  },
};

export const jsonViewerDefaultStyles = {
  root: {
    margin: 5,
    fontSize: 14,
    fontFamily: "monospace",
  },
  builtin: {
    color: "#00f",
  },
  text: {
    color: "#077",
  },
  number: {
    color: "#a0a",
  },
  property: {
    color: "#c00",
  },
  collapseIcon: {
    cursor: "pointer",
  },
};
