const ADD_MESSAGE = 'ADD_MESSAGE'
const HANDLE_ADD_MESSAGE_INPUT = 'HANDLE_ADD_MESSAGE_INPUT'

const initialState = {
  newMessageText: '',
  dialogs: [
    {
      id: 1,
      name: 'Chuvak 1',
      messages: [
        'Text soobsheniya 1',
        'Text soobsheniya 2',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci fuga ipsam libero perspiciatis ratione reprehenderit, similique sint vitae? Cum ducimus ipsam laborum magnam natus nemo nisi possimus repellendus? Magni, non.',
      ],
      img: 'https://pict.sindonews.net/dyn/732/pena/news/2022/01/13/39/655579/harga-fotofoto-ghozali-bikin-melongo-ada-yang-laku-rp42-miliiar-fwx.jpg',
    },
    {
      id: 2,
      name: 'Chuvak 2',
      messages: ['Text soobsheniya 2'],
      img: 'https://pict.sindonews.net/dyn/732/pena/news/2022/01/13/39/655579/harga-fotofoto-ghozali-bikin-melongo-ada-yang-laku-rp42-miliiar-fwx.jpg',
    },
    {
      id: 3,
      name: 'Chuvak 3',
      messages: ['Text soobsheniya 3'],
      img: 'https://pict.sindonews.net/dyn/732/pena/news/2022/01/13/39/655579/harga-fotofoto-ghozali-bikin-melongo-ada-yang-laku-rp42-miliiar-fwx.jpg',
    },
  ],
}

const DialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      state.dialogs[0].messages.push(state.newMessageText)
      state.newMessageText = ''
      return state
    case HANDLE_ADD_MESSAGE_INPUT:
      state.newMessageText = action.body
      return state
    default:
      return state
  }
}

export default DialogsReducer