import React, { useEffect } from 'react';
import Youtube from 'react-youtube';
import { useDispatch, useSelector } from 'react-redux';
import { statusCourses, watchCourse, messageCourses } from '../store/Actions/courses';
import SidebarClass from '../components/Dashboard/Sidebar/SidebarClass.js';
import apiCourses from '../constans/api/courses';
import { Loading } from '../components/Loading';
import Centered from '../components/Centered';

const DetailClass = ({ match, history }) => {
   const dispatch = useDispatch();
   const COURSES = useSelector(state => state.courses);
   const id = match.params;
   const idClass = id.class;
   const idChapter = id.chapter;
   const idVideo = id.uid;
   useEffect(() => {
      window.scroll(0, 0);
      dispatch(statusCourses('loading'));
      apiCourses.detail(idClass)
         .then(res => {
            if (res?.chapters?.length === 0) throw new Error('Class might be not ready yet');
            dispatch(watchCourse(res));
         })
         .catch(err => {
            dispatch(messageCourses(err?.response?.data?.message ?? 'error'))
         })
   }, [idClass, dispatch]);

   if (COURSES.status === 'loading') return <Loading />;
   if (COURSES.status === 'error') return <Centered><h1 className="text-4xl">{COURSES?.message ?? 'Error here...'}</h1></Centered>;

   let currentChapter, currentLesson;
   if (COURSES?.status === 'ok' && COURSES?.data[idClass]?.chapters) {
      currentChapter = COURSES.data[idClass]?.chapters?.find(chapter => + chapter?.id === + idChapter)
         ?? COURSES.data[idClass]?.chapters[0];
      currentLesson = currentChapter?.lessons?.find(lesson => lesson?.video === idVideo)
         ?? currentChapter?.lessons[0];
   }

   const nextVideo = () => {

   }

   console.log('currentChapter', currentChapter);
   console.log('currentLesson', currentLesson);

   return (
      <div className="flex">
         {
            COURSES?.data[idClass]?.chapters?.length >= 1 && (<>
               <SidebarClass
                  data={COURSES?.data[idClass]}
                  defaultUri={`/courses/${idClass}/${currentChapter.id}/${currentLesson?.video}`}
               ></SidebarClass>
               <main className="flex-1">
                  <div className="px-16">
                     <section className="flex flex-col mt-8">
                        <h1 className="text-4xl c-5 font-medium">
                           {currentLesson?.name ?? 'Lesson Name'}
                        </h1>
                        <p className="text-lg font-normal c-4 mt-1 mb-7">
                           Materi Bagian Dari {currentChapter.name ?? 'Chapter Name'}
                        </p>
                     </section>
                     <section className="flex flex-col mt-8">
                        <div className="flex justify-start items-center -mx-4">
                           <div className="w-full px-4">
                              <div className="relative">
                                 <div className="youtube-wrapper">
                                    {
                                       currentLesson?.video &&
                                       <Youtube
                                          id={currentLesson?.video}
                                          videoId={currentLesson?.video}
                                          opts={{
                                             playerVars: {
                                                autoplay: 1,
                                                controls: 1,
                                                showinfo: 1,
                                                rel: 0,
                                             }
                                          }}
                                          onEnd={nextVideo}
                                       />
                                    }
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>
                  </div>
               </main>
            </>)
         }
      </div>
   );
};

DetailClass.propTypes = {};

export default DetailClass;