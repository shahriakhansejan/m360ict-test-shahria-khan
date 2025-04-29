import { Card, Carousel, Descriptions, Image } from "antd";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useParams } from "react-router";
import { useGetSingleProductQuery } from "../../redux/feature/products/productsApi";
import Review from "./Review";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const numberId = Number(id);
  const { data: product, isLoading } = useGetSingleProductQuery(numberId);

  if (isLoading) {
    return <progress className="progress w-full"></progress>;
  }

  return (
    <div className="my-12 px-2">
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-10 items-start md:items-center">
        <h2 className="text-3xl font-bold text-sky-500">
          Detail of {product?.title}
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center mb-4 bg-[#f1f1f1] p-5 rounded gap-6">
        {/* product thumbnail */}
        <Card className="w-full lg:w-1/3" title={product?.title}>
          <p>
            {product?.tags?.map((tag: string, idx: number) => (
              <span
                key={idx}
                className="badge badge-neutral badge-outline mx-2 my-2"
              >
                {tag}
              </span>
            ))}
          </p>
          <Image src={product?.thumbnail} alt={product?.title} />
        </Card>

        {/* product details */}
        <Descriptions
          className="w-full lg:w-2/3 capitalize font-bold"
          bordered
          column={1}
        >
          <Descriptions.Item label="Stock">{product?.stock}</Descriptions.Item>
          <Descriptions.Item label="Category">
            {product?.category}
          </Descriptions.Item>
          <Descriptions.Item label="Brand">{product?.brand}</Descriptions.Item>
          <Descriptions.Item label="Weight">
            {product?.weight} g
          </Descriptions.Item>
          <Descriptions.Item label="Dimensions">
            {product?.dimensions?.width}cm x {product?.dimensions?.height}cm x{" "}
            {product?.dimensions?.depth}cm
          </Descriptions.Item>
          <Descriptions.Item label="Price">${product?.price}</Descriptions.Item>
          <Descriptions.Item label="Discount Percentage">
            {product?.discountPercentage}%
          </Descriptions.Item>
          <Descriptions.Item label="Rating">
            {product?.rating}
          </Descriptions.Item>
        </Descriptions>
      </div>
      <div className="text-[#323232] collapse my-4 border">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-white flex justify-between font-semibold items-center">
          Product Description
          <IoIosArrowDown />
        </div>
        <div className="collapse-content bg-[#f5f5f5]">
          {product?.description}
        </div>
      </div>

      {/* image slider */}
      <Card title={`${product?.title} Gallery`}>
        <Carousel autoplay dots>
          {product?.images?.map((imgUrl: string, idx: number) => (
            <Image key={idx} src={imgUrl} />
          ))}
        </Carousel>
      </Card>
      <div>{product?.reviews && <Review reviews={product?.reviews} />}</div>
    </div>
  );
};

export default ProductDetails;
