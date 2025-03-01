import css from "./OrderForm.module.css";
import { FaTshirt } from "react-icons/fa";
import { useId, useState } from "react";

const initialValues = {
    size: "md",
    color: "blue",
};


export default function OrderForm({ onOrder }) {

    const id = useId();
    const [values, setValues] = useState(initialValues);



    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = (event) => { 
        event.preventDefault();
        onOrder(values);
        setValues(initialValues);
    };

    return (
        <form autoComplete="off" noValidate className={css.form} onSubmit={handleSubmit}>
            <FaTshirt size="160" color={values.color} />

            

            <div className={css.group}>
                <label htmlFor={`${id}-size`}>Size</label>
                <select name="size" value={values.size} onChange={handleChange} id={`${id}-size`}>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>

            <div className={css.group}>
                <label htmlFor={`${id}-color`}>Color</label>
                <select name="color" value={values.color} onChange={handleChange} id={`${id}-color`}>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}




// const handleChangeSize = (event) => {
    //     setValues({
    //         ...values,
    //         size: event.target.value,
    //     });
    // }

    // const handleChangeColor = (event) => {
    //     setValues({
    //         ...values,
    //         color: event.target.value,
    //     });
    // }