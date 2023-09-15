import { useState } from 'react';

const useKeyBoard = () => {
    const generateKeyBoard = () =>{
        let keys = [];
        for(let i = 0; i<26; i++){
            let key = String.fromCharCode(i + 65);
            keys = [...keys, { key, state:false }];
        }
        return keys;
    };
    const [keyState, setKeyState]= useState(generateKeyBoard())
  return [keyState, setKeyState]
}
export default useKeyBoard
