
```js
  initialState = { value: 'value' };

  const onChangeHandler = (e) => {
    const { value } = e.target;
    console.log(value);
    setState({ value });
  }

  <Input
    value={state.value}
    onChange={onChangeHandler}/>
```
