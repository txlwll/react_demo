

var CommentForm = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var author = this.refs.author.value.trim();
        var text = this.refs.text.value.trim();
        if(!text || !author) {
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.refs.author.value = "";
        this.refs.text.value = "";
    },
    test: function (e) {
        e.preventDefault();
        alert(this.props.url)
    },
    render: function() {
        return (
            <form className="commentForm" action="" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" ref="author"/>
                <input type="text" placeholder="Say something" ref="text"/>
                <input type="submit" value="Post" onClick={this.test}/>
            </form>
        );
    }
});