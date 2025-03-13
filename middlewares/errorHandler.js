const {constants} = require("../constants");
const errorHandler = (err,req,res,next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch(statusCode){
    case constants.VALIDATION_ERROR:
      res.json({
        title :"validation Failed",
        message : err.message,
        stackTree : err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title :"Not Found error",
        message : err.message,
        stackTree : err.stack,
        });
        break;
    case constants.UNAUTHORIZED:
      res.json({
        title :"Unauthorized Access",
        message : err.message,
        stackTree : err.stack,
      });
      break;
      case constants.FORBIDDEN:
      res.json({
        title :"Forbidden",
        message : err.message,
        stackTree : err.stack,
      });
      break;
      case constants.SERVER_ERROR:
      res.json({
        title :"Server Error Found",
        message : err.message,
        stackTree : err.stack,
      });
      break;
      default:
        console.log("No Error Found!, All good")
      break;
  }
}

module.exports = errorHandler