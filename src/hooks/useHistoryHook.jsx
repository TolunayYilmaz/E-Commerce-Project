import { useHistory } from "react-router-dom";

export const useHistoryHook = () => {
    const history = useHistory();
    
    const goToPage = (value) => {
        history.push(value);
      };
      return goToPage;
  };