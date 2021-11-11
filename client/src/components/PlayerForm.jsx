import React, {useState} from 'react';

const PlayerForm = (props) => {
    const {initialFormData, submitCallBack} = props
    const [formInfo, setFormInfo] = useState(initialFormData);
    const [errors, setErrors] = useState([]);

    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        submitCallBack(formInfo)
        .then(err => {
            if (err) {
                const errorResponse = err.response.data.errors;
                const errorArray = [];
                for (const key of Object.keys(errorResponse)){
                    errorArray.push(errorResponse[key].message);
                };
                setErrors(errorArray);}
        })
    }

    return (
        <form className="col-6 m-5" onSubmit={submitHandler}>
            <div>
                {errors.map((err, i) => <p key={i} className="text-danger">{err}</p>)}
                <label htmlFor="name" className="form-label me-3">Name:</label>
                <input onChange={changeHandler} className="form-control" type="text" value={formInfo.name} name="name" required />
                {formInfo.name.length === 1 && 
                    <p className="text-danger">*Name must be at least 2 characters.</p>
                }
            </div>
            <div>
                <label htmlFor="preferredPosition" className="form-label mt-3 me-3">Preferred Position:</label>
                <input onChange={changeHandler} className="form-control" type="text" value={formInfo.preferredPosition||""} name="preferredPosition" />
            </div>
            <input className="btn btn-primary mt-3" type="submit" value="Submit" disabled={formInfo.name.length <= 1} />
        </form>
    );
};

export default PlayerForm;