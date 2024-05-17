"use client"
import { contact } from '@/data/portfolio';
import Link from 'next/link';
import React, { useState } from 'react';

// Define the form state type
interface FormState {
  firstName: string;
  lastName: string;
  email: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [message, setMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage('Form submitted successfully');
        setForm({ firstName: '', lastName: '', email: '' });
      } else {
        setMessage(result.message || 'Form submission failed');
      }
    } catch (error) {
      setMessage('An error occurred while submitting the form');
    }
  };

  return (
    <section id="contact" className='flex flex-col justify-center items-center my-10'>
      <p className='flex justify-center font-bold text-[30px] text-center dark:bg-gradient-to-r from-[#3927A7] to-[#B70707] dark:bg-clip-text dark:text-transparent'>
        {contact.title}
      </p>
      <p className='justify-center text-[18px] text-center p-8 my-5 dark:bg-gradient-to-r from-[#F8F1F1] to-[#404146] dark:bg-clip-text dark:text-transparent'>
        {contact.description}
      </p>
      <div className='flex flex-wrap justify-center my-5 gap-4'>
        {contact?.links?.map((link, index) => (
          <Link key={index} target="_blank" href={link?.link} className='hover:scale-110'>
            <link.icon className='h-6 w-6' />
          </Link>
        ))}
      </div>
      <form onSubmit={handleSubmit} className='w-full max-w-lg p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md'>
        <div className='mb-4'>
          <label htmlFor="firstName" className='block text-sm font-medium text-gray-700 dark:text-gray-300'>First Name</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={form.firstName} 
            onChange={handleChange} 
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white' 
            required 
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="lastName" className='block text-sm font-medium text-gray-700 dark:text-gray-300'>Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={form.lastName} 
            onChange={handleChange} 
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white' 
            required 
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="email" className='block text-sm font-medium text-gray-700 dark:text-gray-300'>Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white' 
            required 
          />
        </div>
        <div className='flex justify-center'>
          <button 
            type="submit" 
            className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600'
          >
            Submit
          </button>
        </div>
      </form>
      {message && <p className='mt-4 text-center text-sm text-red-500'>{message}</p>}
    </section>
  );
};

export default Contact;
