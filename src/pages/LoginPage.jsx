import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/operations';
import toast from 'react-hot-toast';
import { motion } from "framer-motion";

const LoginPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  }

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(login(values))
      .unwrap()                                     //3-rd method
      .then(res => {
        toast(`Welcome, ${res.user.name}!`);
      })
      .catch(() => {
        toast.error('Invalid credentials')
      });
    options.resetForm();
  };

  //1-st method:
  //useEffect(() => {
  // isLoggedIn && navigate('/');
  //}, [isLoggedIn, navigate]);

  //2-nd method:
  //if (isLoggedIn) {
  // return <Navigate to='/' />;
//}


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
            className="text-5xl font-bold"
          >
            Login now!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage