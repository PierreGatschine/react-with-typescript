import React, { useState } from 'react';
import { IState as Props } from "../App";

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
    people: Props["people"]
}

const AddToList: React.FC<IProps> = ({setPeople, people}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        img: "",
        note: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if (!input.name || !input.age ) return
        

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                img: input.img,
                note: input.note
            }
        ])
        setInput({
            name: "",
            age: "",
            img: "",
            note: ""
        })

    }

    return (
        <div className='addToList'>
            <input 
                type='text'
                placeholder='Name'
                className='addToList__input'
                value={input.name}
                onChange={handleChange}
                name='name'
            />
            <input 
                type='text'
                placeholder='Age'
                className='addToList__input'
                value={input.age}
                onChange={handleChange}
                name='age'
            />
            <input 
                type='text'
                placeholder='Image URL'
                className='addToList__input'
                value={input.img}
                onChange={handleChange}
                name='image'
            />
            <textarea 
                placeholder='Notes'
                className='addToList__input'
                value={input.note}
                onChange={handleChange}
                name='note'
            />
            <button 
                className="addToList--btn"
                onClick={handleClick}
            >
                Add to List
            </button>
        </div>
    );
};

export default AddToList;