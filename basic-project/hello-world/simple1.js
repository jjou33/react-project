function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요";
  return;

  /*#__PURE__*/
  React.createElement("button", {
    onClick: () => setLiked(!liked)
  }, text); // React.createElement(
  //     'button', 
  //     { onClick: () => setLiked(!liked) }, 
  //     text
  // );
}

const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(LikeButton), domContainer);