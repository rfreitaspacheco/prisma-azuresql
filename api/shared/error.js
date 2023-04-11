module.exports = function (status, message) {
  return {
    status: status,
    body: message,
  }
}