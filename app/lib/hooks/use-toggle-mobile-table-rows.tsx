import { useState } from "react";

export const useToggleMobileTableRows = () => {
  const [toggledRows, setToggledRows] = useState<Record<string, boolean>>({});

  const toggleRow = (id: string | number) => {
    setToggledRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const setRowState = (id: string | number, state: boolean) => {
    setToggledRows((prev) => ({
      ...prev,
      [id]: state,
    }));
  };

  const resetAll = () => {
    setToggledRows({});
  };

  return {
    toggledRows,
    toggleRow,
    setRowState,
    resetAll,
  };
};
