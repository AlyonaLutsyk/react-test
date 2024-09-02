// import { useState, useEffect } from 'react';
import css from './App.module.css';
import LangSwitcher from './LangSwitcher';
import TextInput from './TextInput';
import { useState } from 'react';
import OrderForm from "./OrderForm";
// import UserForm from "./UserForm";
// import Toggler from './Toggler';
// import ClicksTracker from './ClicksTracker';


export default function App() {
  const [lang, setLang] = useState("en");
  const [text, setText] = useState("");

  const handleLangChange = (newLang) => {
    setLang(newLang)
  }

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const addNewOrder = (newOrder) => {
    console.log(newOrder);
  };

  // const addNewUser = (newUser) => {
  //   console.log(newUser);
  // };

  return (
    <div className={css.container}>
      <h1>Forms in React</h1>
      <OrderForm onOrder={addNewOrder} />
      <TextInput value={text} onUpdate={handleTextChange} />
      <LangSwitcher value={lang} onSelect={handleLangChange} />
      <p>Current lang: {lang}</p>
    </div>
  );
}



/* <UserForm onAdd={addNewUser} /> */
      /* <input type='text' value={text} onChange={handleTextChange} /> */
//   const [clicks, setClicks] = useState(0);
//   const [values, setValues] = useState({
//     a: 1,
//     b: 2,
//     c: 3,
//   });

//   const color = clicks % 5 === 0 ? "orangered" : "skyblue";

//   useEffect(() => {
//     document.body.style.backgroundColor = color;
//   }, [color]);


//   const updateValues = () => {
//     setValues({
//       ...values,
//       b: 5,
//     });
//   }

//   const updateClicks = () => {
//     setClicks(clicks + 1);
//   };

//   const resetClicks = () => {
//     setClicks(0)
//   };

//   return (
//     <div className='
//    {css.container}'>
//       <h1>State in React</h1>

//       <button onClick={updateValues}>Update values {values.a + values.b + values.c}</button>

//       <Toggler><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ut quis.</p></Toggler>
//       <Toggler><b>Some content</b></Toggler>
//       <Toggler><h2>OMAGAD</h2><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p></Toggler>
//       <hr />
//       <ClicksTracker value={clicks} onUpdate={updateClicks} />
//       <ClicksTracker value={clicks} onUpdate={updateClicks} />
//       <button onClick={resetClicks}>Reset clicks</button>
//       <hr />
//    </div>
//  )