import { FormikProvider } from 'formik';
import {h, render, Fragment} from 'preact';
import {useState, useEffect} from 'preact/hooks';
import { route } from 'preact-router';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';


const MyForm = (props) => {

    const initialValues = {
        firstname : '',
        lastname : ''
    }

    const validationSchema = Yup.object().shape({
        firstname : Yup.string().required('Firstname is required'),
        lastname : Yup.string().required('Lastname is required')
    });

    const mySubmit = (values) => {
        console.log(values);
    }

    return (
        <div style={{margin : '200px'}}>
            <h2>My Form</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={mySubmit}
                validationSchema={validationSchema}
                validateOnBlur={true}
                validateOnChange={false}
                validateOnMount={false}
            >  
            {props => (
                <Form style={{display : 'flex', flexDirection : 'column', gap : '50px'}}>

                    <div>
                        <Field type="text" name="firstname" placeholder="Firstname"/>
                        {props.errors.firstname ? (<div>{props.errors.firstname}</div>) : null}
                    </div>
                    
                    <div>
                        <Field type="text" name="lastname" placeholder="lastname"/>
                        {props.errors.lastname ? (<div>{props.errors.lastname}</div>) : null}
                    </div>    

                    <button type="submit">
                        Submit
                    </button>                
                
                </Form>
            )}
                
            </Formik>
        </div>
    )

}

export default MyForm;