/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* List API
*
* no response value expected for this operation
* */
const rootGET = () => new Promise(
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
  rootGET,
};
