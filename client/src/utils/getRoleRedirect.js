export const getRoleRedirect = (role) => {
  switch (role) {
    case "Provider":
      return "/dashboard/vendor";
    case "Delivery":
      return "/dashboard/delivery";
    default:
      return "/dashboard/user";
  }
};