var CommentList = React.createClass({displayName: "CommentList",
    render: function() {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                React.createElement(Comment, {author: comment.author}, 
                    comment.text
                )
            );
        });
        console.log(commentNodes)
        return (
            React.createElement("div", {className: "commentList"}, 
                commentNodes
            )
        );
    }
});