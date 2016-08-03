// var data = [
//     {author: "Pete Hunt", text: "This is one comment"},
//     {author: "Pete Hunt", text: "This is one comment"},
//     {author: "Jordan  4444 Walke", text: "This is * 22222 another* comment"}
// ];

var CommentBox = React.createClass({
    propTypes: {
        url: React.PropTypes.string.isRequired,
        pollInterval: React.PropTypes.number.isRequired
    },
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
        var comments = this.state.a;
        var newComments = comments.concat([comment]);
        this.setState({a: newComments});
        // $.ajax({
        //     url: this.props.url,
        //     dataType: 'json',
        //     type: 'POST',
        //     data: comment,
        //     success: function(data) {
        //         this.setState({a: data});
        //     }.bind(this),
        //     error: function(xhr, status, err) {
        //         console.error(this.props.url, status, err.toString());
        //     }.bind(this)
        // });
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
            <div className="commentBox">
                <h1>{aa}</h1>
                <CommentList data={this.state.a} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});
var aa = 'First · Second '
var initData = {
    url: '/react_demo/data/test.json',
    pollInterval: 2000
}
ReactDOM.render(
    <CommentBox {...initData} />,
    document.getElementById('example')
);