import React from "react";

class AppView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {newItem: ""};

    this.onInputChange = this.onInputChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onInputChange(e) {
    this.setState({newItem: e.target.value});
  }

  onClick(e) {
    if (this.state.newItem) {
      this.props.onAddItem(this.state.newItem);
      this.setState({newItem: " "});
    }
  }

  render() {

    let remove = this.props.onRemoveItem;
    return <div>
      <input type="text" value={this.state.newItem}
             onChange={this.onInputChange}/>
      <button onClick={this.onClick}>Добавить</button>
      <h2>Список смартфонов</h2>
      <div>
        {
          this.props.phones.map(function (item) {

            return <Phone key={item} text={item} onRemove={remove}/>
          })
        }
      </div>
    </div>;
  }
}

class Phone extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: props.text};
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.props.onRemove(this.state.text);
  }

  render() {
    return <div>
      <p>
        <b>{this.state.text}</b><br/>
        <button onClick={this.onClick}>Удалить</button>
      </p>
    </div>;
  }
}

export default AppView;
