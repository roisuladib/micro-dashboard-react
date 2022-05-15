import { STATUS_COURSES, FETCH_COURSES, WATCH_COURSE, MESSAGE_COURSES } from '../../constans/types/courses';

export const statusCourses = status => ({
   type: STATUS_COURSES,
   paylod: status
});

export const fetchCourses = courses => ({
   type: FETCH_COURSES,
   paylod: courses
});

export const watchCourse = course => ({
   type: WATCH_COURSE,
   paylod: course
});

export const messageCourses = message => ({
   type: MESSAGE_COURSES,
   paylod: message
});
