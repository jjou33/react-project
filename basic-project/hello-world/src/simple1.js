
function LikeButton() {
    const [liked, setLiked]= React.useState(false)
    const text = liked ? "좋아요 취소" : "좋아요";
    return 
    <button onClick={() => setLiked(!liked)}>{text}</button>
    // React.createElement(
    //     'button', 
    //     { onClick: () => setLiked(!liked) }, 
    //     text
    // );
}

const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(LikeButton), domContainer)
