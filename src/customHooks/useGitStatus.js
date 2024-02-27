import { useEffect, useState } from "react";


export default function useGitStatus({ parameter }) {
     const url_endpoint = "https://api.github.com/users/Yeshwanth2003";

     const [gitData, setGitData] = useState(null);

     useEffect(() => {
          let requiredData;
          fetch(url_endpoint, { method: "GET" })
               .then((res) => res.json())
               .then((resData) => {
                    try {
                         requiredData = resData[parameter];
                         setGitData(requiredData);
                    } catch {
                         throw new Error("Invalid Parameter");
                    }
               }, () => {
                    // error reflect
                    requiredData = 0;
                    setGitData(requiredData);
               });
     }, [parameter]);
     return gitData ? parseInt(gitData) : 0;
}