import { Form, useActionData, useNavigation } from "react-router-dom";
import styles from "./Login.module.scss";
import Button from "../ui/button/Button";

const Login: React.FC<{}> = () => {
  const actionData = useActionData() as { error: string };
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      {actionData && actionData.error ? <p>{actionData.error}</p> : null}
      <Form action="/authenticate/login" method="post" className={styles.form}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          autoComplete="off"
        />
        <div className={styles.actions}>
          <Button>{isSubmitting ? "Logging in.." : "Login"}</Button>
        </div>
      </Form>
    </>
  );
};

export default Login;
