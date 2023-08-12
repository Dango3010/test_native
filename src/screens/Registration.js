import { Formik } from 'formik';
import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import * as Yup from 'yup';
import InputWithLabel from '../components/Input'
import ResetButton from '../components/ResetButton'
import styles from '../styles/generalStyles'

export default function RegistrationScreen() {
  
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ecf0f1'}}>
      <Text style={styles.title}>Registration</Text>
        <Formik
          initialValues={{email: '', password: '', confirmPassword: '', petName: '', petBirthDate: '', breed: '', favouriteToy: ''}}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
            confirmPassword: Yup.string()
              .required('Required')
              .oneOf([Yup.ref('password')], 'Passwords do not match, please try again.'),
            petName: Yup.string().required('Required'),
            petBirthDate: Yup.string().required('Required'),
            breed: Yup.string().required('Required'),
            favouriteToy: Yup.string().required('Required')
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
        {({handleChange, handleBlur, handleSubmit, values, handleReset, isSubmitting, errors, touched}) => (
          <View>
              <InputWithLabel
                label="Email"
                name='email'
                placeholder='Enter your email here'
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                errors={errors}
                touched={touched}
              />
              
              <InputWithLabel
                label='Password'
                name='password'
                placeholder="Type your password here"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry
                errors={errors}
                touched={touched}
              />

              <InputWithLabel
                label='Confirm Password'
                name='confirmPassword'
                value={values.confirmPassword}
                placeholder="Re-type your password here"
                onChangeText={handleChange('confirmPassword')}
                secureTextEntry
                errors={errors}
                touched={touched}
              />

              <InputWithLabel
                label="Name"
                name='petName'
                placeholder="Type your dog's name here"
                value={values.petName}
                onChangeText={handleChange('petName')}
                errors={errors}
                touched={touched}
              />
              
              <InputWithLabel
                label='Birthday'
                name='petBirthDate'
                placeholder="Type your dog's date of birth here"
                value={values.petBirthDate}
                onChangeText={handleChange('petBirthDate')}
                errors={errors}
                touched={touched}
              />

              <InputWithLabel
                label='Breed'
                name='breed'
                placeholder="Type your dog's breed here"
                value={values.breed}
                onChangeText={handleChange('breed')}
                errors={errors}
                touched={touched}
              />

              <InputWithLabel
                label='Favourite toy'
                name='favouriteToy'
                placeholder="Type your dog's favorite toy here"
                value={values.favouriteToy}
                onChangeText={handleChange('favouriteToy')}
                errors={errors}
                touched={touched}
              />

              <Button
                title='Submit'
                onPress={handleSubmit}
                disabled={isSubmitting}
              />
              <ResetButton 
                handleReset={handleReset}
                disabled={isSubmitting} 
              />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

