import React from "react";
import { Box, Card } from "@mui/material";

const List = ({ users }) => {
  return (
    <>
      {users.length > 0 && (
        <Box>
          <Card sx={{ width: 600, mt: 3 }}>
            <ul
              style={{
                padding: 0,
                listStyleType: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {users.map((i) => (
                <li
                  key={i.key}
                  style={{
                    border: "1px solid #ccc",
                    margin: "0.5rem 0",
                    padding: "0.5rem",
                    width: "90%",
                  }}
                >
                  {i.input1} ({i.input2} years)
                </li>
              ))}
            </ul>
          </Card>
        </Box>
      )}
    </>
  );
};

export default List;
