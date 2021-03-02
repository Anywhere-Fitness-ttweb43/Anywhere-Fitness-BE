export const CREATE = 'CREATE';
export const CREATE = 'UPDATE';
export const CREATE = 'DELETE';

export const classCreate = (classInfo) => {
  return({ type:CREATE, payload:classInfo });
}

export const classUpdate = (classInfo) => {
  return({ type:UPDATE, payload:classInfo  });
}

export const classDelete = (classInfo) => {
  return({ type:DELETE, payload:classInfo });
}