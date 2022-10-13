import { Routes, Route, Navigate } from 'react-router-dom';

import { Course } from './Course/Course';
import { Courses } from './Courses/Courses';
import { About } from './About/About';
import { Blog } from './Blog/Blog';
// import { Erorr } from './404/Error';

import { Header } from './Header/Header';
import { Post } from './Post/Post';
import { Special } from './Special/Special';
import { Video } from './Video/Video';
import { HomePage } from './HomePage/HomePage';
import { Price } from './Price/Price';
import { Timetible } from './Timetible/Timetible';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<Courses />} />
          <Route path="course" element={<Course />} />
          <Route path="video" element={<Video />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="price" element={<Price />} />
          <Route path="timetible" element={<Timetible />} />
          <Route path="special" element={<Special />} />
          <Route path="post" element={<Post />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
