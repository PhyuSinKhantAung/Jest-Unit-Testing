module.exports = (inputString) => {
  const match = inputString.match(/^([^-]+)-([^-]+)-v([\d.]+)-([^.]+)\.(.+)$/);
  return match ? { name: `${match[2]}`, version: match[3] } : null;
};
