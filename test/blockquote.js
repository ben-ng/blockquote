var tests
  , assert = require('assert')
  , blockquote = require('../lib/blockquote.js');

tests = {
  "preserves normal text (index)": function () {
    var actual = blockquote.index('nothing')
      , expected = 'nothing';

    assert.strictEqual(actual, expected, 'normal text is preserved');
  }

, "preserves normal text (show)": function () {
    var actual = blockquote.show('nothing')
      , expected = 'nothing';

    assert.strictEqual(actual, expected, 'normal text is preserved');
  }

, "blockquote": function () {
    var actual = blockquote.show('a{% blockquote %}something{% endblockquote %}b')
      , expected = 'a<blockquote><p>something</p></blockquote>b';

    assert.strictEqual(actual, expected, 'text is blockquoted');
  }

, "blockquote (shorttag)": function () {
    var actual = blockquote.show('a{%blockquote%}something{%endblockquote%}b')
      , expected = 'a<blockquote><p>something</p></blockquote>b';

    assert.strictEqual(actual, expected, 'text is blockquoted');
  }

, "blockquote author": function () {
    var actual = blockquote.show('a{% blockquote Abraham Lincoln %}something{% endblockquote %}b')
      , expected = 'a<blockquote><p>something</p><footer><strong>Abraham Lincoln</strong></footer></blockquote>b';

    assert.strictEqual(actual, expected, 'text is blockquoted with author');
  }

, "blockquote author (shorttag)": function () {
    var actual = blockquote.show('a{%blockquote Abraham Lincoln %}something{%endblockquote%}b')
      , expected = 'a<blockquote><p>something</p><footer><strong>Abraham Lincoln</strong></footer></blockquote>b';

    assert.strictEqual(actual, expected, 'text is blockquoted with author');
  }

, "blockquote author, source": function () {
    var actual = blockquote.show('a{% blockquote Douglas Adams, Hitchiker\'s Guide To The Galaxy %}something{% endblockquote %}b')
      , expected = 'a<blockquote><p>something</p><footer><strong>Douglas Adams</strong><cite>Hitchiker\'s Guide To The Galaxy</cite></footer></blockquote>b';

    assert.strictEqual(actual, expected, 'text is blockquoted with author and citation');
  }

, "blockquote author, source (shorttag)": function () {
    var actual = blockquote.show('a{%blockquote Douglas Adams, Hitchiker\'s Guide To The Galaxy %}something{%endblockquote%}b')
      , expected = 'a<blockquote><p>something</p><footer><strong>Douglas Adams</strong><cite>Hitchiker\'s Guide To The Galaxy</cite></footer></blockquote>b';

    assert.strictEqual(actual, expected, 'text is blockquoted with author and citation');
  }

, "blockquote author link title": function () {
    var actual = blockquote.show('a{% blockquote Douglas Adams <a href="http://intergalactic.federation.edu/pizza-offer">http://intergalactic.federation.edu/pizza-offer</a> Pizza Offer %}something{% endblockquote %}b')
      , expected = 'a<blockquote><p>something</p><footer><strong>Douglas Adams</strong> <cite><a href="http://intergalactic.federation.edu/pizza-offer" target="_blank">Pizza Offer</a></cite></footer></blockquote>b';

    assert.strictEqual(actual, expected, 'text is blockquoted with author and citation with link');
  }

, "blockquote author link title (shorttag)": function () {
    var actual = blockquote.show('a{%blockquote Douglas Adams <a href="http://intergalactic.federation.edu/pizza-offer">http://intergalactic.federation.edu/pizza-offer</a> Pizza Offer %}something{%endblockquote%}b')
      , expected = 'a<blockquote><p>something</p><footer><strong>Douglas Adams</strong> <cite><a href="http://intergalactic.federation.edu/pizza-offer" target="_blank">Pizza Offer</a></cite></footer></blockquote>b';

    assert.strictEqual(actual, expected, 'text is blockquoted with author and citation with link');
  }
};

module.exports = tests;
