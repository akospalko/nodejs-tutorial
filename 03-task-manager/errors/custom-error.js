class CustomErrorAPI extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  return newCustomApiError(msg, statusCode);
} 

module.exports = {CustomErrorAPI, createCustomError} 