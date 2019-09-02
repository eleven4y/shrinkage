
```js
  initialState = { items: [], counter: 0 };

  const onAddItem = (type) => () => {
    const item = { id: state.counter, message: `${type} toast`, type };
    const items = [item, ...state.items];

    setState({ items, counter: state.counter + 1 });
  };

  const onDeleteItem = (id) => {
    const items = state.items
      .filter(item => item.id !== id);

    setState({ items });
  };

  <section className='sg-section'>
    <NotificationProvider
      items={state.items}
      deleteItem={onDeleteItem}/>
    <div className='sg-row s sg-row-nowrap'>
      <button
        className='sg-col-2 sg-button sg-bgcolor-grey'
        onClick={onAddItem('default')}>
        {'add default toast'}
      </button>
      <button
        className='sg-col-2 sg-button sg-bgcolor-green'
        onClick={onAddItem('success')}>
        {'add success toast'}
      </button>
      <button
        className='sg-col-2 sg-button sg-bgcolor-blue'
        onClick={onAddItem('info')}>
        {'add info toast'}
      </button>
      <button
        className='sg-col-2 sg-button sg-bgcolor-orange'
        onClick={onAddItem('warning')}>
        {'add warning toast'}
      </button>
      <button
        className='sg-col-2 sg-button sg-bgcolor-red'
        onClick={onAddItem('error')}>
        {'add error toast'}
      </button>
    </div>
  </section>
```
