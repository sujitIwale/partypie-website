import React,{useContext,useState} from 'react';
import AdminContext from '../../../context/Admin/AdminContext';
import {Link} from 'react-router-dom';

const Auth = () => {
    const [Admin, setAdmin] = useState({
        email:'',
        password:''
    })
    const adminContext = useContext(AdminContext);

    const {getAdmin,isAuthenticated} = adminContext;
    const onChange = (e) => {
        setAdmin({...Admin,[e.target.name]:e.target.value})
        
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        getAdmin(Admin);
    }
    return (
        <div>
            <main className="pa4 black-80">
            <form className="measure center" onSubmit={onSubmit}>
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 tc fw6 ph0 mh0">Admin</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                           type="email" name="email"  id="email-address" 
                           onChange={onChange}
                />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" for="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password"
                           name="password"  id="password"
                           onChange={onChange} />
                </div>
                </fieldset>
                <div className="">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" 
                       value="Sign in"
                        />
                {
                    isAuthenticated && <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                      <Link to='/admin/page' >Go to Admin Page</Link>
                 </button> 
                }
                           
                </div>
                <div className="lh-copy mt3">
                </div>
            </form>
            </main>

        </div>
    )
}

export default Auth;
