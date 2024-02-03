import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Paper,
  useTheme,
  CircularProgress,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useAuth } from "../../Contexts/Auth";
import { useNavigate } from "react-router-dom";

interface LoginFormInputs {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setLoading(true); // Start loading
    try {
      const status = await login(data.username, data.password);
      if (status === 200) {
        navigate("/admin-dashboard/news");
      } else {
        setLoginError("Invalid username or password.");
        setLoading(false);
      }
    } catch (error) {
      setLoginError("Login failed. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"100vh"}
    >
      <Box
        p={5}
        component={Paper}
        elevation={2}
        bgcolor={theme.palette.warning.main}
      >
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <Typography color={theme.palette.primary.main} mb={5} variant={"h2"}>
            Sign In
          </Typography>
          <Typography variant={"body2"}>Username</Typography>
          <TextField
            sx={{
              backgroundColor: theme.palette.background.default,
              input: { color: theme.palette.primary.main }, // styles the input text
              label: { color: theme.palette.primary.main },
              "& .MuiFormHelperText-root": {
                backgroundColor: "transparent",
              },
            }}
            margin="normal"
            required
            fullWidth
            id="username"
            autoComplete="username"
            autoFocus
            {...register("username", { required: "Username required" })}
            error={Boolean(errors.username)}
            helperText={errors.username?.message}
          />
          <Typography variant={"body2"}>Password</Typography>
          <TextField
            sx={{
              backgroundColor: theme.palette.background.default,
              input: { color: theme.palette.primary.main }, // styles the input text
              label: { color: theme.palette.primary.main },
              "& .MuiFormHelperText-root": {
                backgroundColor: "transparent",
              },
            }}
            margin="normal"
            required
            fullWidth
            // name="password"
            // label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password", { required: "Password required" })}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 5,
              borderRadius: "30px",

              position: "relative",
            }}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} style={{ color: "white" }} />
            ) : (
              <Typography
                fontWeight={600}
                color={theme.palette.warning.main}
                variant="body2"
                mx={4}
                my={0.5}
              >
                Sign In
              </Typography>
            )}
          </Button>
        </Box>
        {loginError && (
          <Typography
            color={theme.palette.background.default}
            variant={"body2"}
          >
            {loginError}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Login;
