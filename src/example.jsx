
var React = require('react');
var highlight = require('highlight.js');
var classnames = require('classnames');
var reactToJsx = require('react-to-jsx');

var JS_COMMENT_REGEX = /(\/\*[\w\'\s\r\n\*]*\*\/)|(\/\/[\w\s\']*)|(\<![\-\-\s\w\>\/]*\>)/;

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      color: 'silver',
      preMaxHeight: 'none',
    }
  },

  highlight: function(string) {
    // Attempting to remove js comments
    //var string = string.replace(JS_COMMENT_REGEX, '');
    var code = highlight.highlight('xml', string).value;
    var html = { __html: code };
    var style = {
      maxHeight: this.props.preMaxHeight,
    };
    return <pre dangerouslySetInnerHTML={html}
      className="p2 mb0 rounded-bottom bg-darken-1"
      style={style} />
  },

  render: function() {

    var string = reactToJsx(this.props.children, { indent: '  ' });
    var classes = {
      container: classnames('mb2', 'border', 'rounded', 'border-' + this.props.color),
      rendered: classnames('p2'),
    };

    return (
      <div className={classes.container}>
        <div className={classes.rendered}>{this.props.children}</div>
        {this.highlight(string)}
      </div>
    )
  }

});

