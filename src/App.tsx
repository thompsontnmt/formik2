import React from 'react'
import { Formik, Field, Form, useField, FieldAttributes } from 'formik'
import { Button, Checkbox, FormControlLabel, Radio, TextField } from '@material-ui/core'
// import { number } from 'yup';
// import * as Yup from 'yup';
// import 'yup-phone';

type MyRadioProps = { label: string } & FieldAttributes<{}>

const MyRadio: React.FC<MyRadioProps> = ({label, ...props}) => {
  const [field] = useField<{}>(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

const App: React.FC = () => {
  return (
    <div>
      <Formik initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        contact: '',
        agreement: false,
      }}
      onSubmit={(data, {setSubmitting}) => {
        setSubmitting(true);
        //make async call
        console.log('submit: ', data);
        setSubmitting(false)
      }}
      >
        {({ values, isSubmitting }) => (

          <Form>
            <Field
              placeholder='First Name'
              name="firstName"
              type='input'
              as={TextField}
            />
          <div>
            <Field
              placeholder='Last Name'
              name="lastName"
              type='input'
              as={TextField}
            />
          </div>
          <div>
            <Field
              placeholder='Email'
              name="email"
              type='input'
              as={TextField}
            />
          </div>
          <div>
            <Field
              placeholder='Mobile'
              name="mobile"
              type='input'
              as={TextField}
            />
          </div>
            <Field 
              name='agreement'
              type='checkbox'
              as={Checkbox}
            />

            
          <div>Preferred Method of Contact</div>
            <MyRadio name='contact' type='radio' value='call' label='call' />
            <MyRadio name='contact' type='radio' value='text' label='text' />
            <MyRadio name='contact' type='radio' value='email' label='email' />
          <div>
            <Button type='submit'>Submit</Button>
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
          )}

      </Formik>
    </div>
  );
};

export default App
