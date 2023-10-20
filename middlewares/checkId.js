const ApiError = require("../utils/apiError");
const { Shop, User, Product } = require("../models");

const checkId = (db) => {
  return async (req, res, next) => {
    try {
      const find = await db.findByPk(req.params.id);
      if (!find) {
        next(new ApiError(`id does not exist`, 400));
      }
      next();
    } catch (err) {
      next(new ApiError(err.message, 500));
    }
  };
};

module.exports = checkId;
