import {useCounter} from '../hooks/useCounter'
export const DrawComponent = () => {
   const [counter, incrementCounter, decrementCounter] = useCounter(6, {max:6, min:0})
    return (
        <div>
            <img src={`/assets/${counter}.png`} alt="test" />
        <h4>{counter}</h4>
            <button onClick={()=>incrementCounter()} >incrementar</button>
            <button onClick={()=>decrementCounter()} >decrementar</button>

        </div>
    );
};
