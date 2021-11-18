function getAuth(req, res, next) {
  const user = req.user;
  if (!user) {
    res.status(401).send(`
            <h1>Please log in to view this page</h1>
            <a href="/">Log in</a>
          `);
  } else {
    next();
  }
}

module.exports = getAuth;
