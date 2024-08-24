import Award from "../../../assets/Home/award.png";
import clutch from "../../../assets/Home/clutch.png";

const Plaques = () => {
  return (
    <div className="bg-white py-20 text-black p">
      <div className="flex justify-evenly mx-auto  max-w-[1200px] pb-20 border-b">
        {/* Avatars */}
        <div className="flex items-center space-x-4">
          <div className="flex -space-x-4 ">
            <div className="avatar border-none ">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar border-none ">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar border-none ">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar border-none ">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
          <p className="text-lg">Meet Our Expert {">"}</p>
        </div>
        {/* Awards */}
        <div className="flex items-center">
          <img src={Award} alt="" />
          <div className="ml-5 ">
            <p className="font-semibold">Award Winning Agency</p>
            <p>
              <span className="font-bold mr-1 text-lg">3500+</span>Active
              Clients
            </p>
          </div>
        </div>
        {/* Review */}
        <div>
          <div className="flex">
            <p className="mr-5">Review On</p>
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <div className="flex">
            <img className="mr-5" src={clutch} alt="" />
            <p>1500+ Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plaques;
