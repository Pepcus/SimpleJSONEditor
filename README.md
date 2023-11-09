### Getting started

`npm add https://github.com/pepcus-Aish/SimpleJSONEditor.git`

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
        {"name":"Bob", "email":"bob32@gmail.com", "age":41}   
    ]  
  }}
/>;
```

![image](https://github.com/pepcus-Aish/SimpleJSONEditor/assets/141809285/cca372bc-7845-40f8-9c58-0a10a32bd663)


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
        {"name":"Bob", "email":"bob32@gmail.com", "age":41}   
    ] 
  }
}
  collapsible
/>;
```
![image](https://github.com/pepcus-Aish/SimpleJSONEditor/assets/141809285/d626513f-dc7b-4aa7-8d93-3b3e8ec18f5a)


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
        {"name":"Bob", "email":"bob32@gmail.com", "age":41}   
    ] 
  }}
  collapsible
  onChange={this.onJsonChange}
/>
```

![image](https://github.com/pepcus-Aish/SimpleJSONEditor/assets/141809285/dcf5212b-8296-4904-9d2b-0602a188e182)


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
        {"name":"Bob", "email":"bob32@gmail.com", "age":41}   
    ] 
  }}
  collapsible
  onChange={this.onJsonChange}
  view="dual"
/>
```

![image](https://github.com/pepcus-Aish/SimpleJSONEditor/assets/141809285/35469220-f6f6-45ec-9edf-76508252212a)


### Configure your optional custom styles

See the source for the [Demo App](src/demo/App.js)

default

![Alt text](images/jsoneditor_unstyled.png?raw=true "Unstyled JSON Editor")

override custom styles

![Alt text](images/jsoneditor_styled.png?raw=true "Styled JSON Editor")

### License: MIT
