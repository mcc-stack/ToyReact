class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type);
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }
  appendChild(vchild) {
    vchild.mountTo(this.root);
  }
  mountTo(parent) {
    parent.appendChild(this.root);
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
  mountTo(parent) {
    parent.appendChild(this.root);
  }
}

export class Component {
  constructor() {
    this.children = [];
  }
  setAttribute(name, value) {
    this[name] = value;
  }
  mountTo(parent) {
    var vdom = this.render();
    vdom.mountTo(parent);
  }
  appendChild(vchild) {
    this.children.push(vchild);
  }
}

export const ToyReact = {
  createElement(type, props, ...children) {
    var element;
    if (typeof type === 'string') {
      element = new ElementWrapper(type);
    } else {
      element = new type();
    }

    for (let name in props) {
      element.setAttribute(name, props[name]);
    }

    var insertChildren = children => {
      for (let child of children) {
        console.log(child, children);
        if (typeof child === 'object' && child instanceof Array) {
          insertChildren(child);
        } else {
          if (
            !(child instanceof Component) &&
            !(child instanceof ElementWrapper) &&
            !(child instanceof TextWrapper)
          ) {
            child = child.toString();
          }
          if (typeof child === 'string') {
            child = new TextWrapper(child);
          }
          element.appendChild(child);
        }
      }
    };
    insertChildren(children);
    return element;
  },
  render(vdom, element) {
    vdom.mountTo(element);
  }
};
