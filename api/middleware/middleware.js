const registerValidation = (req, res, next) => {
    const { username, password, phoneNumber } = req.body
    
    if (!username || !password || !phoneNumber) {

        res.status(400).json({
            message: "phone number, username and password required",
        })

    } else {
        next()
    }
}

const loginValidation = (req, res, next) => {
  const { username, password } = req.body

  if (!username || !password ) {
    res.status(400).json({
      message: 'username and password required',
    })
  } else {
    next()
  }
}

module.exports = {
    registerValidation,
    loginValidation
}