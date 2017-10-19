# messenger-user-profile

[![build status](https://img.shields.io/travis/andreaspizsa/messenger-user-profile.svg)](https://travis-ci.org/andreaspizsa/messenger-user-profile)
[![code coverage](https://img.shields.io/codecov/c/github/andreaspizsa/messenger-user-profile.svg)](https://codecov.io/gh/andreaspizsa/messenger-user-profile)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/andreaspizsa/messenger-user-profile.svg)](LICENSE)

> `messenger-core` plugin to that loads the sending user's Messenger Profile


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install messenger-user-profile
```

[yarn][]:

```sh
yarn add messenger-user-profile
```


## Usage

```js
const MessengerUserProfile = require('messenger-user-profile');

const messengerUserProfile = new MessengerUserProfile();

console.log(messengerUserProfile.renderName());
// script
```


## Contributors

| Name              | Website                           |
| ----------------- | --------------------------------- |
| **Andreas Pizsa** | <https://github.com/AndreasPizsa> |


## License

[MIT](LICENSE) © [Andreas Pizsa](https://github.com/AndreasPizsa)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
