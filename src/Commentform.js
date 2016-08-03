

var CommentForm = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var author = this.ref.author.value.trim();
        var text = this.ref.text.value.trim();
        if(!text || !author) {
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.ref.author.value = "";
        this.ref.text.value = "";
    },
    render: function() {
        return (
            <from className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" ref="author"/>
                <input type="text" placeholder="Say something" ref="text"/>
                <input type="submit" value="Post"/>
            </from>
        );
    }
});