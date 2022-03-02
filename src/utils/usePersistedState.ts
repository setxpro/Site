import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
];

//Gravar no localStorage
function usePersistedState<T>(key: string, initialState: T): Response<T> {
    const [state, setState] = useState(()=> {
        const storageValue = localStorage.getItem(key);

        if (storageValue) {
            return JSON.parse(storageValue);
        }
        else {
            return initialState;
        }
    });
    useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(state));
    },[key ,state])
    // useEffect -- toda vez que o [state] sofrer uma altração
    // vou no localStorage, pego a key e converto esse valor que vier em JSON
    //Retorno o state e a função setState
    return [state, setState];
}

export default usePersistedState;