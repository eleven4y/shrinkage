
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
    <div className='sg-row sg-mar-top-bot-10'>
      <button onClick={onAddItem('default')}>
        {'add default toast'}
      </button>
    </div>
    <div className='sg-row sg-mar-top-bot-10'>
      <button onClick={onAddItem('success')}>
        {'add success toast'}
      </button>
    </div>
    <div className='sg-row sg-mar-top-bot-10'>
      <button onClick={onAddItem('info')}>
        {'add info toast'}
      </button>
    </div>
    <div className='sg-row sg-mar-top-bot-10'>
      <button onClick={onAddItem('warning')}>
        {'add warning toast'}
      </button>
    </div>
    <div className='sg-row sg-mar-top-bot-10'>
      <button onClick={onAddItem('error')}>
        {'add error toast'}
      </button>
    </div>
  </section>
```
