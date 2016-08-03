// var data = [
//     {author: "Pete Hunt", text: "This is one comment"},
//     {author: "Pete Hunt", text: "This is one comment"},
//     {author: "Jordan  4444 Walke", text: "This is * 22222 another* comment"}
// ];

var CommentBox = React.createClass({displayName: "CommentBox",
    loadCommentsFormServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({a: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    handleCommentSubmit: function (comment) {
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data:newComments});
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: function(data) {
                this.setState({a: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {a: []};
    },
    componentDidMount:function () {
        this.loadCommentsFormServer();
        setInterval(this.loadCommentsFormServer, this.props.pollInterval);
    },
    render: function() {
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h1", null, "Comments"), 
                React.createElement(CommentList, {data: this.state.a}), 
                React.createElement(CommentForm, {onCommentSubmit: this.handleCommentSubmit})
            )
        );
    }
});
ReactDOM.render(
    React.createElement(CommentBox, {url: "/react_demo/data/test.json", pollInterval: 2000}),
    document.getElementById('example')
);