import React from 'react';
import team from './assets/team2.jpeg'
const About = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl text-center text-gray-700 font-bold py-12">About Us</h1>
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="md:w-1/2">
            <p className='text-2xl'>SPARK.<span className="text-[#F7B02E]">insurance</span></p>
            <p className="text-gray-800">
            Welcome to our cutting-edge health insurance platform, designed with simplicity and your well-being in mind. Start your journey to comprehensive coverage by signing up with your Google account. With an initial payment of just $20, you'll gain access to an insurance plan that doesn't require any medical exams to begin. Our application integrates effortlessly with Google Fit, allowing for continuous monitoring of your physical activities and health metrics. 

            </p>
          </div>
          <div className="md:w-1/2">
            <img src={team} alt="team" className="rounded-lg mb-4" />
            <p className="text-gray-800">
            As a team, we specialize in crafting seamless digital experiences that captivate and inspire. From backend development to data science, from front-end engineering to mobile application development, we cover a wide spectrum of technological domains.

Our strength lies in our ability to seamlessly integrate our skills and expertise, working in synergy to overcome challenges and deliver exceptional results. Whether it's building robust backend systems, uncovering valuable insights from data, designing captivating user interfaces, or creating engaging mobile experiences, we are committed to excellence in every aspect of our work.

Driven by a spirit of innovation and a relentless pursuit of perfection, we thrive on pushing the boundaries of what's possible. With creativity, dedication, and a shared vision for success, we're proud to be the bright brains behind the ideas that shape the future of technology.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-gray-800">
          To understand your mental health, our application uses sophisticated AI to analyze a facial photo you provide, gauging emotional well-being with precision. This unique approach ensures that your insurance rates are tailored to you, with our dynamic pricing model adjusting to reflect your health trends over time. 

By choosing us, you're not just getting insurance; you're joining a community committed to proactive health management. Our platform is designed to keep you informed and engaged with your health, offering insights that can help you lead a healthier lifestyle. Sign up now and experience the future of health insurance, where technology and care come together to offer you peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
