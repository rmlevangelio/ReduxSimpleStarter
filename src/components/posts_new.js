import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index'; 
import { Link } from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  } 

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // blog post has been created and navigate by calling 
        // this.context.router.push
        this.context.router.push('/');
      });
  }

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger':''}`}>
          <label>Title</label>
          <input {...title} type="text" className="form-control" />
          <div className="text-help">
            {title.touched ? title.error:''}
          </div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger':''}`}>
          <label>Categories</label>
          <input {...categories} type="text" className="form-control" />
          <div className="text-help">
            {categories.touched ? categories.error:''}
          </div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger':''}`}>
          <label>Content</label>
          <textarea {...content} className="form-control" />
          <div className="text-help">
            {content.touched ? content.error:''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit  
        </button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  } 

  if (!values.categories) {
    errors.categories = 'Enter categories';
  } 

  if (!values.content) {
    errors.content = 'Enter some content';
  } 

  return errors;
}

// first parameter is the elements
// watcher
// reduxForm injecting helpers to props
// 
// connect: first arg is mapStateToProps, mapDispatchToProps
// reduxForm: 1st: config, mapStateToProps, mapDispatchToProps
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);


// form: {
//  PostsNewForm: {
//    title: '',
//    etc
//  }
// }
