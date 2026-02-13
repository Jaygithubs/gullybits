export const getRoleRedirect = (role) => {
  switch (role) {
    case "Provider":
      return "/dashboard/vendor";
    case "Delivery":
      return "/dashboard/delivery";
    case "Customer":
      return "/";
    case "Admin":
      return "/dashboard/admin";
    default:
      return "/dashboard";
  }
};