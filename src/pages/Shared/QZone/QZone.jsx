import bg1 from "../../../assets/qZone1.png";
import bg2 from "../../../assets/qZone2.png";
import bg3 from "../../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="bg-secondary mt-3 text-center my-4 py-4">
      <h5>Q-Zone</h5>
      <div className="">
        <img src={bg1} alt="" />
        <img src={bg2} alt="" />
        <img src={bg3} alt="" />
      </div>
    </div>
  );
};

export default QZone;
