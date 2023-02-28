import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const message = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button type="submit" onClick={handleCheckStatus}>Check Status</button>
      <span>{message}</span>
    </div>
  );
};
export default Categories;
