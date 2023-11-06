import React from "react";
import { JSONEditor } from "../lib";
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
    color: "DeepPink",
    marginTop: 3,
  },
  value: {
    marginLeft: 10,
  },
  row: {
    display: "flex",
  },
  withChildrenLabel: {
    color: "DeepPink",
  },
  select: {
    borderRadius: 3,
    borderColor: "grey",
    backgroundColor: "DimGray",
    color: "khaki",
  },
  input: {
    borderRadius: 3,
    border: "1px solid #272822",
    padding: 2,
    fontFamily: "Lucida Console, monospace",
    fontSize: 12,
    backgroundColor: "gray",
    color: "khaki",
    width: "200%",
  },
  addButton: {
    cursor: "pointer",
    color: "LightGreen",
    marginLeft: 15,
    fontSize: 12,
  },
  removeButton: {
    cursor: "pointer",
    color: "magenta",
    marginLeft: 15,
    fontSize: 12,
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
    color: "DeepPink",
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
        {"name":"Shyam", "email":"shyam23@gmail.com", "age":28},  
        {"name":"John", "email":"john@gmail.com", "age":33},    
        {"name":"Bob", "email":"bob32@gmail.com", "age":41}   
    ]  ,
    "member":[    
        {"name":"Ram", "email":"ram@gmail.com", "age":23},    
        {"name":"Shyam", "email":"shyam23@gmail.com", "age":28},  
        {"name":"John", "email":"john@gmail.com", "age":33},    
        {"name":"Bob", "email":"bob32@gmail.com", "age":41}   
    ]  ,
    "players":[    
        {"name":"Ram", "email":"ram@gmail.com", "age":23},    
        {"name":"Shyam", "email":"shyam23@gmail.com", "age":28},  
        {"name":"John", "email":"john@gmail.com", "age":33},    
        {"name":"Bob", "email":"bob32@gmail.com", "age":41}   
    ]  
  }

export default App;
