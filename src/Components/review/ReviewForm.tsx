import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Row, Col } from "antd";

const ReviewForm: React.FC = () => (
  <Form.List name="reviews">
    {(fields, { add, remove }) => (
      <>
        {fields.map(({ key, name, ...restField }) => (
          <div key={key} className="mb-4 p-4 border rounded-md">
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12} lg={8}>
                <Form.Item
                  {...restField}
                  name={[name, "rating"]}
                  label="Rating"
                  rules={[{ required: true, message: "Missing Ratings" }]}
                >
                  <Input placeholder="Rating" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12} lg={8}>
                <Form.Item
                  {...restField}
                  name={[name, "comment"]}
                  label="Comment"
                  rules={[{ required: true, message: "Missing comment" }]}
                >
                  <Input placeholder="Write comment" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12} lg={8}>
                <Form.Item
                  {...restField}
                  name={[name, "date"]}
                  label="Date"
                  initialValue={new Date().toISOString()}
                  rules={[{ required: true, message: "Missing date" }]}
                >
                  <Input placeholder="Date" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12} lg={8}>
                <Form.Item
                  {...restField}
                  name={[name, "reviewerName"]}
                  label="Reviewer Name"
                  rules={[{ required: true, message: "Missing name" }]}
                >
                  <Input placeholder="Reviewer Name" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12} lg={8}>
                <Form.Item
                  {...restField}
                  name={[name, "reviewerEmail"]}
                  label="Reviewer Email"
                  rules={[{ required: true, message: "Missing email" }]}
                >
                  <Input placeholder="Reviewer Email" />
                </Form.Item>
              </Col>
              <Col xs={24} className="text-right">
                <Button
                  danger
                  type="link"
                  onClick={() => remove(name)}
                  icon={<MinusCircleOutlined />}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          </div>
        ))}
        <Form.Item>
          <Button
            type="dashed"
            onClick={() => add()}
            block
            icon={<PlusOutlined />}
          >
            Add Review
          </Button>
        </Form.Item>
      </>
    )}
  </Form.List>
);

export default ReviewForm;
