<p align="center">
  <a href="https://mohsin-virk-store.herokuapp.com">
    <img src="https://i.imgur.com/NnZu88R.png" alt="Moltin React Demo Store" />
  </a>
</p>

# GreenHeart React Demo Store

An example store built using [React](https://reactjs.org/), [Redux](https://redux.js.org/) and [moltin](https://moltin.com). This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

* [Demo](https://mohsin-virk-store.herokuapp.com)
* [API Reference](https://docs.moltin.com)

## Development

```bash
git clone https://github.com/moltin/react-demo-store.git
cd react-demo-store
yarn # or npm install
yarn start # or npm start
```

Note: You will want to change the `client_id` inside `src/moltin.js` with your own moltin store credentials.

This demo store uses the Redux "[ducks](https://github.com/erikras/ducks-modular-redux)" approach to bundling reducers and actions.
