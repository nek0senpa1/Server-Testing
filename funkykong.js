const deebee = require('./databee/dataBeeConfig');

module.exports = {
  put,
  pull,
  getAll,
};

async function put(thing) {
    const [id] = await deebee('widgets').insert(thing);
  
    return deebee('widgets')
      .where({ id: id })
      .first();
}

async function pull(thing) {
    const bob = await deebee('widgets').where({id: thing}).delete();

    return deebee('widgets');

    
  
}

function getAll() {
  return deebee('widgets');
}

