
```js
  const defaultLines = 2;

  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  function onExapandHandler() {
    setState({ lines: false });
  }

  const ellipsis = (
    <span
      className='sg-link'
      onClick={onExapandHandler}>
      {'...more'}
    </span>
  );

  initialState = {
    lines: defaultLines,
  };

  <section className='sg-section'>
    <div className='sg-row sg-row-nowrap'>
      <TextTruncate
        lines={state.lines}
        text={text}
        trimWhitespace={true}
        ellipsis={ellipsis}>
      </TextTruncate>
    </div>
  </section>
```
