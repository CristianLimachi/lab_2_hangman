import React from 'react';
import './styles.css'
import { KeyBoardComponents } from './components/KeyBoardComponent'
import { DrawComponent } from './components/DrawComponent'

export const HangManComponent = () => {

    return (
    <div>
      <h1>HangMan</h1>
      <hr />
      <DrawComponent/>
      <KeyBoardComponents/>
    </div>
  );
}

