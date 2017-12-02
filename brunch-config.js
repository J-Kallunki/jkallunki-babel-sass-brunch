exports.config = {
  conventions: { assets: /src\/assets\// },
  sourceMaps: true,

  paths: {
    public: "public",
    watched: ["src", "vendor"]
  },

  files: {
    javascripts: {
      joinTo: {
        // all code from 'vendor/'
        "js/vendor.js": /^vendor/,
        // all code from 'src/'
        "js/main.js": /^src/
      }
    },
    stylesheets: { joinTo: "css/styles.css" }
  },

  stylelint: {
    pattern: "^src[\\/\\\\].*\\.scss?$"
  },

  plugins: {
    sass: {
      mode: "native",
      options: {
        includePaths: ["node_modules/normalize.css"]
      },
      // Set the precision for arithmetic operations.
      precision: 8,
      // To enable embedded source maps, pass the option `sourceMapEmbed`. This is only supported in _native_ mode; Ruby Sass isn't supported.
      sourceMapEmbed: true
    },
    pleeease: {
      sass: false,
      autoprefixer: {
        browsers: ["last 3 versions", "> 1%"]
      },
      filters: { oldIE: false },
      rem: ["16px", { replace: false, atrules: false }],
      pseudoElements: true,
      opacity: true,
      import: false,
      minifier: { preserveHacks: true, removeAllComments: true },
      mqpacker: true,
      sourcemaps: true
    }
  },

  modules: {
    autoRequire: {
      "js/main.js": ["src/js/initialize"]
    }
  }
};
