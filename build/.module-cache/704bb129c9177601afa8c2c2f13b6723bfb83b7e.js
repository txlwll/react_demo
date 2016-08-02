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
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
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
    React.createElement(CommentBox, {url: "/react_lizi/data/test.json"}),
    document.getElementById('example')
);