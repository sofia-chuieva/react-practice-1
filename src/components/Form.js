import React, { useState } from "react";
import { Card, CardContent, TextField, Button, Box } from "@mui/material";

const Form = ({ handleUsers }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleInput1 = (e) => {
    setName(e.target.value);
  };

  const handleInput2 = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    handleUsers(name, age);
    setName("");
    setAge("");
  };

  return (
    <>
      <Box
        mt={5}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Card style={{ width: 600, height: 250 }}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height="100%"
              >
                <TextField
                  label="Input 1"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={name}
                  onChange={handleInput1}
                />
                <TextField
                  label="Input 2"
                  type="number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={age}
                  onChange={handleInput2}
                />
                <Button
                  sx={{ mt: 2 }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Submit
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Form;
