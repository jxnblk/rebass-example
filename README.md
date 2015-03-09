
# rebass-example

[Rebass](http://jxnblk.com/rebass) React component for showing JSX code examples


## Usage

```bash
npm install --save rebass-example
```

```js
var React = require('react');
var Example = require('rebass-example');
var MyComponent = require('./my-component.jsx');
```

```jsx
<App>
  <Example>
    <MyComponent {...this.props}>
      Show people how to use MyComponent
    </MyComponent>
  </Example>
</App>
```

