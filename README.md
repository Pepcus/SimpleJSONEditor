### Getting started

`npm i react-json-editor-viewer`

### Easily view json in react

```javascript
import { JSONViewer } from "react-json-editor-viewer";

<JSONViewer
  data={{
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
  }}
/>;
```

![Alt text](images/jsonviewer.png?raw=true "JSON Viewer")

### Make your json viewer collapsible

```javascript
import { JSONViewer } from "react-json-editor-viewer";

<JSONViewer
  data={
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
}
  collapsible
/>;
```

![Alt text](images/jsonviewer_collapse.png?raw=true "JSON Viewer")

### Edit json easily and listen to changes in the data, hover on elements to add/remove keys

```javascript
import {JSONEditor} from 'react-json-editor-viewer';

constructor(){
  this.onJsonChange = this.onJsonChange.bind(this);
}

onJsonChange(key, value, parent, data){
  console.log(key, value, parent, data);
}

<JSONEditor
  data={{
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
  }}
  collapsible
  onChange={this.onJsonChange}
/>
```

![Alt text](images/jsoneditor.png?raw=true "JSON Viewer")

### View both the json editor and viewer side by side

```javascript
import {JSONEditor} from 'react-json-editor-viewer';

constructor(){
  this.onJsonChange = this.onJsonChange.bind(this);
}

onJsonChange(key, value, parent, data){
  console.log(key, value, parent, data);
}

<JSONEditor
  data={{
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
  }}
  collapsible
  onChange={this.onJsonChange}
  view="dual"
/>
```

![Alt text](images/jsoneditor_dual.png?raw=true "JSON Viewer")

### Configure your optional custom styles

See the source for the [Demo App](src/demo/App.js)

default

![Alt text](images/jsoneditor_unstyled.png?raw=true "Unstyled JSON Editor")

override custom styles

![Alt text](images/jsoneditor_styled.png?raw=true "Styled JSON Editor")

### License: MIT
