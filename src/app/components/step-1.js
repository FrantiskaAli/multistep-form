'use client'
import { useFormik } from "formik";
import React from "react";


export default function StepOne({ next, originalValues }) {
    //using the npm package called formik
    const formik = useFormik({
        initialValues: { //initial values set based on the parent state
            fullName: originalValues?.fullName,
            email: originalValues?.email,
            tel: originalValues?.tel,
        },
        validate: (values) => { //conditions to validate inputs, regular expressions found on stack overflow(both tel and email)
            const errors = {};
            if (!values.fullName) {
                errors.fullName = 'This field is required';
            }
            if (!values.email) {
                errors.email = 'This field is required';
            } else {
                const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                if (!re.test(values.email)) {
                    errors.email = 'Invalid email format';
                }
            }
            if (!values.tel) {
                errors.tel = 'This field is required';
            } else {
                const reg = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
                if (!reg.test(values.tel)) {
                    errors.tel = 'Invalid phone number';
                }
            }
            return errors;
        },
        onSubmit: (values) => { //this function runs when form submitted, still part of formiks object
            console.log(JSON.stringify(values));
            if (typeof window !== "undefined") {window.localStorage.setItem('stepOne', JSON.stringify(values))};
            next();//function from parent component
        },
    });

    return (
        //on screen: 
        <form onSubmit={formik.handleSubmit} id="input-form" className="main-form">{/*when form submitted formiks function will set off*/}
            <h1>Personal info</h1>
            <h2>Please provide your name, email address, and phone number.</h2>
            <section className="labels-s1">
                <label htmlFor="fullName" className="input-label">Name</label>
                {formik.errors.fullName && formik.touched.fullName && ( //conditioning by checking formiks error object and generating label accordingly
                <label className="err-msg-input">{formik.errors.fullName}</label>
            )}
            </section>

            <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="e.g. Stephen King"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                className={formik.errors.fullName ? "input error-input" : "input"  }
            />
          

            <section className="labels-s1">
                <label htmlFor="email" className="input-label">Email address</label>
                {formik.errors.email && formik.touched.email && (
                <label className="err-msg-input">{formik.errors.email}</label>
            )}

            </section>
            <input
                type="text"
                id="email"
                name="email"
                placeholder="e.g. stephenking@lorem.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={formik.errors.email ? "input error-input" : "input" }
            />
            
            <section className="labels-s1">
                <label htmlFor="tel" className="input-label">Phone Number</label>
                {formik.errors.tel && formik.touched.tel && (
                <label className="err-msg-input">{formik.errors.tel}</label>
            )}

            </section>
            <input
                type="text"
                id="tel"
                name="tel"
                placeholder="e.g. +1 234 567 890"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.tel}
                className={formik.errors.tel ? "input error-input" : "input" }
            />
           <article className="btns-flex">
            <button className="btn-next" type="submit">Next step</button>
            </article>
        </form>
    );
};


