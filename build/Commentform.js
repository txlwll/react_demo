

var CommentForm = React.createClass({displayName: "CommentForm",
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
            React.createElement("from", {className: "commentForm", onSubmit: this.handleSubmit}, 
                React.createElement("input", {type: "text", placeholder: "Your name", ref: "author"}), 
                React.createElement("input", {type: "text", placeholder: "Say something", ref: "text"}), 
                React.createElement("input", {type: "submit", value: "Post"})
            )
        );
    }
});