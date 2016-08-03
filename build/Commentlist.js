var CommentList = React.createClass({displayName: "CommentList",
    render: function() {
        var commentNodes = this.props.data.map(function(comment, index) {
            return (
                React.createElement(Comment, {author: comment.author, key: index}, 
                    comment.text
                )
            )
        });
        return (
            React.createElement("div", {className: "commentList"}, 
                commentNodes
            )
        )
    }
});