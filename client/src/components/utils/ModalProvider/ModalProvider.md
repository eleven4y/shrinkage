
```js
  initialState = { isOpen: false, size: 'medium' };

  const onOpenModal = (size) => () => {
    setState({ isOpen: true, size });
  };

  function onCloseModal() {
    setState({ isOpen: false });
  }

  function onSubmit() {
    setState({ isOpen: false }, () => { alert(`${state.size} modal submitted`); })
  }

  <section className='sg-section'>
    <ModalProvider
      isOpen={state.isOpen}
      size={state.size}
      onRequestClose={onCloseModal}>
      <ModalProvider.Header
        title='Title of modal'/>
      <ModalProvider.Body>
        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
      </ModalProvider.Body>
      <ModalProvider.Footer
        onCancel={onCloseModal}
        onSubmit={onSubmit}/>
    </ModalProvider>
    <div className='sg-row s sg-row-nowrap'>
      <button
        className='sg-col-6 sg-button sg-bgcolor-grey'
        onClick={onOpenModal('small')}>
        {state.isOpen ? 'close small modal' : 'open small modal'}
      </button>
      <button
        className='sg-col-6 sg-button sg-bgcolor-grey'
        onClick={onOpenModal('medium')}>
        {state.isOpen ? 'close medium modal' : 'open medium modal'}
      </button>
      <button
        className='sg-col-6 sg-button sg-bgcolor-grey'
        onClick={onOpenModal('large')}>
        {state.isOpen ? 'close large modal' : 'open large modal'}
      </button>
      <button
        className='sg-col-6 sg-button sg-bgcolor-grey'
        onClick={onOpenModal('xlarge')}>
        {state.isOpen ? 'close extra large modal' : 'open extra large modal'}
      </button>
    </div>
  </section>
```
