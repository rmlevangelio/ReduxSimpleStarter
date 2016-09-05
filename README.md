# Creating React-Redux form 


## Wrap up

#### Using `redux-form`:

Redux form is somehow similar to `{ connect }` function of react-redux but
it accepts a first parameter which is the config of the form

`js
reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
`

`.touched` to check if the form element has been touched by the user
`.invalid` to check if the form element is valid or not

#### Route Creation 
Comes from `react-router` package:
`import { Router, browserHistory } from 'react-router';`
`import { Route, IndexRoute } from 'react-router';`

`<Router history={browserHistory} routes={routes}/>`

`export default (
  <Route path="/" component={App} > // Renders app
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);

IndexRoute is for the initial component
`

#### Checks if the component is already mounted before performing actions
`componentWillMount() {
    
}`

#### Redirecting to a certain route

`js
static contextTypes = {
  router: PropTypes.object
}

this.context.router.push('/');
`

#### Sample Reducer
`js
export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    case FETCH_POST:
      return { ...state, post: action.payload.data };
    default:
      return state;
  }
}`

