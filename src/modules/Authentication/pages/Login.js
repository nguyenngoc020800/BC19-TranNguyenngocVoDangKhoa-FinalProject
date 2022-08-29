import React from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { loginPage } from "../../../Redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
const LoginContent = styled.div`
  width: 400px;
  position: relative;
  .rotage-page {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.auth);
  console.log("user", user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  });
  const onSubmit = (value) => {
    console.log("submit thành công", value);
    dispatch(loginPage(value));
  };
  const onError = (value) => {
    console.log("submit không thành công", value);
  };
  if (user && !error) {
    navigate("/");
    return;
  }
  return (
    <LoginContent>
      {error && <p className="text-danger">{error}</p>}
      <h2 className="text-center">Đăng Nhập</h2>
      <form action="" onSubmit={handleSubmit(onSubmit, onError)}>
        <TextField
          type="email"
          id="outlined-basic"
          label="Tài Khoản"
          variant="outlined"
          sx={{ fontSize: "14px", width: "100%", margin: "10px 0" }}
          {...register("email", {
            required: {
              value: true,
              message: "không được bỏ trống ô này",
            },
            minLength: {
              value: 10,
              message: "đm ghi nhiều lên",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          type="password"
          sx={{ fontSize: "14px", width: "100%", margin: "20px 0" }}
          id="outlined-basic"
          label="Mật khẩu"
          variant="outlined"
          {...register("password", {
            required: {
              value: true,
              message: "điền vào đây đi em",
            },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <button className="btn btn-success px-3 py-2 w-50" type="submit">
          login
        </button>
      </form>
      <button className="rotage-page btn btn-outline-primary px-5 py-2 ">
        Go to register
      </button>
    </LoginContent>
  );
};

export default Login;
