import React from 'react';
import {
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiReact,
  DiNodejsSmall,
} from 'react-icons/di';
import {
  SiRedux,
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiPostgresql,
  SiSequelize,
} from 'react-icons/si';

export default function BioSkills() {
  return (
    <div className=''>
      <p className='font-extralight iphone:text-lg laptop:text-xl text-center'>
        A{' '}
        <span className='text-blue-500 hover:text-cyan-400 duration-500'>
          Software Developer{' '}
        </span>
        with experience building
        <span className='text-blue-500 hover:text-cyan-400 duration-700'>
          {' '}
          fullstack web applications.{' '}
        </span>
        <br />
        <br />
        <span className='leading-10'>
          My time in the Navy taught me the value of strong leadership,
          teamwork, and perseverance. I often rely my Bachelor of Arts - BA in
          Psychology and Design & Engineering from Wesleyan University to think
          critically about problems in order to find an efficient and inclusive
          solution.
        </span>
      </p>
      <hr className='my-20' />
      {/* V------- icon container -------V */}

      <div>
        {/* V------ Proficient ------V */}
        <div className='flex justify-between'>
          <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
            <DiJavascript size={40} color='gray' />
            <p className='text-gray-500 text-center'>Javascript</p>
          </div>
          <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
            <DiHtml5 size={40} color='gray' />
            <p className='text-gray-500 text-center'>HTML</p>
          </div>
          <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
            <DiCss3 size={40} color='gray' />
            <p className='text-gray-500 text-center'>CSS</p>
          </div>
          <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
            <DiReact size={40} color='gray' />
            <p className='text-gray-500 text-center'>React</p>
          </div>
          <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
            <SiRedux size={40} color='gray' />
            <p className='text-gray-500 text-center'>Redux</p>
          </div>
          <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
            <DiNodejsSmall size={40} color='gray' />
            <p className='text-gray-500 text-center'>Express</p>
          </div>
        </div>
        {/* V------ Knowledgeable ------V */}
        <div className='flex justify-evenly mt-10'>
          <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
            <SiPostgresql size={40} color='gray' />
            <p className='text-gray-500 text-center'>Postgresql</p>
          </div>
          <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
            <SiSequelize size={40} color='gray' />
            <p className='text-gray-500 text-center'>Sequelize</p>
          </div>
          <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
            <SiNextdotjs size={40} color='gray' />
            <p className='text-gray-500 text-center'>Next</p>
          </div>
          <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
            <SiFirebase size={40} color='gray' />
            <p className='text-gray-500 text-center'>Firebase</p>
          </div>
          <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
            <SiTailwindcss size={40} color='gray' />
            <p className='text-gray-500 text-center'>Tailwindcss</p>
          </div>
        </div>
      </div>
    </div>
  );
}
