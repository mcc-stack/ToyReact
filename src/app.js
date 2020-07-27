import { ToyReact, Component } from '../package/ToyReact';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>1</span>
        <span>2</span>
        {this.children}
      </div>
    );
  }
}

ToyReact.render(
  <MyComponent name="a">
    <span>123</span>
  </MyComponent>,
  document.body
);
