import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import login from "../Images/image.jpg";
import logo from "../Images/quibtsuite.png";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.includes("@") || !value.includes(".")) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (!emailError && !passwordError) {
      console.log("form submitted successfully");
      navigate("/layout");
    } else {
      alert("please fill the details");
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <Card sx={{ m: { xs: 3, lg: 10, md: 10 }, pt: 8, pb: 8 }} elevation={10}>
        <Box>
          <Container maxWidth="lg">
            <Box sx={{ pt: 1 }}>
              <img src={logo}></img>
            </Box>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                  <Box sx={{ mt: 9 }}>
                    <Typography
                      sx={{
                        fontSize: "45px",
                        fontWeight: 700,
                      }}
                    >
                      Log In
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "22px",
                        fontWeight: 500,
                        opacity: 0.7,
                        color: "gray",
                        fontFamily: "cursive",
                        mt: 1,
                      }}
                    >
                      Log in here to enter in the Admin mode{" "}
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 8 }}>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        padding: "0px",
                        width: "100%",
                      }}
                    >
                      <TextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        error={!!emailError}
                        helperText={emailError}
                        style={{ width: "100%" }}
                        required
                      />
                      <Box sx={{ mt: 5, width: "100%" }}>
                        <TextField
                          label="Password"
                          variant="outlined"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={handlePasswordChange}
                          error={!!passwordError}
                          helperText={passwordError}
                          style={{ marginBottom: "20px", width: "100%" }}
                          required
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handleTogglePasswordVisibility}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                      <Box sx={{ width: "100%", mt: 4 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleLogin}
                          sx={{ width: "100%", p: 2 }}
                        >
                          <Typography
                            sx={{ textTransform: "none", fontSize: "20px" }}
                          >
                            Log In
                          </Typography>
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Box sx={{ mt: 4, ml: 0, pl: 5 }}>
                    <img
                      src={login}
                      style={{ width: "100%", height: "auto" }}
                    ></img>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Card>
    </>
  );
};
{
  /* <Grid item xs={12} md={4.6} lg={4.6}> */
}
// {/* <Box
// sx={{
//   ml: { xs: 0, md: 22 },
//   pl: { xs: 0 },
//   md: 5,
//   mt: 9,
// }}
// >
// <h1 style={{ fontSize: "60px" }}>Sign In</h1>
// <p
//   style={{
//     opacity: 0.7,
//     marginTop: "-25px",
//     fontSize: "x-large",
//   }}
// >
//   Please fill your detail to access your account.
// </p>
// <Box sx={{ width: { xs: "100%", md: "100%" }, mt: 9 }}>
//   <Box sx={{ mt: 1 }}>
//     <label style={{ fontWeight: 600 }} for="email">
//       Email
//     </label>
//     <TextField
//       // label="Email"
//       placeholder="Email"
//       variant="outlined"
//       fullWidth
//       sx={{
//         mt: 2,
//         // height: "15px",
//       }}
//       value={email}
//       onChange={handleEmailChange}
//       error={!!emailError}
//       helperText={emailError}
//       InputProps={{
//         endAdornment: (
//           <InputAdornment position="end">
//             {/* {email && (
//             <IconButton
//               edge="end"
//               onClick={handleClear}
//               sx={{
//                 border: "1px solid black",
//                 opacity: 0.5,
//                 mr: 1,
//               }}
//             >
//               <ClearIcon sx={{ width: 10, height: 10 }} />
//             </IconButton>
//           )} */}
//           </InputAdornment>
//         ),
//       }}
//     />
//   </Box>
//   <Box sx={{ mt: 5 }}>
//     <label style={{ fontWeight: 600 }} for="password">
//       Password :
//     </label>
//     <TextField
//       value={password}
//       onChange={handlePasswordChange}
//       error={!!passwordError}
//       helperText={passwordError}
//       type={showPassword ? "text" : "password"}
//       placeholder="password"
//       fullWidth
//       sx={{ mt: 1, borderRadius: 5 }}
//       InputProps={{
//         endAdornment: (
//           <InputAdornment position="end">
//             <IconButton
//               onClick={handleTogglePasswordVisibility}
//               edge="end"
//             >
//               {showPassword ? (
//                 <Visibility />
//               ) : (
//                 <VisibilityOff />
//               )}
//             </IconButton>
//           </InputAdornment>
//         ),
//       }}
//     />
//   </Box>
//   <Grid container spacing={2} sx={{ mt: 2 }}>
//     <Grid
//       item
//       xs={6}
//       sx={{ display: "flex", flexDirection: "column" }}
//     >
//       <FormControlLabel
//         control={
//           <Checkbox
//             checked={rememberMe}
//             onChange={() => setRememberMe(!rememberMe)}
//           />
//         }
//         label="Remember Me"
//       />
//     </Grid>
//     <Grid item xs={6}>
//       <Link
//         style={{ textDecoration: "none" }}
//         to="/forgot password"
//       >
//         <p
//           style={{
//             color: "blue",
//             textDecoration: "none",
//             textAlign: "end",
//             marginTop: "12px",
//             // textUnderline: "none",
//           }}
//         >
//           Forgot password?
//         </p>
//       </Link>
//     </Grid>
//   </Grid>
//   {/* <Link to="/dashboard"> */}
//   <button
//     style={{
//       width: "100%",
//       height: "70px",
//       color: "white",
//       fontSize: "15px",

//       backgroundColor: "#11409B",
//       borderRadius: "7px",
//       border: "none",
//       marginTop: "20px",
//     }}
//     onClick={handleSignIn}
//   >
//     Sign In
//   </button>
//   {/* </Link> */}

//   <p
//     style={{
//       textAlign: "center",
//       marginTop: "30px",
//       fontWeight: 500,
//     }}
//   >
//     Don't have an account?
//     <span style={{ color: "#11409B", fontWeight: 500 }}>
//       <Link
//         style={{
//           color: "blue",
//           textDecoration: "none",
//           marginLeft: "5px",
//         }}
//         to="/signup"
//       >
//         Sign up
//       </Link>
//     </span>
//   </p>
// </Box>
// </Box> */}
{
  /* </Grid> */
}
