# event-listener.js

cross browser add/remove event

## Installation

```sh
$ npm install sasaplus1-prototype/event-listener.js
```

## Usage

via `require()`

```js
var eventListener = require('event-listener');
```

via `<script>`

```html
<script src="event-listener.min.js"></script>
```

### Example

```js
function onClick(event) {
  console.log('click');

  eventListener.off(document.body, 'click', onClick, false);
}

eventListener.on(document.body, 'click', onClick, false);
```

```js
eventListener.once(document.body, 'click', function(event) {
  console.log('click');
}, false);
```

## Functions

### off(element, eventName, callback[, capture])

- `element`
  - `HTMLElement`
- `eventName`
  - `String`
- `callback`
  - `Function`
- `capture`
  - Boolean

remove event handler.

### on(element, eventName, callback[, capture])

- `element`
  - `HTMLElement`
- `eventName`
  - `String`
- `callback`
  - `Function`
- `capture`
  - Boolean

add event handler.

### once(element, eventName, callback[, capture])

- `element`
  - `HTMLElement`
- `eventName`
  - `String`
- `callback`
  - `Function`
- `capture`
  - Boolean

remove event handler when executed.

## License

The MIT license.
