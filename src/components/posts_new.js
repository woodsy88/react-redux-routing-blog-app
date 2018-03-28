import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
    
    

    renderField(field){

    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : " "}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                className="form-control"
                    type="text"
                    {...field.input}
                />
                {/* connected to the validate function */}
                <div className="text-help">{ touched ?  error : ''}</div>
            </div>
        )
    }

onSubmit (values) {
    this.props.createPost(values, () => {
        this.props.history.push('/'); // go back to the root route of our application
    })  
}

  render() {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderField} />
    
        <Field label="Categories" name="categories" component={this.renderField} />

        <Field label="Content" name="content" component={this.renderField} />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>      
    );
  }
}

// called autmatically by reduxForm at the bottom anytime a user tries to submit
function validate(values) {

    //  console.log(values); -> { title: 'asdf', categories: 'asdf', content: 'asdf'}
    
    const errors = {};
    // validate inputs from values object
    // if user did not add a title to the inccoming param values
    if (!values.title || values.title.length < 3) {
        // then append an error to the errors object
        errors.title = "Enter a title that is atleast 3 characters "
    }
    if (!values.categories || values.categories.length < 3) {
    
      errors.categories = "Enter a category";
    }    
    if (!values.content || values.content.length < 3) {
      errors.content = "Enter a content";
    }    
    // if the errors object comes back as empty, then form submits, 
    // if it has errors, form does not submit
    return errors;
}


// passing validate function to reduxForm
    // reduxForm handles the data side of the form
export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(
    connect(null,{ createPost }) (PostsNew)
);