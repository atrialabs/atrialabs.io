/** @type {import('next').NextConfig} */

const withMarkdoc = require('@markdoc/next.js');

module.exports = withMarkdoc(/* options */)({
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx']
});
