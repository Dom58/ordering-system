var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  friendlyName: 'Verify JWT',
  description: 'Verify a JWT token.',
  inputs: {
    req: {
      type: 'ref',
      friendlyName: 'Request',
      description: 'A reference to the request object (req).',
      required: true
    },
    res: {
      type: 'ref',
      friendlyName: 'Response',
      description: 'A reference to the response object (res).',
      required: false
    }
  },
  exits: {
    invalid: {
      description: 'Invalid token or no authentication present.',
    }
  },
  fn: function (inputs, exits, proceed) {
    var req = inputs.req
    var res = inputs.res

    // if (req.header('authorization')) {
    //   // if one exists, attempt to get the header data
    //   var token = req.header('authorization').split('Bearer ')[1]
    //   // if there's nothing after "Bearer", no go
    //   if (!token) return exits.invalid()
    //   // if there is something, attempt to parse it as a JWT token
    //   return jwt.verify(token, process.env.SECRET_JWT_KEY, async function (err, payload) {
    //     if (err || !payload.sub) return exits.invalid()
    //     var user = await Users.findOne(payload.sub)
    //     if (!user) return exits.invalid()
    //     // if it got this far, everything checks out, success
    //     req.user = user
    //     return exits.success(user)
    //   })
    // }
    // return exits.invalid()

    try {
	    const token = req.headers.authorization.split('Bearer ')[1];
	    if (!token || token === '') return res.status(403).json({ status: 403, error: 'FORBIDDEN' });

	    const user = jwt.verify(token, `${process.env.SECRET_JWT_KEY}`, { expiresIn: '24h'});
        req.user = user;
        // console.log('user', req.user);
        // return proceed();
	    // return exits.success(user)
	} 
	catch (error) {
        console.log('Error', error);
	    // return res.status(401).json({ status: 401, error: 'UNAUTHORIZED!' });
    }
  }
}
