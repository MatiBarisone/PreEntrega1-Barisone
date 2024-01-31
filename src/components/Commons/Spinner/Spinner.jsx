import { PuffLoader } from "react-spinners";
import "./Spinner.css";
const override = {
  display: "block",
  margin: "auto",
  borderColor: "#373737",
};

function Spinner({isLoading}) {
  return (
    <div className="containerPuffLoader">
      <PuffLoader
        color="#373737"
        loading={isLoading}
        cssOverride={override}
        size={50}
        arial-lable="Loading PuffLoader"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
