const currentDashboard = [];
const currentUser = [];

const getUser = () => currentUser;

const setUser = (user) => {
  if (getUser().length === 0) {
    currentUser.push(user);
  } else {
    currentUser.pop();
    currentUser.push(user);
  }
};

const clearUser = () => {
  currentUser.splice(0, currentUser.length);
};

const getDashboard = () => currentDashboard;

const setDashboard = (dashboardId) => {
  if (getDashboard().length === 0) {
    currentDashboard.push(dashboardId);
  } else {
    currentDashboard.pop();
    currentDashboard.push(dashboardId);
  }
};

export default {
  getUser,
  setUser,
  clearUser,
  getDashboard,
  setDashboard,
};
