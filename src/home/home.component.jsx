import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ChildHome from './components/child-home.component';
import Button from 'src/shared-components/button/primary-button';
import { increaseCount } from './home.actions';

const Home = () => {
    const dispatch = useDispatch();
    let { count } = useSelector((state) => { return state.home });


    const increase = () => {
        dispatch(increaseCount(count))
    }
    return (
        <div className="container-fluid mt-90">
            <div className="container-fluid" style={{ paddingBottom: 20 }}>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                Nielsen react-redux boiler plate
        </p>
                <h1>{count}</h1>
                <Button onClick={increase} label={'increase'} />
                <ChildHome />
            </div>
        </div>
    )
}

export default Home;