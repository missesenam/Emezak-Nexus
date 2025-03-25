import React, { useState } from "react";

const RegStudent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    gender: "",
    languages: [],
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLanguageChange = (language) => {
    setFormData((prev) => {
      if (prev.languages.includes(language)) {
        return {
          ...prev,
          languages: prev.languages.filter((lang) => lang !== language),
        };
      } else {
        return {
          ...prev,
          languages: [...prev.languages, language],
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  // Progress state (assuming 3 steps total)
  // const [currentStep, setCurrentStep] = useState(1);
  // const totalSteps = 3;

  // const handleProgressChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleNext = (e) => {
  //   e.preventDefault();
  //   setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  // };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Progress Bar */}
      {/* <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm text-indigo-600">
            {Math.round((currentStep / totalSteps) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-indigo-600 h-2.5 rounded-full"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div> */}

      <h1 className="text-2xl font-bold text-center mb-4">
        Complete your profile to unlock an AI resume guide for free!
      </h1>

      <p className="text-center mb-6 text-gray-600">Hi there! 🌟</p>
      <h2 className="text-xl font-semibold mb-6">Let's get started</h2>

      <form onSubmit={handleSubmit}>
        {/* Name Section */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last name (Optional)
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contact number
          </label>
          <div className="flex">
            <select className="px-3 py-2 border border-gray-300 rounded-l-md bg-gray-100">
              <option>+91</option>
              {/* Add other country codes as needed */}
            </select>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile number"
              className="w-full px-3 py-2 border-t border-r border-b border-gray-300 rounded-r-md"
              required
            />
          </div>
        </div>

        {/* Current City */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current city
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <p className="text-xs text-gray-500 mt-1">
            To connect you with opportunities closer to you
          </p>
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <div className="flex space-x-4">
            {["Female", "Male", "Others"].map((gender) => (
              <label key={gender} className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={formData.gender === gender}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-gray-700">{gender}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Languages you know
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              "English",
              "Hindi",
              "Telugu",
              "Tamil",
              "Marathi",
              "French",
              "Japanese",
            ].map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => handleLanguageChange(lang)}
                className={`px-3 py-1 rounded-full text-sm ${
                  formData.languages.includes(lang)
                    ? "bg-indigo-100 text-indigo-800 border border-indigo-300"
                    : "bg-gray-100 text-gray-800 border border-gray-300"
                }`}
              >
                {lang} +
              </button>
            ))}
            <button
              type="button"
              className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 border border-gray-300"
            >
              + Add more languages
            </button>
          </div>
        </div>

        {/* Type */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select your type</option>
            <option value="College student">College student</option>
            <option value="Fresher">Fresher</option>
            <option value="Working professional">Working professional</option>
            <option value="School student">School student</option>
            <option value="Woman returning to work">
              Woman returning to work
            </option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Complete Profile
        </button>
        {/* Next Button */}
        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegStudent;
