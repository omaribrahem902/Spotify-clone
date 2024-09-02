import { Navigate, useNavigate } from "react-router-dom";
const Albumitem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(`/album/${id}`)}
        className="min-w-[180px] cursor-pointer py-2 px-2 hover:bg-[#343434]"
      >
        <img className="w-[200px] rounded" src={image} alt="" />
        <h2 className="my-2 font-bold flex">{name}</h2>
        <p className="text-slate-300 text-xs">{desc}</p>
      </div>
    </>
  );
};

export default Albumitem;
