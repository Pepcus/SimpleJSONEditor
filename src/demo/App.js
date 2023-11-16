import React from "react";
import { JSONEditor ,JSONViewer} from "../lib";
// npm run build
// to compile a production version
//npm publish to publish

const App = () => (
  <div>
    <h3>Simple JSON Editor</h3>
    <JSONEditor
      data={data}
      collapsible
      onChange={this.onJsonChange}
        styles={styles}
    />
  </div>
);

const styles = {
   dualView: {
    display: "flex",
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
    justifyContent:'center',
    borderRadius:4,
    color: "red",
    marginLeft: 10,
    height: 25,
    alignItems: 'center',
    width:150,
    alignItems:'center',
    textTransfrom:'uppercase'
    
    
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
    marginLeft: 50,
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

const data =
 
  {
    name: 'pepcus',
    age: null,
    match :true,
    address: [
      'Panyu Shiqiao on Canton',
      'Tianhe',
      {
        city: 'Indore',
      },
    ],
    others: {
      id: 1246,
      joinTime: '2017-08-20. 10:20',
      description: 'another',
    },
    "employees":[    
        {"name":"Ram", "email":"ram@gmail.com", "age":23},        
        {"name":"Bob", "email":"bob32@gmail.com", "age":41}   
    ]    
  }

export default App;
