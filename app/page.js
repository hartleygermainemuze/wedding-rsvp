"use client";

import React, { useState } from 'react';

export default function WeddingRSVP() {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState('');

  const [form, setForm] = useState({
    name: '',
    email: '',
    attending: '',
    guests: 0,
    dietary: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your RSVP! We look forward to celebrating with you.');
    console.log(form);
  };

  const checkPassword = () => {
    if (password.toLowerCase() === 'germainehartley2026') {
      setAuthorized(true);
    } else {
      alert('Incorrect password. Please check your invite.');
    }
  };

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md">
          <h1 className="text-3xl font-serif mb-4">Germaine & Hartley</h1>
          <p className="mb-6">Enter the password from your invitation to RSVP</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded-xl mb-4"
          />
          <button
            onClick={checkPassword}
            className="w-full bg-black text-white py-3 rounded-2xl"
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100">
      <header className="text-center py-20">
        <h1 className="text-6xl font-serif mb-6">Germaine Koh & Hartley Muze</h1>
        <p className="text-2xl">10 October 2026</p>
        <p className="text-xl mt-2">Jurong Christian Church</p>
      </header>

      <section className="max-w-4xl mx-auto p-8">
        <h2 className="text-4xl font-semibold mb-6 text-center">Dress Code</h2>
        <p className="text-center text-xl">
          Come in <span className="font-semibold">bright, vibrant colours</span> to celebrate with us!<br/>
          <span className="font-semibold">Black and white are strictly prohibited.</span>
        </p>
      </section>

      <section className="max-w-4xl mx-auto p-8">
        <h2 className="text-4xl font-semibold mb-8 text-center">Wedding Day Schedule</h2>
        <div className="space-y-4 text-lg">
          <p>2:00 PM – Guest Arrival</p>
          <p>2:30 PM – Wedding Ceremony</p>
          <p>4:00 PM – Photo Taking</p>
          <p>6:00 PM – Dinner Reception</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto p-8">
        <h2 className="text-4xl font-semibold mb-8 text-center">Our Journey</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="h-48 bg-white rounded-2xl shadow" />
          <div className="h-48 bg-white rounded-2xl shadow" />
          <div className="h-48 bg-white rounded-2xl shadow" />
          <div className="h-48 bg-white rounded-2xl shadow" />
          <div className="h-48 bg-white rounded-2xl shadow" />
          <div className="h-48 bg-white rounded-2xl shadow" />
        </div>
      </section>

      <section className="max-w-5xl mx-auto p-8">
        <h2 className="text-4xl font-semibold mb-8 text-center">Venue Location</h2>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Jurong%20Christian%20Church&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </section>

      <section className="max-w-2xl mx-auto p-8">
        <h2 className="text-4xl font-semibold mb-6 text-center">RSVP</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="w-full border p-3 rounded-xl" required />
          <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="w-full border p-3 rounded-xl" required />
          <select name="attending" value={form.attending} onChange={handleChange} className="w-full border p-3 rounded-xl" required>
            <option value="">Will you be attending?</option>
            <option value="yes">Joyfully Accepts</option>
            <option value="no">Regretfully Declines</option>
          </select>
          <input type="number" name="guests" placeholder="Number of Guests" value={form.guests} onChange={handleChange} className="w-full border p-3 rounded-xl" min="0" />
          <textarea name="dietary" placeholder="Dietary Restrictions" value={form.dietary} onChange={handleChange} className="w-full border p-3 rounded-xl" />
          <textarea name="message" placeholder="Leave a message for the couple" value={form.message} onChange={handleChange} className="w-full border p-3 rounded-xl" />
          <button type="submit" className="w-full bg-black text-white py-3 rounded-2xl text-lg">Submit RSVP</button>
        </form>
      </section>

      <footer className="text-center py-10 text-sm">
        With love, Germaine & Hartley
      </footer>
    </div>
  );
}