import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from './components/Search';
import Translate from './components/Translate';
import { useState } from 'react';


import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: "What is React?",
    content: "React is afront end javascript framework"
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers"
  },
  {
    title: "How do you use React",
    content: "You uese React by creating components"
  }
]

const label = "Choose Color";
const options = [
  {
    label: "The color red",
    value: "red"
  },
  {
    label: "The color green",
    value: "green"
  },
  {
    label: "The color blue",
    value: "blue"
  }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          label={label}
          options={options} 
          selected={selected}
          onSelectedChange={setSelected} 
        />
      </Route>
    </div>
  );
}
