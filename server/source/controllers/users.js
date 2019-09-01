import UserModel from '../models/user';

/**
 * Get list of users
 * @param {Object} req global http request object
 * @param {Object} res global http response object
 * @param {Function} next express next function
 * @return {Object}
 */
export async function getUsers(req, res, next) {
  let users;

  try {
    users = await UserModel.find();
  } catch (error) {
    next(error);
  }

  return res
    .status(200)
    .json(users);
}

/**
 * Create new user with given params
 * @param {Object} req global http request object
 * @param {Object} req.body object with request body parameters
 * @param {string} req.body.login user login
 * @param {string} req.body.password user password
 * @param {Object} res global http response object
 * @param {Function} next express next function
 * @return {Object}
 */
export async function createUser(req, res, next) {
  const { login , password } = req.body;
  let user;

  try {
    user = await UserModel.create({ login, password });
  } catch (error) {
    next(error);
  }

  return res
    .status(200)
    .json(user);
}

/**
 * Get user parameters by unique identificator
 * @param {Object} req global http request object
 * @param {Object} req.query object with request query parameters
 * @param {string} req.query.id unique identificator of user
 * @param {Object} res global http response object
 * @param {Function} next express next function
 * @return {Object}
 */
export async function getUserById(req, res, next) {
  const { id } = req.query;
  let user;

  try {
    user = await UserModel.findOne({ _id: id });
  } catch (error) {
    next(error);
  }

  return res
    .status(200)
    .json(user);
}

/**
 * Find user by unique identificator and update his parametes
 * @param {Object} req global http request object
 * @param {Object} req.body object with request body parameters
 * @param {string} req.body.login user login
 * @param {Object} req.query object with request query parameters
 * @param {string} req.query.id unique identificator of user
 * @param {Object} res global http response object
 * @param {Function} next express next function
 * @return {Object}
 */
export async function updateUserById(req, res, next) {
  const { id } = req.query;
  const { login } = req.body;
  let user;

  try {
    user = await UserModel.findOneAndUpdate({ _id: id }, { login });
  } catch (error) {
    next(error);
  }

  return res
    .status(200)
    .json(user);
}

/**
 * Find user by unique identificator and delete
 * @param {Object} req global http request object
 * @param {Object} req.body object with request body parameters
 * @param {string} req.body.login user login
 * @param {Object} req.query object with request query parameters
 * @param {string} req.query.id unique identificator of user
 * @param {Object} res global http response object
 * @param {Function} next express next function
 * @return {Object}
 */
export async function deleteUserById(req, res, next) {
  const { id } = req.query;
  let user;

  try {
    user = await UserModel.findOneAndDelete({ _id: id });
  } catch (error) {
    next(error);
  }

  return res
    .status(200)
    .json(user);
}