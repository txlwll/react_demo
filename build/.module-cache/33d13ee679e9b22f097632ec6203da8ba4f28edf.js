var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan  4444 Walke", text: "This is * 22222 another* comment"}
];

var CommentBox = React.createClass({displayName: "CommentBox",
    getInitialState: function() {
        return {a: []};
    },
    componentDidMount: function() {
        setTimeout(function () {
            
        });
    },
    render: function() {
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h1", null, "Comments"), 
                React.createElement(CommentList, {data: this.state.a}), 
                React.createElement(CommentForm, null)
            )
        );
    }
});
ReactDOM.render(
    React.createElement(CommentBox, {data: data}),
    document.getElementById('example')
);