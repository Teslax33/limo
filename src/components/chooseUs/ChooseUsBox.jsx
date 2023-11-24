import "./ChooseUs.css";

export default function ChooseUsBox({ title, img, bg }) {
  return (
    <>
      <div className="choose-us-box d-flex flex-column gap-2">
        <div className="choose-us-img w-100 mb-4">
          <div className={`img-wrapper py-4 text-center ${bg}`}>
            <img src={img} alt={title} />
          </div>
        </div>
        <h6 className="choose-us-box-title">{title}</h6>
        <p className="w-75 choose-us-box-des">
          Lorem Lpsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </>
  );
}
