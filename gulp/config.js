module.exports = {
  browserify: {
    bundleConfig: {
      entries: './app/assets/javascripts/main.js',
      dest: './app/assets/javascripts/',
      outputName: 'bundle.js',
      extensions: ['.js', '.jsx']
    }
  }
};
