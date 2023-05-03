/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
*
* no response value expected for this operation
* */
const getPet = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  getPet,
};
