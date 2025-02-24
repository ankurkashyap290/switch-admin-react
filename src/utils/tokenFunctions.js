import jwtDecode from 'jwt-decode';
import { siteConfig } from '../configs/app.config';

export function getRole() {
  let role = null;
  const token = localStorage.getItem(`${siteConfig.tokenSalt}-token`) || null;
  if (token && token !== 'null') {
    const parsedToken = decodeToken(token);
    role = parsedToken.role;
  }
  return role;
}

export function getToken() {
  return localStorage.getItem(`${siteConfig.tokenSalt}-token`) || null;
}

export function setToken(token) {
  return localStorage.setItem(`${siteConfig.tokenSalt}-token`, token || null);
}

export function decodeToken(token) {
  if (token) {
    return jwtDecode(token);
  }

  return null;
}

export function validateRoles(roles) {
  roles = roles || [];
  const role = getRole();
  if (role && roles.includes(role)) {
    return true;
  } else {
    return false;
  }
}
