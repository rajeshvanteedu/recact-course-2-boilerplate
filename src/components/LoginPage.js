import React from 'react';
import { connect } from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = (props) => (
    <div className="box-layout">
       <div className="box-layout__box">
           <h1 className="box-layout__title">Boilerplate</h1>
           <p1>Tag line for app.</p1>
           <div>
                <button className="button" onClick = {() =>{
                    props.dispatch(startLogin());
                }}>Login with Google</button>
            </div>
        </div>
    </div>    
);


    // const mapDispatchToProps = (dispatch) => ({
    //    startLogin: () => dispatch(startLogin())
    // });

//    const mapDispatchToProps = (dispatch) => {
//     return { dispatch, startLogin: () => dispatch(startLogin()) };
//  };

 // export default connect(undefined, mapDispatchToProps )(LoginPage);

export default connect()(LoginPage);