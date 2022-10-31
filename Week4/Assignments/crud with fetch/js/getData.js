let userData

(async () => {
  const response = await fetch('http://104.248.154.192:3005/person');
  const readData = await response.json();
  userData = readData.data;
})();

export {userData};