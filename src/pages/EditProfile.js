import "antd/dist/antd.min.css";
import { Input, Switch, Button, Col, Row, Card, Checkbox, Form } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import styles from "./EditProfile.module.css";
const { TextArea } = Input;
const EditProfile = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
              onFinishFailed={onFinishFailed}
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
