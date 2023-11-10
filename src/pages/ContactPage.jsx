
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Form, Alert } from 'react-bootstrap';
import styles from '../styles/ContactPage.module.css';

const schema = yup.object({
  fullName: yup.string().required('Full name is required').min(3, 'Full name must be at least 3 characters'),
  subject: yup.string().required('Subject is required').min(3, 'Subject must be at least 3 characters'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  body: yup.string().required('Body is required').min(3, 'Body must be at least 3 characters'),
}).required();

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = data => {
    console.log(data);
    setSubmitted(true);
    reset(); // This will clear the form
  };

  return (
    <>
      <h3 className="mt-5 text-center">Contact Us:</h3>
      <div className={styles.formContainer}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter your full name" 
              {...register('fullName')} 
              isInvalid={!!errors.fullName} 
            />
            <Form.Control.Feedback type="invalid">
              {errors.fullName?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter the subject" 
              {...register('subject')} 
              isInvalid={!!errors.subject} 
            />
            <Form.Control.Feedback type="invalid">
              {errors.subject?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Your Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter your email" 
              {...register('email')} 
              isInvalid={!!errors.email} 
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Text</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              placeholder="Type your message here" 
              {...register('body')} 
              isInvalid={!!errors.body} 
            />
            <Form.Control.Feedback type="invalid">
              {errors.body?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button type="submit" className={styles.submitButton}>Submit</Button>
          </div>
        </Form>
        {submitted && <Alert variant="success" className="mt-3 text-center">Yay! Your message has been sent successfully!!</Alert>}
      </div>
    </>
  );
};

export default ContactPage;
