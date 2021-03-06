import React from "react";
import { useHistory } from "react-router";
import "./App.css";

export default function Form(props) {
    const { values, submit, change, disabled, errors } = props;
    const history = useHistory();
    const successRoute = () => {
        history.push("/pizza/success");// VERIFY THIS ROUTE
    }

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }
    const onSubmit = (evt) => {
        history.push('/pizza/success');
        evt.preventDefault();
        submit();
    }

    return (
        <form className="form container" id="pizza-form" onChange={onChange} onSubmit={onSubmit}>
            <div className="form-group submit">
                <div>
                    <h2>Add a User and Pizza </h2>
                </div>
                <div>
                    <label>username
                        <input
                            name='username'
                            type='text'
                            value={values.name}
                            onChange={onChange}
                            placeholder='type your unsername'
                            maxLength='30'
                            id='name-input'
                        />
                    </label>
                </div>

                <div>
                    <label> Size:
                        <select
                            id='size-dropdown'
                            onChange={onChange}
                            name='size'
                            value={values.size}
                        >
                            <option>
                                --Select Size--
                            </option>
                            <option>
                                Small
                            </option>
                            <option>
                                Medium
                            </option>
                            <option>
                                Large
                            </option>
                            <option>
                                X-Large
                            </option>
                        </select>
                    </label>
                </div>

                <div>
                    {/* <h2>Add Your Toppings</h2> */}
                    Add Your Toppings
                    <label>
                        <input
                            type='checkbox'
                            name='ham'
                            onChange={onChange}
                            checked={values.ham}
                        /> Ham
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='olives'
                            onChange={onChange}
                            checked={values.olives}
                        /> Olives
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='onions'
                            onChange={onChange}
                            checked={values.onions}
                        /> Onions
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='cheese'
                            onChange={onChange}
                            checked={values.cheese}
                        /> Cheese
                    </label>
                </div>

                <label>Special Instructions
                    <input
                        type='textarea'
                        name='special'
                        id='special-text'
                        onChange={onChange}
                        value={values.special}
                    />
                </label>



                <div className="errors">
                    <div>{errors.username}</div>

                    {/* <div>{errors.size}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>  */}
                </div>
                <button id="order-button" onClick={successRoute} disabled={disabled}>Place Order</button>
            </div>
        </form>
    );
}
