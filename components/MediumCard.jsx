import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div>
      <div className="relative h-80 w-80">
        <Image src={img} alt="" fill className="rounded-xl" draggable="false" />
      </div>
      <div>
        <h3 className="text-2xl mt-3">{title}</h3>
      </div>
    </div>
  );
}
export default MediumCard;
