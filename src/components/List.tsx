import React from 'react';
import { IState as Props } from "../App";

interface IProps {
    people: Props["people"]
}

/* interface IProps {
  people: {
    name: string
    age: number
    img: string
    note?: string
  }[]
} */

const List: React.FC<IProps> = ( { people }) => {

  const renderList = (): JSX.Element[] => {
    // eslint-disable-next-line array-callback-return
    return people.map((person) => {
      return (
        <li className='list'>
        <div className='List__header'>
          <img src={person.img} alt="" className="list__img" />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className="list__note">{person.note}</p>
      </li>
      )
      
    })
  }
    return (
        <ul>
            {renderList()}
        </ul>
    );
};

export default List;