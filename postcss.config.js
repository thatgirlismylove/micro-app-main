import prefixSelector from 'postcss-prefix-selector';

export default {
  plugins: [
    prefixSelector({
      prefix: '.main-app',
      transform: function (prefix, selector, prefixedSelector) {
        // 只为类选择器添加前缀
        if (selector.startsWith('.')) {
          return prefixedSelector;
        }
        return selector;
      }
    })
  ]
};
