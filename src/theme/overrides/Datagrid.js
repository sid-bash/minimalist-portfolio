export default function DataGrid() {
  return {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 0,
          borderRadius: 0,
          "& .MuiDataGrid-columnHeader": {
            padding: "0 15px",
            display: "flex",
            alignItems: "center",
            "&:focus, &:focus-within": {
              outline: "none !important", // Disable focus outline
            },
            "&:active": {
              border: "none !important", // Disable border when clicked
            },
          },
          "& .MuiDataGrid-row": {
            borderBottom: "1px solid rgba(241, 243, 244, 1)",
            width: "100%",
            "& .MuiDataGrid-cell": {
              padding: "5px 15px",
              borderBottom: 0,
              display: "flex",
              alignItems: "center",
            },
            // disable row / cell selection
            "&:hover": {
              backgroundColor: "transparent",
            },
            "&.Mui-selected": {
              backgroundColor: "transparent !important",
            },
            "&.Mui-selected:hover": {
              backgroundColor: "transparent",
            },
            "&:focus, &:focus-within": {
              outline: "none !important",
            },
          },
          "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
          // till here
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "& .center-align--header": {
            "& .MuiDataGrid-iconButtonContainer": {
              visibility: "visible",
              width: "0 !important",
            },
          },
          "& .last-column--header": {
            paddingRight: 40,
          },
          "& .last-column--cell": {
            paddingRight: "40px !important",
          },
        },
      },
    },
  };
}
