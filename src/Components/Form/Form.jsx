import { useState } from 'react';
import validation from '../Validation/Validation';
import style from './Form.module.css';

const Form = ({ login }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={style.wrapper}>
      <form
        onSubmit={handleSubmit}
        className={`${style.container} ${style.card}`}
      >
        <img
          src='https://cdn.shopify.com/s/files/1/0042/7563/4222/collections/R_M_collab_logo.jpg?v=1623834383'
          alt='rick and morty'
          className={style.image}
        />
        <label htmlFor='email' className={style.label}>
          Email:
        </label>
        <input
          type='text'
          name='email'
          value={userData.email}
          onChange={handleChange}
          className={style.input}
        />
        {errors.email && <p className={style.errors}>{errors.email}</p>}
        <label htmlFor='password' className={style.label}>
          Password:
        </label>
        <input
          type='password'
          name='password'
          value={userData.password}
          onChange={handleChange}
          className={style.input}
        />
        {errors.password && <p className={style.errors}>{errors.password}</p>}
        <button className={style.button}>Log In</button>
      </form>
    </div>
  );
};

export default Form;
