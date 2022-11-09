
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik} from 'formik'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import BasicSchema from '../schema/schema'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const { name, email, password } = formData;

  const navigate = useNavigate();


  const onSubmit = async(values, actions) => {

    if(values){
      try{
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        };

        await fetch('http://127.0.0.1:3003/api/users/signup', requestOptions).then((res)=>{
          // return res.json();
          // console.log(res.json());
          if(res){
            // navigate('/signin');
            toast.success('User created successfully. Please signin to continue.');
            navigate('/signin');
          }
        });

      }catch(error){
        toast.error('Something went wrong with registration. Please try again.')
      }
    }else{
       console.log('Error');
    }

    console.log('submitted');
  
  }


const {values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit} = useFormik({
  initialValues: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }, 
  validationSchema: BasicSchema,
  onSubmit,
});

console.log(errors);
    return(
      <>
        <div className='pageContainer'>
            <header>
              <p className='pageHeader'>Welcome!</p>
            </header> 

            <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  name='name'
                  className='nameInput {errors.name? "input-error" : ""}'
                  placeholder='Name'
                  id='name'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && <p className='errors'>{errors.name}</p>}
                <input
                  type='email'
                  name='email'
                  className='emailInput {errors.email? "input-error" : ""}'
                  placeholder='Email'
                  id='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && <p className='errors'>{errors.email}</p>}

                <div className='passwordInputDiv'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    className='passwordInput'
                    placeholder='Password'
                    id='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <img
                    src={visibilityIcon}
                    alt='show password'
                    className='showPassword'
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                </div>
                {errors.password && touched.password && <p className='errors'>{errors.password}</p>}

                <div className='passwordInputDiv'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name='confirmPassword'
                    className='passwordInput'
                    placeholder='Confirm Password'
                    id='confirmPassword'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.confirmPassword && touched.confirmPassword && <p className='errors'>{errors.confirmPassword}</p>}

                <Link to='/forgot-password' className='forgotPasswordLink'>
                  Forgot Password
                </Link>

                <div className='signUpBar'>
                  <p className='signUpText'>Sign Up</p>
                  <button className='signUpButton' disabled={isSubmitting}>
                    <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
                  </button>
                </div>
            </form>

            <Link to='/signin' className='registerLink'>
              Sign In Instead
            </Link> 
        </div>
        <ToastContainer />
      </>
    ); 

}


export default SignUp;
