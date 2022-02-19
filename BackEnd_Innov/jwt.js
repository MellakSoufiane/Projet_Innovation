import dayjs from 'dayjs'
import jwt from 'jsonwebtoken'

//To generate a JWT we need to specify the expiration a payload and sign it using our secret
export async function generateJWT({ expiration, timeUnit, secret }) {
  const payload = {
    exp: dayjs().add(expiration, timeUnit).unix(),
    //Other dummy information this can be a user id /role in the future
    k1: 'v1',
  }

  const token = jwt.sign(payload, secret)

  return token
}
