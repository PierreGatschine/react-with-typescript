import List  from './components/List';
import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string
    age: number
    img: string
    note?: string
  }[]
}


function App() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      img: "https://ourtimepress.com/wp-content/uploads/2017/09/Pg4_LeBronJames.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "https://d16yj43vx3i1f6.cloudfront.net/uploads/2015/11/NBA--630x420.jpg",
      
    }
  ])

  

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;
