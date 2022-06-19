import React, { Component } from 'react'

export default class Education extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (

            <div className="card animated fadeInLeft">
                <div className="card-body">

                    <h3 className="card-title">Education Info</h3>
                    <hr />
                </div>
                <form onSubmit={this.continue}>


                <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>1</b></h3>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>College/University*</label>
                            <input type="text" name="edu1_school" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_school} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Start Year*</label>
                            <input type="text" name="edu1_startyear" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_startyear} onChange={handleChange} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>end year*</label>
                            <input type="text" name="edu1_endyear" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_endyear} onChange={handleChange} required/>
                        </div>

                    </div>
                    <div className="row col-lg-10 mx-auto mt-2">
                       
                        <div className="col-lg-4 text-left">
                            <label>Degree*</label>
                            <input type="text" name="edu1_degree" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_degree} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Feild Of Study</label>
                            <input type="text" name="edu1_feildofstudy" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_feildofstudy} onChange={handleChange} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>CGPA/Percentage*</label>
                            <input type="text" name="edu1_cgpa" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_cgpa} onChange={handleChange} required/>
                        </div>

                    </div>


                    <br />

                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>2</b></h3>
                            <hr/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>School</label>
                            <input type="text" name="edu2_school" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_school} onChange={handleChange} />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Start Year</label>
                            <input type="text" name="edu2_startyear" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_startyear} onChange={handleChange} />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>End year</label>
                            <input type="text" name="edu2_endyear" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_endyear} onChange={handleChange} />
                        </div>

                    </div>
                    <div className="row col-lg-10 mx-auto mt-2">
                    <div className="col-lg-4 text-left">
                            <label>CGPA/Percentage*</label>
                            <input type="text" name="edu2_cgpa" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_cgpa} onChange={handleChange} required/>
                            </div>
                            </div>         
                    <br />
                    <div className="container text-center d-flex justify-content-around ">
                        
                        <button type="button" className="btn btn-info mr-4" onClick={this.back}><i className="fas fa-angle-left "></i>Back</button>
                     
                        <button type="submit" className="btn btn-info ml-3">Next<i className="fas fa-angle-right "></i></button>
                    </div>
                    <br />

                </form>

            </div>
        )
    }
}
