export const useGoSite = () => {
    const goTo = (value) => {
        window.location.href = value;
      };
      return goTo;
  };