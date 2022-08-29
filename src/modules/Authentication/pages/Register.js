import React from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { loginPage } from "../../../Redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { registerPage } from "../../../Redux/auth/authSlice";
const LoginContent = styled.div`
  width: 400px;
  position: relative;
  .rotage-page {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: "",
      address: "",
    },
  });
  const onSubmit = async (value) => {
    console.log(value);
    await dispatch(registerPage(value)).then(() => navigate("/auth/login"));
  };
  const onError = () => {
    console.log("không thành công");
  };
  return (
    <LoginContent>
      {error && <p className="text-danger">{error}</p>}
      <h2 className="text-center">Đăng Nhập</h2>
      <form action="" onSubmit={handleSubmit(onSubmit, onError)}>
        <TextField
          type="text"
          id="outlined-basic"
          label="Họ và Tên"
          variant="outlined"
          sx={{ fontSize: "14px", width: "100%", margin: "10px 0" }}
          {...register("name", {
            required: {
              value: true,
              message: "không được bỏ trống ô này",
            },
            minLength: {
              value: 6,
              message: "đm ghi nhiều lên",
            },
          })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          type="text"
          id="outlined-basic"
          label="email"
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
        <TextField
          type="number"
          id="outlined-basic"
          label="số điện thoại"
          variant="outlined"
          sx={{ fontSize: "14px", width: "100%", margin: "10px 0" }}
          {...register("phone", {
            required: {
              value: true,
              message: "không được bỏ trống ô này",
            },
            minLength: {
              value: 11,
              message: "đm ghi nhiều lên",
            },
          })}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />
        <TextField
          type="date"
          id="outlined-basic"
          label="ngày sinh"
          variant="outlined"
          sx={{ fontSize: "14px", width: "100%", margin: "10px 0" }}
          {...register("birthday", {
            required: {
              value: true,
              message: "không được bỏ trống ô này",
            },
            minLength: {
              value: 10,
              message: "đm ghi nhiều lên",
            },
          })}
          error={!!errors.birthday}
          helperText={errors.birthday?.message}
        />
        <TextField
          type="text"
          id="outlined-basic"
          label="gender"
          variant="outlined"
          sx={{ fontSize: "14px", width: "100%", margin: "10px 0" }}
          {...register("gender", {
            required: {
              value: true,
              message: "không được bỏ trống ô này",
            },
          })}
          error={!!errors.gender}
          helperText={errors.gender?.message}
        />
        <button className="btn btn-success px-3 py-2 w-50" type="submit">
          register
        </button>
      </form>
      <button className="rotage-page btn btn-outline-primary px-5 py-2 ">
        Go to login
      </button>
    </LoginContent>
  );
};

export default Register;
