import cookie from "js-cookie";
import faker from "faker";

const getUserName = () => {
  const cookieName = cookie.get("name");

  if (cookieName) {
    return cookieName;
  }

  const newName = faker.internet.userName();

  cookie.set("name", newName);

  return newName;
};

export default getUserName;
