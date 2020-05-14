// Example file linted using the "pat/node" config.
const fs = require('fs').promises

async function openAndClose() {
  let filehandle = null

  try {
    filehandle = await fs.open('thefile.txt', 'r')
  } finally {
    if (filehandle !== undefined) {
      await filehandle.close()
    }
  }
}

module.exports = { openAndClose }
