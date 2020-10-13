const currentDashboard = [];
const currentUser = [];

const getUser = () => currentUser;

const setUser = (userId) => {
  if (getUser().length === 0) {
    currentUser.push(userId);
  } else {
    currentUser.pop();
    currentUser.push(userId);
  }
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
  getDashboard,
  setDashboard,
};
