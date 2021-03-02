export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

export const classCreate = (newClass) => {
  return({ type:CREATE, payload:newClass });
}

export const classUpdate = (updateInfo) => {
  return({ type:UPDATE, payload:updateInfo  });
}

export const classDelete = (classId) => {
  return({ type:DELETE, payload:classId });
}