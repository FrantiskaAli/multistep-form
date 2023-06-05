import { useFormik } from "formik";

export default function StepOne({ change, next }) {
  const formik = useFormik({ 
    initialValues: {//setting initial values of the form
      fullName: "",
      email: "",
      tel: "",
    },
    validate: (values) => { //validating form input, errors saved in the object, where i can 
      const errors = {};//use them later in the component itself
      if (!values.fullName) {
        errors.fullName = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else {//regexp for email I got on stack overflow
        const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(values.email)) {
          errors.email = "Invalid email format";
        }
      }
      if (!values.tel) {
        errors.tel = "Required";
      } else {//regexp for phone number, also from stack overflow
        const reg = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        if (!reg.test(values.tel)) {
          errors.tel = "Invalid phone number format";
        }
      }
      if (!errors){
        if(change){
          change(formik.values);
        }
      }
      return errors;
    },
    onSubmit: (values) => {
      // Handle form submission
      //I can access the form values using 'values' object
      // e.g., values.fullName, values.email, values.tel
      console.log(values);
      // Calling function from my parent component
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
      {formik.errors.fullName && formik.touched.fullName && (//this condition checks if i have visited the input field and if there was any errors
        <div>{formik.errors.fullName}</div>//in the case of errors label will be made to my input, will set that up after i got the basic functionality
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
      {formik.errors.email && formik.touched.email && (//same as at previous input
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
      {formik.errors.tel && formik.touched.tel && (//same as first input
        <div>{formik.errors.tel}</div>//need to change these divs into labels in appropriate space,later
      )}

      <button type="submit">Next step</button>
    </form>
  );
}
