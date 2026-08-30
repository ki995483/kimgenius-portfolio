import Image from "next/image";

type XYZCoreProps = {
  size?: number;
  priority?: boolean;
};

export default function XYZCore({
  size = 420,
  priority = false,
}: XYZCoreProps) {
  return (
    <div
      className="xyz-core"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <Image
        src="/XYZ_Official_Icon.png"
        alt="XYZ Official Icon"
        width={size}
        height={size}
        priority={priority}
        className="xyz-core-image"
      />
    </div>
  );
}