/**
* Generates block quote markup in all scenarios
*/
(function () {
  var blockquote = function (buffer) {
    //Find a pullquote style
    var match
      , matches = [
          {
            regex: /{% ?blockquote ?%}((.|\s)*?){% ?endblockquote ?%}/g
          , replacement: '<blockquote><p>$1</p></blockquote>'
          }
          // Author + Citation
        , {
            regex: /{% ?blockquote ([^{}]+?), ([^{}]+?) %}((.|\s)*?){% ?endblockquote ?%}/g
          , replacement: '<blockquote><p>$3</p><footer><strong>$1</strong><cite>$2</cite></footer></blockquote>'
          }
          // Author + Named link
          // URL Regex: http://blog.mattheworiordan.com/post/13174566389/url-regular-expression-for-links-with-or-without-the
        , {
            regex: /{% ?blockquote ([^{}]+?) ((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?) ([^{}]+?) %}((.|\s)*?){% ?endblockquote ?%}/g
          , replacement: '<blockquote><p>$7</p><footer><strong>$1</strong><cite><a href="$2">$6</a></cite></footer></blockquote>'
          }
          // Author
        , {
            regex: /{% ?blockquote ([^{}]+?) %}((.|\s)*?){% ?endblockquote ?%}/g
          , replacement: '<blockquote><p>$2</p><footer><strong>$1</strong></footer></blockquote>'
          }
        ];

    for(var key in matches) {
      buffer = buffer.replace(matches[key].regex, matches[key].replacement);
    }

    return buffer;
  };

  exports.index = blockquote;
  exports.show = blockquote;
}());