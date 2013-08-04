[![Build Status](https://travis-ci.org/ben-ng/blockquote.png)](https://travis-ci.org/ben-ng/blockquote)

#Syntax
We use the [Octopress syntax](http://octopress.org/docs/plugins/blockquote) for blockquotes.

```md
{% blockquote [author[, source]] [link] [source_link_title] %}
Quote string
{% endblockquote %}
```

## Examples

### Blockquote Author
```md
{% blockquote Abraham Lincoln %}
something
{% endblockquote %}
```

### Blockquote Author + Citation
```md
{% blockquote Douglas Adams, Hitchiker\'s Guide To The Galaxy %}
something
{% endblockquote %}
```

### Blockquote Author + Linked Citation
```md
{% blockquote Douglas Adams http://intergalactic.federation.edu/pizza-offer Pizza Offer %}
something
{% endblockquote %}
```

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

##Gotchas

Because this module is written to work with Scotch, it expects links to be converted to HTML as input. For this reason, it actually looks for linked citations in this format:

```md
{% blockquote Douglas Adams <a href="http://intergalactic.federation.edu/pizza-offer">http://intergalactic.federation.edu/pizza-offer</a> Pizza Offer %}
something
{% endblockquote %}
```

If you're writing a post, you don't need to insert links as HTML because Scotch will do that for you before processing the output with this module.
