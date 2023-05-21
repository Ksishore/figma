import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import {
  Switch,
  Col,
  Row,
  Calendar,
  Card,
  Input,
  Button,
  Table,
  Popover,
  Space,
  Popconfirm,
} from "antd";
import {
  UserAddOutlined,
  MoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./ViewPage.module.css";
const content = (
  <div>
    <Link to="/editProfile">
      <Button style={{ border: "0px", marginLeft: "40px" }}>
        Edit Profile
      </Button>
    </Link>
    <br />
    <Popconfirm
      title="Removed profile will be deleted permenantly and Won't be available anymore."
      description="Are you sure"
      okText={
        <Button style={{ backgroundColor: "red", color: "#fff" }}>
          Delete
        </Button>
      }
      cancelText={<Button>Cancel</Button>}
    >
      <Button style={{ border: "0px", marginLeft: "40px" }}>
        Remove Profile
      </Button>
    </Popconfirm>
  </div>
);
const ViewPage = () => {
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  console.log("darkMode", darkMode);

  const searchProduct = (e) => {
    setSearchItem(e.target.value);
    console.log("search", searchItem);
  };
  const onButtonContainer1Click = useCallback(() => {
    navigate("/totaldata");
  }, [navigate]);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => (a?.id?.toLowerCase() < b?.id?.toLowerCase() ? 1 : -1),
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) =>
        a?.email?.toLowerCase() < b?.email?.toLowerCase() ? 1 : -1,
    },
    {
      title: "Description",
      dataIndex: "description",
      sorter: (a, b) =>
        a?.description?.toLowerCase() < b?.description?.toLowerCase() ? 1 : -1,
    },
    {
      title: <SettingOutlined />,
      dataIndex: "action",
      render: (createdAt) => {
        return (
          <span
            className="col_styling"
            style={{
              textTransform: "capitalize",
            }}
          >
            <Popover content={content} trigger="hover">
              <Button style={{ border: "0px" }}>
                <MoreOutlined />
              </Button>
            </Popover>
          </span>
        );
      },
    },
  ];
  const data = [
    {
      id: "123",
      email: "binhan628@gmail.com",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris at faucibus pharetra pellentesque diam pulvinar.Mauris penatibus ut luctus posuere posuere odio nisimauris aliquet. Sapien aliquet porta tincidunt massa idquam pharetra. Massa vitae feugiat vulputate et praesentnisl neque nunc tortor.",
    },
    {
      id: "123",
      email: "danghoang87hl@gmail.com",
      description:
        " Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris at faucibus pharetra pellentesque diam pulvinar. Mauris penatibus ut luctus posuere posuere odio nisi mauris aliquet. Sapien aliquet porta tincidunt massa id quam pharetra. Massa vitae feugiat vulputate et praesent nisl neque nunc tortor.",
    },
    {
      id: "123",
      email: "manhhachkt08@gmail.com",
      description:
        " Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris at faucibus pharetra pellentesque diam pulvinar. Mauris penatibus ut luctus posuere posuere odio nisi mauris aliquet. Sapien aliquet porta tincidunt massa id       quam pharetra. Massa vitae feugiat vulputate et praesent        nisl neque nunc tortor.",
    },
    {
      id: "123",
      email: "tienlapspktnd@gmail.com",
      description:
        " Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris at faucibus pharetra pellentesque diam pulvinar. Mauris penatibus ut luctus posuere posuere odio nisi mauris aliquet. Sapien aliquet porta tincidunt massa id       quam pharetra. Massa vitae feugiat vulputate et praesent        nisl neque nunc tortor.",
    },
    {
      id: "123",
      email: "vuhaithuongnute@gmail.com",
      description:
        " Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris at faucibus pharetra pellentesque diam pulvinar. Mauris penatibus ut luctus posuere posuere odio nisi mauris aliquet. Sapien aliquet porta tincidunt massa id       quam pharetra. Massa vitae feugiat vulputate et praesent        nisl neque nunc tortor.",
    },
    {
      id: "123",
      email: "trungkienspktnd@gamail.com",
      description:
        " Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris at faucibus pharetra pellentesque diam pulvinar. Mauris penatibus ut luctus posuere posuere odio nisi mauris aliquet. Sapien aliquet porta tincidunt massa id       quam pharetra. Massa vitae feugiat vulputate et praesent        nisl neque nunc tortor.",
    },
    {
      id: "123",
      email: "ckctm12@gmail.com",
      description:
        " Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris at faucibus pharetra pellentesque diam pulvinar. Mauris penatibus ut luctus posuere posuere odio nisi mauris aliquet. Sapien aliquet porta tincidunt massa id       quam pharetra. Massa vitae feugiat vulputate et praesent        nisl neque nunc tortor.",
    },
    {
      id: "123",
      email: "darlene@gmail.com",
      description:
        " Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris at faucibus pharetra pellentesque diam pulvinar. Mauris penatibus ut luctus posuere posuere odio nisi mauris aliquet. Sapien aliquet porta tincidunt massa id       quam pharetra. Massa vitae feugiat vulputate et praesent        nisl neque nunc tortor.",
    },
    {
      id: "123",
      email: "lelsie@gmail.com",
      description:
        " Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris at faucibus pharetra pellentesque diam pulvinar. Mauris penatibus ut luctus posuere posuere odio nisi mauris aliquet. Sapien aliquet porta tincidunt massa id       quam pharetra. Massa vitae feugiat vulputate et praesent        nisl neque nunc tortor.",
    },
    {
      id: "123",
      email: "devonlane@gmail.com",
      description:
        " Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris at faucibus pharetra pellentesque diam pulvinar. Mauris penatibus ut luctus posuere posuere odio nisi mauris aliquet. Sapien aliquet porta tincidunt massa id       quam pharetra. Massa vitae feugiat vulputate et praesent        nisl neque nunc tortor.",
    },
  ];
  return (
    <div style={{ backgroundColor: "#f0f5ff", height: "auto" }}>
      <Col span={24}>
        <Card style={{ height: "70px" }}>
          <Row justify={"space-between"}>
            <Col
              xl={{ span: 12, offset: 0 }}
              lg={{ span: 24, offset: 0 }}
              md={{ span: 12, offset: 0 }}
              sm={{ span: 12, offset: 0 }}
              xs={{ span: 12, offset: 0 }}
              xxl={{ span: 22, offset: 0 }}
            >
              <img alt="" src="/vnlogo1.svg" />
              <span>iral Nation</span>
            </Col>
            <Col
              xl={{ span: 2, offset: 0 }}
              lg={{ span: 24, offset: 0 }}
              md={{ span: 12, offset: 0 }}
              sm={{ span: 12, offset: 0 }}
              xs={{ span: 12, offset: 0 }}
              xxl={{ span: 2, offset: 0 }}
            >
              <Row>
                <Col span={8}>
                  <img alt="" src="/lightmodefilled.svg" />
                </Col>
                <Col span={8}>
                  <Switch
                    onChange={() => {
                      setDarkMode(!darkMode);
                    }}
                    style={{ width: 43 }}
                    size="default"
                    checked={darkMode}
                  />
                </Col>
                <Col span={8}>
                  <img
                    alt=""
                    src="/weathermoon.svg"
                    style={{ marginLeft: "20px" }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={24} className={styles.cardbody}>
        <Col span={24}>
          <Row gutter={[32, 32]}>
            <Col
              xl={{ span: 18, offset: 0 }}
              lg={{ span: 24, offset: 0 }}
              md={{ span: 6, offset: 0 }}
              sm={{ span: 6, offset: 0 }}
              xs={{ span: 8, offset: 0 }}
              xxl={{ span: 20, offset: 0 }}
            >
              <Input
                placeholder="Search"
                style={{ display: "flex" }}
                onChange={searchProduct}
              />
            </Col>
            <Col xxl={4} xl={6}>
              <Row gutter={[10, 10]}>
                <Col>
                  <Button
                    style={{ borderRadius: "5px" }}
                    onClick={() => {
                      window.location.href = "/createprofile";
                    }}
                  >
                    <UserAddOutlined style={{ color: "#40a9ff" }} />
                    <span style={{ color: "#40a9ff" }}>Create Profile</span>
                  </Button>
                </Col>
                <Col span={2}>
                  <div>
                    <div className={styles.toggleview}>
                      <div
                        className={styles.button2}
                        onClick={onButtonContainer1Click}
                      >
                        <img
                          className={styles.toggleboardIcon}
                          alt=""
                          src="/toggleboard.svg"
                        />
                      </div>
                      <div className={styles.toggleviewChild} />
                      <div className={styles.button3}>
                        <div className={styles.toggleboardIcon}>
                          <div className={styles.rectangleParent}>
                            <div className={styles.groupChild} />
                            <div className={styles.groupItem} />
                            <div className={styles.groupInner} />
                            <div className={styles.rectangleDiv} />
                            <div className={styles.groupChild1} />
                            <div className={styles.groupChild2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[10, 10]}>
            <Col
              xl={{ span: 7, offset: 0 }}
              lg={{ span: 24, offset: 0 }}
              md={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
              xxl={{ span: 6, offset: 0 }}
            >
              <Card
                style={{
                  border: "0px",
                  boxShadow: "5px 0 rgba(0, 0, 0, 0.19)",
                  marginTop: "10px",
                }}
              >
                <span style={{ marginBottom: "15px", marginLeft: "25px" }}>
                  Name
                </span>
                <Col style={{ marginTop: "15px" }}>
                  <Row>
                    <Col>
                      <img
                        className={styles.frameChild}
                        alt=""
                        src="/ellipse-1596@2x.png"
                      />
                    </Col>
                    <Col>
                      <p style={{ margin: "1rem" }}>Ronald Richards</p>
                    </Col>
                    <Col>
                      <img
                        style={{ marginTop: "15px" }}
                        className={styles.accreditationBadgeIcon}
                        alt=""
                        src="/accreditation-badge.svg"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col style={{ marginTop: "17px" }}>
                  <Row>
                    <Col>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/ellipse-15961@2x.png"
                      />
                    </Col>
                    <Col>
                      <p style={{ margin: "0.8rem" }}>MrBeast</p>
                    </Col>
                    <Col style={{ marginTop: "12px" }}>
                      <img
                        className={styles.accreditationBadgeIcon}
                        alt=""
                        src="/accreditation-badge.svg"
                      />
                    </Col>
                  </Row>
                </Col>

                <Col style={{ marginTop: "17px" }}>
                  <Row>
                    <Col>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/ellipse-15962@2x.png"
                      />
                    </Col>
                    <Col>
                      <p style={{ margin: "0.8rem" }}>Jimmy Nelson</p>
                    </Col>
                    <Col style={{ marginTop: "12px" }}>
                      <img
                        className={styles.accreditationBadgeIcon}
                        alt=""
                        src="/accreditation-badge.svg"
                      />
                    </Col>
                  </Row>
                </Col>

                <Col style={{ marginTop: "17px" }}>
                  <Row>
                    <Col>
                      <img
                        className={styles.ellipseIcon}
                        alt=""
                        src="/ellipse-15963@2x.png"
                      />
                    </Col>
                    <Col>
                      <p style={{ margin: "0.8rem" }}>Ralph Edwards</p>
                    </Col>
                    <Col style={{ marginTop: "12px" }}>
                      <img
                        className={styles.accreditationBadgeIcon}
                        alt=""
                        src="/accreditation-badge.svg"
                      />
                    </Col>
                  </Row>
                </Col>

                <Col style={{ marginTop: "17px" }}>
                  <Row>
                    <Col>
                      <img
                        className={styles.ellipseIcon}
                        alt=""
                        src="/ellipse-15964@2x.png"
                      />
                    </Col>
                    <Col>
                      <p style={{ margin: "0.8rem" }}> Marvin Gary McKin...</p>
                    </Col>
                    <Col style={{ marginTop: "12px" }}>
                      <img
                        className={styles.accreditationBadgeIcon}
                        alt=""
                        src="/accreditation-badge1.svg"
                      />
                    </Col>
                  </Row>
                </Col>

                <Col style={{ marginTop: "17px" }}>
                  <Row>
                    <Col>
                      <img
                        className={styles.ellipseIcon}
                        alt=""
                        src="/ellipse-15965@2x.png"
                      />
                    </Col>
                    <Col>
                      <p style={{ margin: "0.8rem" }}> Jacob Jones</p>
                    </Col>
                    <Col style={{ marginTop: "12px" }}>
                      <img
                        className={styles.accreditationBadgeIcon}
                        alt=""
                        src="/accreditation-badge1.svg"
                      />
                    </Col>
                  </Row>
                </Col>

                <Col style={{ marginTop: "17px" }}>
                  <Row>
                    <Col>
                      <img
                        className={styles.ellipseIcon}
                        alt=""
                        src="/ellipse-15966@2x.png"
                      />
                    </Col>
                    <Col>
                      <p style={{ margin: "0.8rem" }}> Darrell Steward</p>
                    </Col>
                    <Col style={{ marginTop: "12px" }}>
                      <img
                        className={styles.accreditationBadgeIcon}
                        alt=""
                        src="/accreditation-badge1.svg"
                      />
                    </Col>
                  </Row>
                </Col>

                <Col style={{ marginTop: "17px" }}>
                  <Row>
                    <Col>
                      <img
                        className={styles.ellipseIcon}
                        alt=""
                        src="/ellipse-15967@2x.png"
                      />
                    </Col>
                    <Col>
                      <p style={{ margin: "0.8rem" }}>Darlene Robertson</p>
                    </Col>
                    <Col style={{ marginTop: "12px" }}>
                      <img
                        className={styles.accreditationBadgeIcon}
                        alt=""
                        src="/accreditation-badge1.svg"
                      />
                    </Col>
                  </Row>
                </Col>

                <Col style={{ marginTop: "17px" }}>
                  <Row>
                    <Col>
                      <img
                        className={styles.ellipseIcon}
                        alt=""
                        src="/ellipse-15968@2x.png"
                      />
                    </Col>
                    <Col>
                      <p style={{ margin: "0.8rem" }}> Leslie Alexander</p>
                    </Col>
                    <Col style={{ marginTop: "12px" }}>
                      <img
                        className={styles.accreditationBadgeIcon}
                        alt=""
                        src="/accreditation-badge1.svg"
                      />
                    </Col>
                  </Row>
                </Col>

                <Col style={{ marginTop: "17px" }}>
                  <Row>
                    <Col>
                      <img
                        className={styles.ellipseIcon}
                        alt=""
                        src="/ellipse-15969@2x.png"
                      />
                    </Col>
                    <Col>
                      <p style={{ margin: "0.8rem" }}>Devon Lane</p>
                    </Col>
                    <Col style={{ marginTop: "12px" }}>
                      <img
                        className={styles.accreditationBadgeIcon}
                        alt=""
                        src="/accreditation-badge1.svg"
                      />
                    </Col>
                  </Row>
                </Col>
              </Card>
            </Col>

            <Col
              xl={{ span: 17, offset: 0 }}
              lg={{ span: 24, offset: 0 }}
              md={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
              xxl={{ span: 18, offset: 0 }}
              style={{ marginTop: "25px" }}
            >
              <Table
                columns={columns}
                dataSource={
                  searchItem.length == 0
                    ? data
                    : data.filter(
                        (e) =>
                          e.id.indexOf(searchItem) > -1 ||
                          e.email.indexOf(searchItem) > -1 ||
                          e.description.indexOf(searchItem) > -1
                      )
                }
                scroll={{ y: "70vh", x: "auto" }}
                sticky={true}
                sortDirections={["ascend", "descend" || "descend", "ascend"]}
              />
            </Col>
          </Row>
        </Col>
      </Col>
    </div>
  );
};

export default ViewPage;
