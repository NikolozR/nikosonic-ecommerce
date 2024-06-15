'use client'
import { useState } from 'react';
import MapComponent from './MapComponent';
import Button from '../shared/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const mailtoLink = `mailto:nika.rusishvili.95@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex w-full justify-between gap-[28px] items-center mb-[80px]">
      <form onSubmit={handleSubmit} className="pl-6 pr-6 flex-1">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 p-2 border border-gray-300 rounded w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 p-2 border border-gray-300 rounded w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="mt-1 p-2 border border-gray-300 rounded w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="mt-1 h-[200px] p-2 border border-gray-300 rounded w-full" />
        </div>
        <Button type="submit" fontSize='1rem' className='leading-[28px]' padding='px-[40px] py-[6px]'>Send Message</Button>
      </form>
      <MapComponent></MapComponent>
    </div>
  );
}
