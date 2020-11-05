import jwt_decode from 'jwt-decode';

export const decodeUser = (response) => {
  // Decode token
  const token = jwt_decode(response);
  // let token to variable data
  let data = token;
  data = {
    id: data.sub,
    email: data.email,
  };
  return data;
};
