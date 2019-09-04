
```js
  initialState = {
    input1: '',
  };

  const onChangeHandler = ({ name, value }) => {
    setState({ [name]: value });
  }

  <section className='sg-section'>
    <div className='sg-row sg-mar--top-bot-10'>
      <TextInput
        name='input1'
        label='label'
        placeholder='placeholder'
        value={state.input1}
        onChange={onChangeHandler}/>
    </div>
    <div className='sg-row sg-mar--top-bot-10'>
      <TextInput
        label='label'
        placeholder='placeholder'
        disabled={true}/>
    </div>
  </section>
```
