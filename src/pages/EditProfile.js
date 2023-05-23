import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import { Input, Switch, Button, Col, Row, Card, Checkbox, Form } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import styles from "./EditProfile.module.css";
import axios from "axios";
const { TextArea } = Input;
const EditProfile = (props) => {
  console.log(props, "props");

  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    getProfileDetails();
  }, []);

  const getProfileDetails = () => {
    let id = window.location.pathname.split("/")[2];
    console.log(id);

    // Request data
    const requestData = {
      name: "getProfileById",
      request: {
        method: "POST",
        header: [
          {
            key: "Authorization",
            value:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYW5kaWRhdGVfbmFtZSI6InNhdHlha2lzaG9yZTA0QGdtYWlsLmNvbSIsImlzX2NhbmRpZGF0ZSI6dHJ1ZSwiaWF0IjoxNjg0MjQ2NDQ5LCJleHAiOjE2ODQ3NjQ4NDl9.WsMrvaV1W9f-aVtfBp86nfptBKpfEl3YlSfRcMwiaYw",

            type: "text",
          },
        ],
        body: {
          mode: "graphql",
          graphql: {
            query:
              "query GetProfileById($getProfileByIdId: String!) {\n  getProfileById(id: $getProfileByIdId) {\n    id\n    first_name\n    last_name\n    email\n    is_verified\n    image_url\n    description\n  }\n}",
            variables: '{\n  "getProfileByIdId": "' + id + '"\n}',
          },
        },
        url: {
          raw: "https://api.poc.graphql.dev.vnplatform.com/graphql",
          protocol: "https",
          host: ["api", "poc", "graphql", "dev", "vnplatform", "com"],
          path: ["graphql"],
        },
        description:
          "//Variables accepted by the api.\n\n- accepts id (string)\n    \n\n// Expected output\n\n- returns the profile",
      },
    };

    // Make the API call
    axios({
      method: requestData.request.method,
      url: requestData.request.url.raw,
      headers: {
        "Content-Type": "application/json",
        Authorization: requestData.request.header[0].value,
      },
      data: requestData.request.body,
    })
      .then((response) => {
        console.log(response.data); // Process the response data here
      })
      .catch((error) => {
        console.log("An error occurred:", error);
      });
  };

  const onFinish = async (values) => {
    const {
      first_name: firstName,
      last_name: lastName,
      email,
      image_url: imageUrl,
      description,
    } = values;

    values["is_verified"] = isVerified;

    console.log(values, "values");
    return;
    try {
      const response = await axios.post(
        "https://api.poc.graphql.dev.vnplatform.com/graphql",
        {
          query: `
            mutation UpdateProfile(
              $updateProfileId: String!,
              $firstName: String!,
              $lastName: String!,
              $email: String!,
              $isVerified: Boolean!,
              $imageUrl: String!,
              $description: String!
            ) {
              updateProfile(
                id: $updateProfileId,
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
            updateProfileId: "hrrcQa1J3oxwTDE52a0E",
            firstName: "test",
            lastName: "updated",
            email: "test@updated.com",
            isVerified: false,
            imageUrl: "test.com",
            description: "test updated",
          },
        },
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYW5kaWRhdGVfbmFtZSI6IlNpbWFyIiwiaXNfY2FuZGlkYXRlIjp0cnVlLCJpYXQiOjE2NzcyNzAxNTMsImV4cCI6MTY3NzYxNTc1M30.OERVKTr3kCq5cS_QzRWmiEfbPHemMPlW6GXep7IyvA0",
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
    <div className={styles.editprofile}>
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
                  <b style={{ fontSize: "20px" }}>Edit Profile</b>
                </Col>
                <Col span={2}>
                  <b style={{ fontSize: "20px" }}>
                    <CloseOutlined
                      onClick={() => {
                        window.location.href = "/";
                      }}
                    />
                  </b>
                </Col>
              </Row>
            </Col>
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              style={{ marginTop: "70px" }}
              onFinish={onFinish}
              autoComplete="on"
            >
              <span style={{ fontWeight: "bold" }}>Image link</span>
              <Form.Item name="username">
                <Input
                  placeholder="Image link"
                  defaultValue="https://link.to.an.image"
                  style={{ height: "40px", borderRadius: "5px" }}
                />
              </Form.Item>
              <Col span={24}>
                <Row gutter={[16, 16]}>
                  <Col
                    xl={{ span: 12, offset: 0 }}
                    lg={{ span: 12, offset: 0 }}
                    md={{ span: 24, offset: 0 }}
                    sm={{ span: 24, offset: 0 }}
                    xs={{ span: 24, offset: 0 }}
                    xxl={{ span: 12, offset: 0 }}
                  >
                    <span style={{ fontWeight: "bold" }}>First Name</span>
                    <Form.Item name="password">
                      <Input
                        placeholder="Email"
                        defaultValue="darlenerobben@gmail.com"
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
                    <Form.Item name="password">
                      <Input
                        placeholder="Enter Your Last Name"
                        defaultValue="darlenerobben@gmail.com"
                        style={{ height: "40px", borderRadius: "5px" }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <span style={{ fontWeight: "bold" }}>Email</span>
              <Form.Item name="remember" valuePropName="checked">
                <Input
                  placeholder="Enter your Email..."
                  style={{ height: "40px", borderRadius: "5px" }}
                />
              </Form.Item>
              <span style={{ fontWeight: "bold" }}>Description</span>
              <Form.Item name="remember" valuePropName="checked">
                <TextArea
                  rows={2}
                  placeholder="Description"
                  defaultValue="Darlene is a lifestyle influencer with great skills."
                />
              </Form.Item>
              <span style={{ fontWeight: "bold" }}>Verification</span>
              <Form.Item name="remember" valuePropName="checked">
                <div className={styles.talentVerification}>
                  <h6 className={styles.talentIsVerified}>
                    Talent is verified
                  </h6>
                  <Switch
                    className={styles.toggle}
                    style={{ width: 43 }}
                    size="default"
                    defaultChecked
                  />
                </div>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={() => {
                    window.location.href = "/";
                  }}
                >
                  Update Profile
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Row>
      </Col>
    </div>
  );
};

export default EditProfile;
