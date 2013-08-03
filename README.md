[![Build Status](https://travis-ci.org/ben-ng/blockquote.png)](https://travis-ci.org/ben-ng/blockquote)

#Install
```
# In your scotch directory:
npm install blockquote

# Now add it to your config:
vim config/environment.js
```

##Sample Configuration
```js
var config = {
  port: 80,
  model: {
    defaultAdapter: 'mongo'
  },
  db: {
    mongo: {
      dbname: 'blog'
    }
  },
  plugins: {
    formatters: [
      'blockquote'
    ]
  }
};

module.exports = config;
```
