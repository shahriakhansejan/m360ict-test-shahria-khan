import React, { useState } from "react";
import { useGetProductsQuery } from "../redux/feature/products/productsApi";
import { Table, Space } from "antd";
import { Link } from "react-router";
import { FaRegEye } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const { Column } = Table;

const Products: React.FC = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const skip = (page - 1) * pageSize;

  const { data: productsData, isLoading } = useGetProductsQuery({
    limit: pageSize,
    skip,
  });

  if (isLoading) {
    return <progress className="progress w-full"></progress>;
  }

  return (
    <div className="p-5 my-6">
      <Table
        dataSource={productsData?.products}
        rowKey="id"
        bordered
        className="productTable"
        pagination={{
          current: page,
          pageSize,
          total: productsData?.total,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20"],
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
      >
        <Column title="Id" dataIndex="id" key="id" />
        <Column
          title="Image"
          dataIndex="thumbnail"
          key="thumbnail"
          render={(thumbnail: string) => (
            <img
              src={thumbnail}
              alt="Product"
              style={{
                width: 50,
                height: 50,
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          )}
        />
        <Column title="Title" dataIndex="title" key="title" />
        <Column
          title="Price"
          dataIndex="price"
          key="price"
          render={(price: number) => `$${price}`}
        />
        <Column title="Category" dataIndex="category" key="category" />
        <Column title="Stock" dataIndex="stock" key="stock" />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Link to={`/products/${record.id}`}>
                <FaRegEye className="text-xl" />
              </Link>
              <Link to={`/product/edit/${record.id}`}>
                <FaEdit className="text-xl" />
              </Link>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default Products;
