import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    
    const [courses,setCourses]=useState([]);
     useEffect(()=>{
      fetch('./fakeDb.json')
      .then(res=>res.json())
      .then(value=> setCourses(value.slice(0,4)));
    },[]);
    return (
        <section className='d-flex justify-content-around mt-3 flex-wrap'>
        {
             courses.map(course=><Course course={course}></Course>)
          }
      </section>
    );
        }

export default Courses;