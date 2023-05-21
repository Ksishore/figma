import { useState, useCallback, useEffect } from "react";
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
import axios from "axios";
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

  const [profiles, setProfiles] = useState([]);
  console.log(profiles, "profiles");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://api.poc.graphql.dev.vnplatform.com/graphql",
          {
            query:
              "query GetAllProfiles($orderBy: globalOrderBy, $searchString: String, $rows: Int, $page: Int) { getAllProfiles(orderBy: $orderBy, searchString: $searchString, rows: $rows, page: $page) { size profiles { id first_name last_name email is_verified image_url description } } }",
            variables: {
              orderBy: {
                key: "is_verified",
                sort: "desc",
              },
              rows: 100,
              page: 0,
              searchString: "",
            },
          },
          {
            headers: {
              Authorization:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYW5kaWRhdGVfbmFtZSI6InNhdHlha2lzaG9yZTA0QGdtYWlsLmNvbSIsImlzX2NhbmRpZGF0ZSI6dHJ1ZSwiaWF0IjoxNjg0MjQ2NDQ5LCJleHAiOjE2ODQ3NjQ4NDl9.WsMrvaV1W9f-aVtfBp86nfptBKpfEl3YlSfRcMwiaYw",
            },
          }
        );

        const data = response.data.data;
        setProfiles(data.getAllProfiles.profiles);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
      render: (description) => {
        return <div style={{ textTransform: "capitalize" }}>{description}</div>;
      },
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

                {profiles &&
                  profiles?.map((e) => (
                    <Col style={{ marginTop: "17px" }}>
                      <Row>
                        <Col>
                          <img
                            className={styles.ellipseIcon}
                            alt="profile"
                            src={e?.image_url}
                          />
                        </Col>
                        <Col>
                          <p style={{ margin: "1rem" }}>{e?.first_name}</p>
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
                  ))}
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
                    ? profiles
                    : profiles.filter(
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


