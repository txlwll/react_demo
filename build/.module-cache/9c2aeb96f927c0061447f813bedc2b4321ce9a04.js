var CommentList = React.createClass({displayName: "CommentList",
    render: function() {
        return (
            React.createElement("div", {className: "commentList"}, 
                React.createElement(Comment, {author: "Pete Hunt"}, "This is a comment"), 
                React.createElement(Comment, {author: "another"}, "This is an another comment")
            )
        );
    }
});