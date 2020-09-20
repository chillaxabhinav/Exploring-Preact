import {h, Fragment, render} from 'preact';
import {useEffect, useState} from 'preact/hooks';

const ProfileMain = (props) => {

    const [myCounter, setCounter] = useState(0);

    useEffect(() => {
        console.log("props ", props);
    },[]);

    const increaseHandler = () => {
        setCounter(prev => prev + 1);
    }

    const decreaseHandler = () => {
        setCounter(prev => prev - 1);
    }


    return (
        <div style={{margin : '50px'}}>
            <h2>My Counter - {myCounter}</h2>
            <button onClick={() => increaseHandler()}>Increase</button>
            <button onClick={() => decreaseHandler()}>Decrease</button>
        </div>
    )
}


export default ProfileMain;