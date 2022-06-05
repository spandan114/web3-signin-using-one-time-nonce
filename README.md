# Login with Blockchain using one time nonce
In the Ethereum context, signing a message allows us to verify that a piece of data was signed by a specific account, in other terms, it's a way to prove to a smart contract/human that an account approved a message. **Signing a message with a private or public key does not require interacting with the Ethereum network**.

![signmsg](https://user-images.githubusercontent.com/55044734/172062741-17009747-f182-41ef-a78a-1de8319d98d2.jpg)

### Tech stack & packages used 📦

| package                                                             | explain                                                               |
| ------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [React.js](https://reactjs.org/)                                    | For building frontend                                                 |
| [web3.js](https://www.npmjs.com/package/web3)                       | Web3 client (Frontend Next.js).                                       |
| [node.js](https://nodejs.org/en/)                                   | For building API's.                                                   |
| [express.js](https://expressjs.com/)                                | back end web application framework.                                   |
| [Mngodb](https://www.mongodb.com/)                                  | For saving nonce & user details.                                      |               |   
| [hardhat](https://www.npmjs.com/package/hardhat)                    | Ethereum development environment.                                     |   
| [JWT](https://www.jwt.io)                                           | For generate JSON Web Token                                           | 
| [ethereumjs-util](https://www.npmjs.com/package/ethereumjs-util)    | For verify sign message signature                                     | 


## How to run :runner: ?
Backend
```
1) cd server
2) npm i
3) npm start
```
Frontend
```
1) cd client
2) npm i
3) npm start
```
