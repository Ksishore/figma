import React, { useState } from "react";
import "antd/dist/antd.min.css";
import { Input, Switch, Button, Col, Row, Card, Checkbox, Form } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import axios from "axios";
import styles from "./CreateProfile.module.css";
const { TextArea } = Input;

const CreateProfile = () => {
  const [form] = Form.useForm();

  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(null);

  // const handleSubmit = async (values) => {
  //   try {
  //     const response = await axios.post(
  //       "https://api.poc.graphql.dev.vnplatform.com/graphql",
  //       {
  //         query: `
  //           mutation CreateProfile(
  //             $firstName: String!,
  //             $lastName: String!,
  //             $email: String!,
  //             $isVerified: Boolean!,
  //             $imageUrl: String!,
  //             $description: String!
  //           ) {
  //             createProfile(
  //               first_name: $firstName,
  //               last_name: $lastName,
  //               email: $email,
  //               is_verified: $isVerified,
  //               image_url: $imageUrl,
  //               description: $description
  //             ) {
  //               id
  //               first_name
  //               last_name
  //               email
  //               is_verified
  //               image_url
  //               description
  //             }
  //           }
  //         `,
  //         variables: {
  //           firstName,
  //           lastName,
  //           email,
  //           isVerified,
  //           imageUrl,
  //           description,
  //         },
  //       },
  //       {
  //         headers: {
  //           Authorization:
  //             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYW5kaWRhdGVfbmFtZSI6IlNpbWFyIiwiaXNfY2FuZGlkYXRlIjp0cnVlLCJpYXQiOjE2NzcyNzAxNTMsImV4cCI6MTY3NzYxNTc1M30.OERVKTr3kCq5cS_QzRWmiEfbPHemMPlW6GXep7IyvA0",
  //         },
  //       }
  //     );
  //     console.log(response);
  //     if (response.data) {
  //       document.getElementById("createProfile").reset();
  //       window.location.href = "/";
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  const handleSubmit = async (values) => {
    const {
      first_name: firstName,
      last_name: lastName,
      email,
      image_url: imageUrl,
      description,
    } = values;

    values["is_verified"] = isVerified;

    console.log(values, "values");
    // return;
    try {
      const response = await axios.post(
        "https://api.poc.graphql.dev.vnplatform.com/graphql",
        {
          query: `
            mutation CreateProfile(
              $firstName: String!,
              $lastName: String!,
              $email: String!,
              $isVerified: Boolean!,
              $imageUrl: String!,
              $description: String!
            ) {
              createProfile(
                first_name: $firstName,
                last_name: $lastName,
                email: $email,
                is_verified: $isVerified,
                image_url: $imageUrl,
                description: $description
              ) {
                id
                first_name
                last_name
                email
                is_verified
                image_url
                description
              }
            }
          `,
          variables: {
            firstName,
            lastName,
            email,
            isVerified,
            imageUrl,
            description,
          },
        },
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYW5kaWRhdGVfbmFtZSI6InNhdHlha2lzaG9yZTA0QGdtYWlsLmNvbSIsImlzX2NhbmRpZGF0ZSI6dHJ1ZSwiaWF0IjoxNjg0MjQ2NDQ5LCJleHAiOjE2ODQ3NjQ4NDl9.WsMrvaV1W9f-aVtfBp86nfptBKpfEl3YlSfRcMwiaYw",
          },
        }
      );
      console.log(response);
      if (response.data) {
        document.getElementById("createProfile").reset();
        window.location.href = "/";
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Col span={24}>
        <Row justify={"center"}>
          <Card
            style={{
              width: "70vh",
              marginTop: "70px",
              boxShadow: "5px 5px 10px 10px rgba(0, 0, 0, 0.19)",
            }}
          >
            <Col span={24}>
              <Row justify={"end"}>
                <Col span={22}>
                  <b style={{ fontSize: "20px" }}>Create Profile</b>
                </Col>
                <Col span={2}>
                  <b style={{ fontSize: "20px" }}>
                    {/* <CloseOutlined
                    onClick={() => {
                      window.location.href = "/";
                    }}
                  /> */}
                  </b>
                </Col>
              </Row>
            </Col>
            <hr style={{ marginTop: "20px" }}></hr>
            <Form
              name="createProfile"
              // initialValues={{
              //   remember: true,
              // }}
              style={{ marginTop: "70px" }}
              onFinish={handleSubmit}
              autoComplete="on"
              id="createProfile"
              form={form}
            >
              <span style={{ fontWeight: "bold" }}>Image Link</span>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please Paste Image URL/Link",
                  },
                ]}
                name="image_url"
              >
                <Input
                  type="link"
                  placeholder="Image Link"
                  style={{ height: "40px", borderRadius: "5px" }}
                />
              </Form.Item>
              <Col span={24}>
                <Row gutter={[10, 10]}>
                  <Col
                    xl={{ span: 12, offset: 0 }}
                    lg={{ span: 12, offset: 0 }}
                    md={{ span: 24, offset: 0 }}
                    sm={{ span: 24, offset: 0 }}
                    xs={{ span: 24, offset: 0 }}
                    xxl={{ span: 12, offset: 0 }}
                  >
                    <span style={{ fontWeight: "bold" }}>First Name</span>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please Enter First Name",
                        },
                      ]}
                      name="first_name"
                    >
                      <Input
                        placeholder="Enter your First Name"
                        style={{ height: "40px", borderRadius: "5px" }}
                      />
                    </Form.Item>
                  </Col>
                  <Col
                    xl={{ span: 12, offset: 0 }}
                    lg={{ span: 12, offset: 0 }}
                    md={{ span: 24, offset: 0 }}
                    sm={{ span: 24, offset: 0 }}
                    xs={{ span: 24, offset: 0 }}
                    xxl={{ span: 12, offset: 0 }}
                  >
                    <span style={{ fontWeight: "bold" }}>Last Name</span>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please Enter Last Name",
                        },
                      ]}
                      name="last_name"
                    >
                      <Input
                        placeholder=" Enter your Last Name"
                        style={{ height: "40px", borderRadius: "5px" }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <span style={{ fontWeight: "bold" }}>Email</span>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please Enter Email Id",
                  },
                ]}
                name="email"
              >
                <Input
                  type="email"
                  placeholder="Email Id"
                  style={{ height: "40px", borderRadius: "5px" }}
                />
              </Form.Item>
              <span style={{ fontWeight: "bold" }}>Description</span>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please Enter Description",
                  },
                ]}
                name="description"
              >
                <TextArea
                  showCount
                  rows={2}
                  placeholder="Write a description for talent"
                />
              </Form.Item>
              <span style={{ fontWeight: "bold" }}>Verification</span>
              <Form.Item name="is_verified" valuePropName="checked">
                <div className={styles.talentVerification}>
                  <h6 className={styles.talentIsVerified}>
                    Talent is verified
                  </h6>
                  <Switch
                    className={styles.toggle}
                    style={{ width: 43 }}
                    size="default"
                    defaultChecked={isVerified}
                    onChange={() => {
                      setIsVerified(!isVerified);
                    }}
                  />
                </div>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button onClick={() => {}} type="primary" htmlType="submit">
                  Create Profile
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Row>
      </Col>
    </div>
  );
};

export default CreateProfile;
