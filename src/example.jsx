
var React = require('react');
var highlight = require('highlight.js');
var classnames = require('classnames');
var reactToJsx = require('react-to-jsx');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      theme: 'silver'
    }
  },

  highlight: function(string) {
    var code = highlight.highlight('xml', string).value;
    var html = { __html: code };
    return <pre dangerouslySetInnerHTML={html} className="p2 mb0 rounded-bottom bg-darken-1" />
  },

  render: function() {

    var string = reactToJsx(this.props.children, { indent: '  ' });
    var classes = {
      container: classnames('mb2', 'border', 'rounded', 'border-' + this.props.theme),
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

