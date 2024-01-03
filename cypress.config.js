const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
        fileExists(filePath) {
          // Implementa la lógica para verificar si el archivo existe y devuelve un booleano
          const fs = require('fs');
          return fs.existsSync(filePath);
        },
      })
    },
  },
});
