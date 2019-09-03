
```js
  initialState = {
    item1: false,
    item2: false,
  };

  function onChangeHandler({ name, value }) {
    setState({ [name]: value });
  }

  <section className='sg-section'>
    <Checkbox
      className='sg-mar--top-bot-10'
      name='item1'
      value={state.item1}
      onChange={onChangeHandler}/>
    <Checkbox
      className='sg-mar--top-bot-10'
      label='default checkbox'
      name='item2'
      value={state.item2}
      onChange={onChangeHandler}/>
    <Checkbox
      className='sg-mar--top-bot-10'
      label='disabled checkbox'
      value={true}
      disabled={true}/>
  </section>
```
