/* eslint-disable no-unused-vars */
import { useGlobalContext } from "./context";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return <div>Home</div>;
};
export default Home;
