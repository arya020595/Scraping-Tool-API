const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    const errors = err.inner.map((e) => ({ [e.path]: e.message }));
    res.status(422).json({ errors });
  }
};

module.exports = validate;
