import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
} from "antd";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { ProductFormValues } from "../../interfaces/product.interface";
import {
  useGetCategoryQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../redux/feature/products/productsApi";
import ReviewForm from "../review/ReviewForm";

const { Option } = Select;

const EditProduct: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const numberId = Number(id);

  const [form] = Form.useForm();
  const { data: product } = useGetSingleProductQuery(numberId);
  const { data: categories } = useGetCategoryQuery();
  const [updateProduct, { isSuccess }] = useUpdateProductMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate("/products");
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (product) {
      form.setFieldsValue({
        title: product.title,
        description: product.description,
        price: product.price,
        discountPercentage: product.discountPercentage,
        stock: product.stock,
        brand: product.brand,
        category: product.category,
        tags: product.tags,
        weight: product.weight,
        warrantyInformation: product.warrantyInformation,
        shippingInformation: product.shippingInformation,
        availabilityStatus: product.availabilityStatus,
        minimumOrderQuantity: product.minimumOrderQuantity,
        dimensions: {
          width: product.dimensions?.width,
          height: product.dimensions?.height,
          depth: product.dimensions?.depth,
        },
        returnPolicy: product.returnPolicy,
        reviews: product.reviews,
      });
    }
  }, [product, form]);

  const onFinish = (values: ProductFormValues) => {
    console.log({ values });

    updateProduct({ id, ...values });
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-6 gap-4">
        <h3 className="font-bold text-sky-500 text-2xl">Edit Product</h3>
        <form method="dialog">
          <button className="btn btn-error btn-outline btn-sm text-xl">
            X
          </button>
        </form>
      </div>

      <Form
        layout="vertical"
        form={form}
        name="edit-product-form"
        onFinish={onFinish}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Title" name="title" rules={[{ required: true }]}>
              <Input placeholder="Enter product title" />
            </Form.Item>
          </Col>

          {categories && (
            <Col xs={24} sm={12} md={8}>
              <Form.Item
                name="category"
                label="Category"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Select a product"
                  allowClear
                  dropdownStyle={{ zIndex: 9999 }}
                  getPopupContainer={(trigger) => trigger.parentNode}
                >
                  {categories?.map((item, index) => (
                    <Option key={index} value={item?.slug}>
                      {item?.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          )}

          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Brand" name="brand">
              <Input placeholder="Enter brand name" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Tags" name="tags">
              <Select mode="tags" placeholder="Add tags" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Warranty Information" name="warrantyInformation">
              <Input placeholder="Enter warranty information" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Shipping Information" name="shippingInformation">
              <Input placeholder="Enter shipping information" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Return Policy" name="returnPolicy">
              <Input placeholder="Enter return policy" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Price" name="price" rules={[{ required: true }]}>
              <InputNumber
                min={0}
                style={{ width: "100%" }}
                placeholder="Enter price"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Discount Percentage" name="discountPercentage">
              <InputNumber
                min={0}
                max={100}
                style={{ width: "100%" }}
                placeholder="Enter discount %"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Stock" name="stock">
              <InputNumber
                min={0}
                style={{ width: "100%" }}
                placeholder="Enter stock"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Weight" name="weight">
              <InputNumber
                min={0}
                style={{ width: "100%" }}
                placeholder="Enter weight (g)"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item
              label="Minimum Order Quantity"
              name="minimumOrderQuantity"
            >
              <InputNumber
                min={1}
                style={{ width: "100%" }}
                placeholder="Enter minimum order quantity"
              />
            </Form.Item>
          </Col>

          <Col xs={24}>
            <Form.Item label="Description" name="description">
              <Input.TextArea
                rows={4}
                placeholder="Enter product description"
              />
            </Form.Item>
          </Col>

          <Col xs={24}>
            <Form.Item label="Dimensions">
              <Space wrap>
                <Form.Item name={["dimensions", "width"]} label="Width" noStyle>
                  <InputNumber min={0} placeholder="Width" />
                </Form.Item>
                <Form.Item
                  name={["dimensions", "height"]}
                  label="Height"
                  noStyle
                >
                  <InputNumber min={0} placeholder="Height" />
                </Form.Item>
                <Form.Item name={["dimensions", "depth"]} label="Depth" noStyle>
                  <InputNumber min={0} placeholder="Depth" />
                </Form.Item>
              </Space>
            </Form.Item>
          </Col>

          <Col span={24}>
            <ReviewForm />
          </Col>
        </Row>

        <Row justify="end">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </div>
  );
};

export default EditProduct;
