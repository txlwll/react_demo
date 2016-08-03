

var CommentForm = React.createClass({displayName: "CommentForm",
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
            React.createElement("form", {className: "commentForm", action: "", onSubmit: this.handleSubmit}, 
                React.createElement("input", {type: "text", placeholder: "Your name", ref: "author"}), 
                React.createElement("input", {type: "text", placeholder: "Say something", ref: "text"}), 
                React.createElement("input", {type: "submit", value: "Post", onClick: this.test})
            )
        );
    }
});