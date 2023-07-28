import { Hearts } from "react-loader-spinner";

export default function loadingSpinner() {
  return (
    <Hearts
      height="30"
      width="60"
      color="#FFF"
      ariaLabel="hearts-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
