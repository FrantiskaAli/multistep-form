'use client'
import { useFormik } from "formik";
import React, { useEffect } from "react";

      
      const StepOne = React.memo(({ next, originalValues }) => {
          const formik = useFormik({
              initialValues: {
                  fullName: originalValues?.fullName,
                  email: originalValues?.email ,
                  tel: originalValues?.tel ,
              },
              validate: (values) => {
                  const errors = {};
                  if (!values.fullName) {
                      errors.fullName = 'Required';
                  }
                  if (!values.email) {
                      errors.email = 'Required';
                  } else {
                      const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                      if (!re.test(values.email)) {
                          errors.email = 'Invalid email format';
                      }
                  }
                  if (!values.tel) {
                      errors.tel = 'Required';
                  } else {
                      const reg = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
                      if (!reg.test(values.tel)) {
                          errors.tel = 'Invalid phone number format';
                      }
                  }
                  if (!errors) {
                      if (window !== undefined) {
                        localStorage.setItem('stepOne', JASON.stringify(values))
                     //     change(values);
                      }
                  }
                  return errors;
              },
              onSubmit: (values) => {
                  console.log(JSON.stringify(values));
                  next();
              },
          });
      
          return (
              <form onSubmit={formik.handleSubmit}>
                  <h1>Personal info</h1>
                  <h2>Please provide your name, email address, and phone number.</h2>
                  <section>
                      <label htmlFor="fullName">Name</label>
                  </section>
                  <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="e.g. Stephen King"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.fullName}
                  />
                  {formik.errors.fullName && formik.touched.fullName && (
                      <div>{formik.errors.fullName}</div>
                  )}
      
                  <section>
                      <label htmlFor="email">Email address</label>
                  </section>
                  <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="e.g. stephenking@lorem.com"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email && (
                      <div>{formik.errors.email}</div>
                  )}
      
                  <section>
                      <label htmlFor="tel">Phone Number</label>
                  </section>
                  <input
                      type="text"
                      id="tel"
                      name="tel"
                      placeholder="e.g. +1 234 567 890"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.tel}
                  />
                  {formik.errors.tel && formik.touched.tel && (
                      <div>{formik.errors.tel}</div>
                  )}
      
                  <button type="submit">Next step</button>
              </form>
          );
      });
      
      export default StepOne;
       