import { AuthLayout } from "@/components/layouts/AuthLayout"

export default {
  path: "/",
  element: <AuthLayout />,
  children: [
    {
      index: true,
      path: "register",
      element: <div>Register</div>,
    },
  ],
}
