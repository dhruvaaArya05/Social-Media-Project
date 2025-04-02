const WelcomeMessage = ({ onGetPostsClicked }) => {
  return <center>
    <h1>There are no posts.</h1>
    <button type="button" onClick={onGetPostsClicked} className="btn btn-primary">Get Posts from server</button>
  </center>
}

export default WelcomeMessage;