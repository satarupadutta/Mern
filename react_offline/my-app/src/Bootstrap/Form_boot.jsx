import React from 'react'
import img  from '../image/c.jpg'

const formcon = {
    marginLeft: '20em ',
    padding: '3em',
    border: '1px solid black',
    borderRadius: '1em',
    width:'50%',
    backgroundColor:'yellow'
}

const reg = {
    marginTop: '40px',
    textAlign: 'center',
    color:'blue'
    
}

const Form = () => {
    return (
        <div>
            <h1> image import</h1>
            <img src={img} alt="image"/>
            <h1 style={reg}><u>Registration</u></h1>

            <div style={formcon}>
                <div className='container'>
                    <form className="row g-3">
                        <div className="col-md-4">
                            <label HTMLFor="validationServer01" className="formlabel">First name:</label>
                            <input style={{marginLeft:'100px'}}type="text" className="form-control" id="validationServer01" placeholder="First name" required />
                        </div>

                        <div className="col-md-4">
                            <label for="validationServer02" className="form-label">Last name:</label>
                            <input style={{marginLeft:'102px'}}type="text" className="form-control" id="validationServer02" placeholder="Last name" required />
                        </div>

                        <div className="col-md-4">
                            <label for="validationServerUsername" className="form-label">Username:</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend3">@</span>
                                <input style={{marginLeft:'162px'}} type="text" className="form-control" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                                <div id="validationServerUsernameFeedback" className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <label HTMLFor="validationServer0" className="formlabel">Password:</label>
                            <input style={{marginLeft:'110px'}}type="password" className="form-control" id="validationServer00" placeholder="Password" required />
                        </div>

                        <div className="col-md-4">
                            <label HTMLFor="validationServer0" className="formlabel">Confirm Password:</label>
                            <input style={{marginLeft:'50px'}}type="password" className="form-control" id="validationServer00" placeholder="Password" required />
                        </div>

                        <div className="col-md-6">
                            <label for="validationServer03" className="form-label">City:</label>
                            <input style={{marginLeft:'150px'}} type="text" className="form-control" id="validationServer03" aria-describedby="validationServer03Feedback" required />
                            <div id="validationServer03Feedback" className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>

                        <div className="col-md-3">
                            <label for="validationServer04" className="form-label">State:</label>
                            <select className="form-select" id="validationServer04" aria-describedby="validationServer04Feedback" required>
                                <option selected disabled value="">Choose...</option>
                                <option>...</option>
                            </select>
                        </div>

                        <div className="col-md-3">
                            <label for="validationServer05" className="form-label">Zip:</label>
                            <input style={{marginLeft:'160px'}} type="text" className="form-control" required />
                            <div id="validationServer05Feedback" className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" required />
                                <label className="form-check-label" for="invalidCheck3">
                                    Agree to terms and conditions
                                </label>
                            </div>
                        </div>

                        <div className="col-12">
                           <center> <button className="btn btn-success" type="submit">Submit form</button></center>
                        </div>

                    </form>
                </div>
            </div>
        </div>


    )
}

export default Form