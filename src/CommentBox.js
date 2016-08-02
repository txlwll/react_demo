var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan  4444 Walke", text: "This is * 22222 another* comment"}
];

var CommentBox = React.createClass({
    getInitialState: function() {
        return {a: []};
    },
    componentDidMount: function() {
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
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.a}/>
                <CommentForm />
            </div>
        );
    }
});
ReactDOM.render(
    <CommentBox url="/react_lizi/data/test.json"/>,
    document.getElementById('example')
);