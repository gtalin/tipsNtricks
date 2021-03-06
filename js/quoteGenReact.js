"use strict";

var Quote = React.createClass({
  displayName: "Quote",

  getInitialState: function getInitialState() {
    return {
      id: 0
    };
  },
  quotes: ["To array a man's will against his sickness is the supreme art of medicine. Henry Ward Beecher", "The trust of the innocent is the liar's most useful tool.", "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work.", "French is the language that turns dirt into romance.", "I was in enough to get along with people. I was never socially inarticulate. Not a loner. And that saved my life, saved my sanity. That and the writing. But to this day I distrust anybody who thought school was a good time. Anybody.", "I'm not a big fan of psychoanalysis: I think if you have mental problems what you need are good pills. But I do think that if you have thinks that bother you, things that are unresolved, the more that you talk about them, write about them, the less", "You can't deny laughter; when it comes, it plops down in your favorite chair and stays as long as it wants.", "If you don't have the time to read, you don't have the time or the tools to write.", "I guess when you turn off the main road, you have to be prepared to see some funny houses.", "We like to think about how smart we are. But I think talent as a writer is hard-wired in, it's all there, at least the basic elements of it. You can't change it any more than you can choose whether to be right ", "A lot of us grow up and we grow out of the literal interpretation that we get when we're children, but we bear the scars all our life. Whether they're scars of beauty or scars of ugliness, it's pretty much in the eye of the beholder."],
  buttonClick: function buttonClick() {
    //This will be passed to Button
    //state will be passed to QuoteWell
    //button click will cause a new random id to be
    function randomNumber() {
      var len = this.quotes.length;
      return Math.floor(Math.random() * len);
    }
    this.setState({ id: randomNumber.call(this, null) });
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Quote Generator"
      ),
      React.createElement(QuoteWell, { quotes: this.quotes, id: this.state.id }),
      React.createElement(Button, { buttonClick: this.buttonClick })
    );
  }
});

var QuoteWell = React.createClass({
  displayName: "QuoteWell",

  render: function render() {

    return React.createElement(
      "div",
      { className: "quoteWell" },
      React.createElement(
        "p",
        null,
        this.props.quotes[this.props.id]
      )
    );
  }
});

var Button = React.createClass({
  displayName: "Button",

  render: function render() {
    var _this = this;

    return React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        { className: "button", onClick: function onClick() {
            _this.props.buttonClick();
          } },
        "New Quote"
      )
    );
  }
});

ReactDOM.render(React.createElement(Quote, null), document.getElementById("container"));