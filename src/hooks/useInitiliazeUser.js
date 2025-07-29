// import { useEffect, useState } from "react";
// import useUserStore from "@/stores/userStore";
// import { jwtDecode } from "jwt-decode";

// const useInitializeUser = () => {
//   const setUser = useUserStore((state) => state.setUser);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setLoading(false);
//       return;
//     }

//     try {
//       const decoded = jwtDecode(token);
//       console.log("Decoded token:", decoded);

//       const currentTime = Date.now() / 1000;
//       if (decoded.exp && decoded.exp < currentTime) {
//         localStorage.removeItem("token");
//         window.location.href = "/login";
//         return;
//       }
//       setUser({
//         id: decoded.system_user_id,
//         email: decoded.system_user_email,
//         company_id: decoded.system_company_id,
//         serviceAccess: decoded.servicePermissions,
//         featureAccess: decoded.accessPermissions,
//       });
//     } catch (err) {
//       localStorage.removeItem("token");
//     } finally {
//       setLoading(false);
//     }
//   }, [setUser]);

//   return loading;
// };

// export default useInitializeUser;
