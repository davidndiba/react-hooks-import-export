test("Test passing", () => {
  return new Promise((resolve, reject) => {
    resolve(true);
    reject(false);
  });
});
