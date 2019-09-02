
```js
  initialState = { value: 'value' };

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setState({ value });
  }

  <section className='sg-section'>
    <div className='sg-row sg-mar--top-bot-10'>
      <Input
        placeholder='placeholder of component'
        size='small'
        value={state.value}
        onChange={onChangeHandler}/>
    </div>
    <div className='sg-row sg-mar--top-bot-10'>
      <Input
        placeholder='placeholder of component'
        value={state.value}
        onChange={onChangeHandler}/>
    </div>
    <div className='sg-row sg-mar--top-bot-10'>
      <Input
        placeholder='placeholder of component'
        size='large'
        value={state.value}
        onChange={onChangeHandler}/>
    </div>
  </section>
```
