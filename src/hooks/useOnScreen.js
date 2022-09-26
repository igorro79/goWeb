// import { useState, useEffect } from "react";

// export const useOnScreen = (ref) => {
//   const [isOnScreen, setIsOnScreen] = useState(false);
//   const observer = new IntersectionObserver((item) => console.log(item));

//   useEffect(() => {
//     observer.observe(ref.current);
//     return () => observer.disconnect();
//   });

//   return isOnScreen;
// };
