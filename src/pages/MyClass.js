import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../components/Dashboard/Sidebar';
import Content from '../components/Dashboard/Content'; 
import MyClassEmpty from '../components/Dashboard/Content/MyClassEmpty';
import ListClassItem from '../components/Dashboard/Content/ListClassItem';
import { Loading } from '../components/Loading';

import handlerCourses from '../constans/api/courses';
import { statusCourses, fetchCourses, messageCourses } from '../store/Actions/courses';

const MyClass = () => {
  const dispatch = useDispatch();
  const COURSES = useSelector(state => state.courses);
  useEffect(() => {
    window.scroll(0, 0);
    dispatch(statusCourses('loading'));
    handlerCourses.mine().then(res => dispatch(fetchCourses(res.data))).catch(err => dispatch(messageCourses(err?.response?.data?.message)));
  }, [dispatch]);

  return (
    <>
      <Sidebar />
      <Content 
        title="My Class" 
        subTitle="Continue learning to pursue your dreams"
      >
        {COURSES.status === 'loading' && <Loading />}
        {COURSES.status === 'error' && COURSES.message}
        {
          COURSES.status === 'ok' 
          && (COURSES.total > 0 
          ? <>
              <div className="grid gap-2 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mt-5">
                {
                  Object.values(COURSES.data)?.map((item, index) => {
                    return <ListClassItem key={index} data={item.course}></ListClassItem>
                  })
                }
              </div>
            </>
          : <MyClassEmpty />
          )
        }
      </Content>
    </>
  );
};

export default MyClass;