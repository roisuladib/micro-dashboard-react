import React from 'react';
import { Link } from 'react-router-dom';

const Congrulation = ({ data }) => {
  return (
    <div>
      <p>
        {data?.metadata?.course_name}
      </p>
      <Link to={`courses/playing/${data?.course_id}`}>
        Mulai Belajar
      </Link>
    </div>
  )
}

export default Congrulation;
